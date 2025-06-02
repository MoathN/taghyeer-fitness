import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FaCalendarCheck, FaUndo, FaCheck } from "react-icons/fa";

const ProgramTracker = ({ program, user }) => {
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const [activeWeek, setActiveWeek] = useState("1");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // In a real app, this would load from an API or local storage
    const loadProgress = () => {
      const savedProgress = localStorage.getItem(`program-${program.id}-progress`);
      if (savedProgress) {
        try {
          const parsedProgress = JSON.parse(savedProgress);
          setCompletedWorkouts(parsedProgress.completedWorkouts || {});
          
          // Find the highest week with at least one completed workout
          const highestWeek = Object.keys(parsedProgress.completedWorkouts || {})
            .map(key => parseInt(key.split('-')[0]))
            .reduce((max, current) => Math.max(max, current), 1);
          
          setActiveWeek(highestWeek.toString());
          
          // Calculate overall progress
          calculateProgress(parsedProgress.completedWorkouts || {});
        } catch (error) {
          console.error("Error loading progress data:", error);
        }
      }
    };

    loadProgress();
  }, [program.id]);

  const calculateProgress = (completedData = completedWorkouts) => {
    // Count total workouts across all weeks
    let totalWorkouts = 0;
    let completedCount = 0;

    program.weeks.forEach((week, weekIndex) => {
      const weekNumber = weekIndex + 1;
      week.workouts.forEach((workout, workoutIndex) => {
        // Skip rest days
        if (!workout.focus.includes("Rest Day")) {
          totalWorkouts++;
          const workoutKey = `${weekNumber}-${workoutIndex}`;
          if (completedData[workoutKey]) {
            completedCount++;
          }
        }
      });
    });

    const calculatedProgress = totalWorkouts > 0 ? Math.floor((completedCount / totalWorkouts) * 100) : 0;
    setProgress(calculatedProgress);
    return calculatedProgress;
  };

  const toggleWorkoutCompletion = (weekNumber, workoutIndex) => {
    const workoutKey = `${weekNumber}-${workoutIndex}`;
    
    const updatedCompletedWorkouts = {
      ...completedWorkouts,
      [workoutKey]: !completedWorkouts[workoutKey],
    };
    
    setCompletedWorkouts(updatedCompletedWorkouts);
    
    // Save to localStorage (in a real app, would save to backend)
    const updatedProgress = calculateProgress(updatedCompletedWorkouts);
    
    localStorage.setItem(`program-${program.id}-progress`, JSON.stringify({
      completedWorkouts: updatedCompletedWorkouts,
      lastUpdated: new Date().toISOString(),
    }));

    if (updatedCompletedWorkouts[workoutKey]) {
      toast.success("Workout marked as completed!");
    }
  };

  const resetProgress = () => {
    if (confirm("Are you sure you want to reset your progress for this program?")) {
      setCompletedWorkouts({});
      setProgress(0);
      localStorage.removeItem(`program-${program.id}-progress`);
      toast.info("Progress has been reset");
    }
  };

  // If no program data is provided
  if (!program || !program.weeks || program.weeks.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Program Tracker</CardTitle>
          <CardDescription>No program data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Program Tracker</CardTitle>
            <CardDescription>Track your progress through this program</CardDescription>
          </div>
          {user && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetProgress}
              className="h-8 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <FaUndo className="mr-1 h-3 w-3" /> Reset
            </Button>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress: {progress}%</span>
            {progress === 100 && (
              <span className="text-xs text-green-500 flex items-center">
                <FaCheck className="mr-1" /> Complete
              </span>
            )}
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent>
        {!user ? (
          <div className="text-center py-4 text-muted-foreground">
            <p>Sign in to track your progress</p>
            <Button className="mt-2" size="sm" asChild>
              <a href="/auth/login">Sign In</a>
            </Button>
          </div>
        ) : (
          <Tabs value={activeWeek} onValueChange={setActiveWeek} className="w-full">
            <TabsList className="mb-4 w-full h-auto flex flex-wrap gap-1 justify-start">
              {program.weeks.map((week, index) => (
                <TabsTrigger 
                  key={index} 
                  value={(index + 1).toString()}
                  className="flex-grow-0 data-[state=active]:bg-primary/20"
                >
                  Week {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            {program.weeks.map((week, weekIndex) => (
              <TabsContent key={weekIndex} value={(weekIndex + 1).toString()} className="mt-0">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{week.description}</p>
                  
                  {week.workouts.map((workout, workoutIndex) => {
                    const workoutKey = `${weekIndex + 1}-${workoutIndex}`;
                    const isCompleted = completedWorkouts[workoutKey] || false;
                    const isRestDay = workout.focus.includes("Rest Day");
                    
                    return (
                      <div 
                        key={workoutIndex} 
                        className={`p-3 rounded-md border ${
                          isCompleted 
                            ? 'bg-primary/10 border-primary/20' 
                            : 'bg-card border-muted-foreground/20'
                        } ${isRestDay ? 'opacity-70' : ''}`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{workout.day}</h4>
                            <p className="text-sm text-muted-foreground">{workout.focus}</p>
                            <p className="text-xs mt-1">
                              {workout.exercises.length} exercise{workout.exercises.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                          
                          {!isRestDay && (
                            <div className="flex items-center">
                              <Checkbox 
                                id={`workout-${workoutKey}`}
                                checked={isCompleted}
                                onCheckedChange={() => toggleWorkoutCompletion(weekIndex + 1, workoutIndex)}
                              />
                              <label 
                                htmlFor={`workout-${workoutKey}`}
                                className="ml-2 text-sm cursor-pointer"
                              >
                                {isCompleted ? 'Completed' : 'Mark as complete'}
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgramTracker; 