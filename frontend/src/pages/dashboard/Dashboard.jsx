import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FaDumbbell, FaAppleAlt, FaCalendarCheck, FaShoppingCart } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const Dashboard = () => {
  const { user } = useOutletContext();
  const [userStats, setUserStats] = useState({
    workoutsCompleted: 0,
    nutritionProgress: 0,
    weeklyStreak: 0,
    pointsEarned: 0
  });
  const [activePlan, setActivePlan] = useState(null);
  const [upcomingWorkouts, setUpcomingWorkouts] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);
  const [bodyStats, setBodyStats] = useState({
    weight: { value: 0, change: 0 },
    bodyFat: { value: 0, change: 0 },
    muscleMass: { value: 0, change: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    // Load user data from localStorage
    const loadUserData = () => {
      setLoading(true);
      
      try {
        // Load program progress data from localStorage
        const programProgress = {};
        const completedWorkouts = [];
        
        // Search localStorage for program progress data
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('program-') && key.endsWith('-progress')) {
            try {
              const data = JSON.parse(localStorage.getItem(key));
              const programId = key.split('-')[1];
              
              // Calculate completed workouts count for this program
              const completedCount = Object.values(data.completedWorkouts || {}).filter(Boolean).length;
              
              programProgress[programId] = {
                completedWorkouts: completedCount,
                lastUpdated: data.lastUpdated,
                progress: 0, // Will calculate later if we find the program
                data: data
              };
              
              // Add to completedWorkouts array
              Object.entries(data.completedWorkouts || {}).forEach(([workoutKey, isCompleted]) => {
                if (isCompleted) {
                  const [weekNumber, workoutIndex] = workoutKey.split('-');
                  completedWorkouts.push({
                    programId,
                    weekNumber: parseInt(weekNumber),
                    workoutIndex: parseInt(workoutIndex),
                    date: data.lastUpdated
                  });
                }
              });
            } catch (error) {
              console.error(`Error parsing progress data for ${key}:`, error);
            }
          }
        }

        // Use mock data for active plan but populate with actual progress
        let userActivePlan = null;
        if (Object.keys(programProgress).length > 0) {
          // Get the program with the most recent update
          const mostRecentProgramId = Object.entries(programProgress)
            .sort((a, b) => new Date(b[1].lastUpdated) - new Date(a[1].lastUpdated))
            [0][0];
          
          // Mock program data but with real progress
          const completedWorkoutsCount = programProgress[mostRecentProgramId].completedWorkouts;
          userActivePlan = {
            id: mostRecentProgramId,
            title: mostRecentProgramId === "1" ? "PPL (Push Pull Legs)" : 
                   mostRecentProgramId === "2" ? "HIIT Fat Burner" : 
                   mostRecentProgramId === "3" ? "Upper/Lower Split" : "Active Program",
            progress: Math.min(Math.round(completedWorkoutsCount / (6 * 6) * 100), 100), // Assuming 6 weeks, 6 workouts per week
            nextSession: "Today",
            totalWeeks: 6,
            currentWeek: Math.min(Math.ceil(completedWorkoutsCount / 6) + 1, 6), // Assuming 6 workouts per week
            image: mostRecentProgramId === "1" ? "/images/PPL.png" : 
                  mostRecentProgramId === "2" ? "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=400&auto=format&fit=crop" : 
                  "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=400&auto=format&fit=crop",
          };
        }

        // Calculate stats based on completed workouts
        const totalCompletedWorkouts = completedWorkouts.length;
        
        // Calculate weekly streak (basic implementation)
        const uniqueDates = [...new Set(completedWorkouts.map(w => 
          new Date(w.date).toDateString()
        ))];
        
        // Get unique dates in the last 7 days
        const today = new Date();
        const last7Days = Array.from({length: 7}, (_, i) => {
          const d = new Date();
          d.setDate(today.getDate() - i);
          return d.toDateString();
        });
        
        const daysActive = uniqueDates.filter(date => 
          last7Days.includes(date)
        ).length;

        // Set user stats
        setUserStats({
          workoutsCompleted: totalCompletedWorkouts,
          nutritionProgress: calculateNutritionProgress(), // Custom function
          weeklyStreak: daysActive,
          pointsEarned: totalCompletedWorkouts * 25 // 25 points per workout
        });

        // Set active plan
        setActivePlan(userActivePlan);

        // Generate upcoming workouts based on active plan
        if (userActivePlan) {
          const currentDate = new Date();
          const upcomingWorkoutsData = [];
          
          for (let i = 0; i < 3; i++) {
            const workoutDate = new Date();
            workoutDate.setDate(currentDate.getDate() + i);
            
            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayName = dayNames[workoutDate.getDay()];
            
            // Base the workout name on the day of the week
            let workoutName;
            if (userActivePlan.id === "1") { // PPL
              workoutName = i % 3 === 0 ? "Push Day" : 
                           i % 3 === 1 ? "Pull Day" : "Legs Day";
            } else if (userActivePlan.id === "2") { // HIIT
              workoutName = i % 4 === 0 ? "Lower Body HIIT" : 
                           i % 4 === 1 ? "Upper Body HIIT" : 
                           i % 4 === 2 ? "Total Body Circuit" : "Cardio Blast";
            } else {
              workoutName = i % 2 === 0 ? "Upper Body" : "Lower Body";
            }
            
            upcomingWorkoutsData.push({
              id: i + 1,
              title: workoutName,
              date: i === 0 ? "Today" : 
                    i === 1 ? "Tomorrow" : 
                    dayName,
              duration: userActivePlan.id === "2" ? "30 min" : "45 min",
            });
          }
          
          setUpcomingWorkouts(upcomingWorkoutsData);
        }

        // Load meal plans if any were saved
        const savedMealPlan = localStorage.getItem('user-meal-plan');
        if (savedMealPlan) {
          try {
            setMealPlan(JSON.parse(savedMealPlan));
          } catch (error) {
            console.error("Error parsing meal plan:", error);
            setDefaultMealPlan();
          }
        } else {
          setDefaultMealPlan();
        }

        // Load body stats if any were saved
        const savedBodyStats = localStorage.getItem('user-body-stats');
        if (savedBodyStats) {
          try {
            setBodyStats(JSON.parse(savedBodyStats));
          } catch (error) {
            console.error("Error parsing body stats:", error);
          }
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };

    const calculateNutritionProgress = () => {
      // Check if nutrition tracking data exists
      const savedMealPlan = localStorage.getItem('user-meal-plan');
      if (savedMealPlan) {
        try {
          const mealPlanData = JSON.parse(savedMealPlan);
          const completedMeals = mealPlanData.filter(meal => meal.completed).length;
          const totalMeals = mealPlanData.length;
          return totalMeals > 0 ? Math.round((completedMeals / totalMeals) * 100) : 0;
        } catch (error) {
          return 0;
        }
      }
      return 0;
    };

    const setDefaultMealPlan = () => {
      const defaultMealPlan = [
        {
          id: 1,
          title: "Breakfast",
          description: "Complete your breakfast tracking",
          completed: false,
        },
        {
          id: 2,
          title: "Lunch",
          description: "Complete your lunch tracking",
          completed: false,
        },
        {
          id: 3,
          title: "Dinner",
          description: "Complete your dinner tracking",
          completed: false,
        },
        {
          id: 4,
          title: "Snack",
          description: "Complete your snack tracking",
          completed: false,
        },
      ];
      setMealPlan(defaultMealPlan);
      localStorage.setItem('user-meal-plan', JSON.stringify(defaultMealPlan));
    };

    loadUserData();
  }, [user]);

  // If not logged in, show message to login
  if (!user) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Access Required</h1>
        <p className="text-muted-foreground mb-6">
          Please log in to access your personal dashboard
        </p>
        <Button asChild>
          <Link to="/auth/login">Login</Link>
        </Button>
      </div>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="container py-16 text-center">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading your dashboard data...</p>
      </div>
    );
  }

  // Toggle meal completion
  const toggleMealCompletion = (mealId) => {
    const updatedMealPlan = mealPlan.map(meal => 
      meal.id === mealId ? { ...meal, completed: !meal.completed } : meal
    );
    
    setMealPlan(updatedMealPlan);
    localStorage.setItem('user-meal-plan', JSON.stringify(updatedMealPlan));
    
    // Update nutrition progress
    const completedMeals = updatedMealPlan.filter(meal => meal.completed).length;
    const totalMeals = updatedMealPlan.length;
    const progress = totalMeals > 0 ? Math.round((completedMeals / totalMeals) * 100) : 0;
    
    setUserStats(prev => ({
      ...prev,
      nutritionProgress: progress
    }));
  };

  // Prepare stats for display
  const stats = [
    {
      title: "Workouts Completed",
      value: userStats.workoutsCompleted,
      icon: <FaDumbbell className="h-6 w-6 text-primary" />,
      change: userStats.workoutsCompleted > 0 ? "Keep it up!" : "Start your first workout"
    },
    {
      title: "Nutrition Plan",
      value: `${userStats.nutritionProgress}%`,
      icon: <FaAppleAlt className="h-6 w-6 text-primary" />,
      change: userStats.nutritionProgress > 0 ? "On track today" : "Track your meals"
    },
    {
      title: "Weekly Streak",
      value: userStats.weeklyStreak,
      icon: <FaCalendarCheck className="h-6 w-6 text-primary" />,
      change: userStats.weeklyStreak > 0 ? `${7 - userStats.weeklyStreak} days to go!` : "Start your streak"
    },
    {
      title: "Points Earned",
      value: userStats.pointsEarned,
      icon: <FaShoppingCart className="h-6 w-6 text-primary" />,
      change: userStats.pointsEarned > 0 ? "Unlock rewards with points" : "Earn points with activity"
    },
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
        <p className="text-muted-foreground">
          Your fitness journey at a glance
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        {/* Main Content - Active Plan */}
        <div className="lg:col-span-4">
          {activePlan ? (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Your Active Plan</CardTitle>
                <CardDescription>
                  Track your progress and upcoming sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/3">
                    <img
                      src={activePlan.image}
                      alt={activePlan.title}
                      className="rounded-md w-full h-32 object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-lg font-semibold mb-2">{activePlan.title}</h3>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm font-semibold">{activePlan.progress}%</span>
                      </div>
                      <Progress value={activePlan.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Week {activePlan.currentWeek} of {activePlan.totalWeeks}</span>
                      <span>Next: {activePlan.nextSession}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild variant="outline" className="mr-2">
                  <Link to={`/workout-plans/${activePlan.id}`} onClick={() => window.scrollTo(0, 0)}>View Details</Link>
                </Button>
                <Button asChild>
                  <Link to={`/workout-plans/${activePlan.id}`}>Continue Program</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>No Active Plan</CardTitle>
                <CardDescription>
                  Start a workout program to track your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-6">
                  <div className="text-center text-muted-foreground">
                    <FaDumbbell className="h-12 w-12 mx-auto mb-4 text-primary/30" />
                    <p className="mb-4">You don't have an active workout program yet</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link to="/workout-plans" onClick={() => window.scrollTo(0, 0)}>Browse Programs</Link>
                </Button>
              </CardFooter>
            </Card>
          )}

          <Tabs defaultValue="workouts">
            <TabsList className="mb-4">
              <TabsTrigger value="workouts">Upcoming Workouts</TabsTrigger>
              <TabsTrigger value="nutrition">Today's Nutrition</TabsTrigger>
            </TabsList>

            <TabsContent value="workouts">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Workouts</CardTitle>
                  <CardDescription>Your scheduled sessions for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingWorkouts.length > 0 ? (
                    <ul className="space-y-4">
                      {upcomingWorkouts.map(workout => (
                        <li key={workout.id} className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{workout.title}</h4>
                            <p className="text-sm text-muted-foreground">{workout.date} • {workout.duration}</p>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={activePlan ? `/workout-plans/${activePlan.id}` : "/workout-plans"}>View</Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <p>No upcoming workouts scheduled</p>
                      <Button className="mt-4" asChild>
                        <Link to="/workout-plans">Browse Programs</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
                {upcomingWorkouts.length > 0 && (
                  <CardFooter className="justify-end">
                    <Button variant="outline" asChild>
                      <Link to="/workout-plans">View All Programs</Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="nutrition">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Meal Plan</CardTitle>
                  <CardDescription>Follow your nutrition plan for optimal results</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {mealPlan.map(meal => (
                      <li key={meal.id} className="flex items-start gap-2">
                        <Checkbox
                          id={`meal-${meal.id}`}
                          checked={meal.completed}
                          onCheckedChange={() => toggleMealCompletion(meal.id)}
                          className="mt-1"
                        />
                        <div className={meal.completed ? "text-muted-foreground" : ""}>
                          <label htmlFor={`meal-${meal.id}`} className="font-semibold cursor-pointer">
                            {meal.title}
                          </label>
                          <p className="text-sm">{meal.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline" asChild>
                    <Link to="/nutrition">Nutrition Plans</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar - Membership & Progress */}
        <div className="lg:col-span-3">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Membership Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full mb-2">
                  {user.role === "admin" ? "Admin" : "Standard Member"}
                </span>
                <p className="text-sm text-muted-foreground">
                  Your membership is active
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Program Progress</span>
                  <span className="font-semibold">
                    {activePlan ? `${activePlan.progress}%` : "No active program"}
                  </span>
                </div>
                <Progress value={activePlan ? activePlan.progress : 0} className="h-2" />
                <div className="flex justify-between">
                  <span>Nutrition Goals</span>
                  <span className="font-semibold">{userStats.nutritionProgress}%</span>
                </div>
                <Progress value={userStats.nutritionProgress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/memberships">Manage Membership</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fitness Goals</CardTitle>
              <CardDescription>Set and track your goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Weekly Workouts</span>
                  <span className="text-sm font-semibold">{userStats.weeklyStreak} of 7 days</span>
                </div>
                <Progress value={userStats.weeklyStreak * 100 / 7} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Completed Programs</span>
                  <span className="text-sm font-semibold">
                    {activePlan && activePlan.progress === 100 ? "1" : "0"}
                  </span>
                </div>
                <Progress value={activePlan && activePlan.progress === 100 ? 100 : 0} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Points to Next Reward</span>
                  <span className="text-sm font-semibold">{1000 - userStats.pointsEarned} to go</span>
                </div>
                <Progress value={userStats.pointsEarned / 10} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/profile">Update Goals</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
