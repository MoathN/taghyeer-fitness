import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaFire, FaHeartbeat, FaDumbbell, FaRunning } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardioPrograms = () => {
  // Cardio programs data
  const cardioPrograms = [
    {
      id: "fat-loss-hiit",
      title: "Fat Loss (High-Intensity + Steady State)",
      description: "Combined HIIT and steady-state cardio program designed for maximum fat burning efficiency.",
      category: "fat-loss",
      sessions: "5-6",
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop",
      featured: true,
      schedule: [
        { day: "Monday", workout: "HIIT (20–25 min) + 10 min core" },
        { day: "Tuesday", workout: "LISS (Low-Intensity Steady State) – 45 min incline treadmill" },
        { day: "Wednesday", workout: "HIIT cycling (sprints) – 25 min" },
        { day: "Thursday", workout: "LISS brisk walk or elliptical – 40 min" },
        { day: "Friday", workout: "HIIT circuit + jump rope – 20 min" },
        { day: "Saturday", workout: "Hike, bike ride, or swimming (fun cardio)" },
        { day: "Sunday", workout: "Rest or light walk (active recovery)" }
      ]
    },
    {
      id: "heart-health",
      title: "Heart Health & General Fitness",
      description: "Moderate intensity cardiovascular training for improved heart health and general fitness.",
      category: "health",
      sessions: "3-5",
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
      featured: false,
      schedule: [
        { day: "Monday", workout: "30 min brisk walking or cycling" },
        { day: "Wednesday", workout: "25–30 min stair master or rowing machine" },
        { day: "Friday", workout: "Zumba, dance, or cardio boxing class" },
        { day: "Sunday", workout: "45 min light jog or swimming" }
      ],
      notes: "Heart Rate Target: 60–75% of max HR. Focus: Consistent pace, breathing, and endurance."
    },
    {
      id: "endurance-performance",
      title: "Endurance & Performance",
      description: "Advanced training program for athletes and runners looking to improve endurance and performance.",
      category: "performance",
      sessions: "4-6",
      difficulty: "advanced",
      image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=600&auto=format&fit=crop",
      featured: true,
      schedule: [
        { day: "Monday", workout: "Long-distance run (60–75 min)" },
        { day: "Tuesday", workout: "Interval run (800m repeats or sprints)" },
        { day: "Thursday", workout: "Tempo run (20 min at race pace)" },
        { day: "Friday", workout: "Hill sprints (explosive power)" },
        { day: "Saturday", workout: "Cross-training (swim, row, cycle)" },
        { day: "Sunday", workout: "Recovery run or rest" }
      ]
    },
    {
      id: "hiit-program",
      title: "HIIT Program",
      description: "High-Intensity Interval Training for maximum calorie burning and cardiovascular benefits in short sessions.",
      category: "hiit",
      sessions: "3-4",
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=600&auto=format&fit=crop",
      featured: true,
      exercises: [
        "Jump squats",
        "Burpees",
        "High knees",
        "Mountain climbers",
        "Push-ups",
        "Jumping lunges"
      ],
      notes: "20–30 Minute Workouts (3–4 times/week). 30s work / 30s rest x 6 rounds. Beginner Mod: 20s work / 40s rest. Advanced Mod: Add weights or reduce rest."
    },
    {
      id: "low-impact",
      title: "Low Impact Cardio",
      description: "Joint-friendly cardio options ideal for beginners, those with injuries, or during recovery periods.",
      category: "low-impact",
      sessions: "4-6",
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      featured: false,
      exercises: [
        "Elliptical",
        "Incline walking",
        "Stationary bike",
        "Swimming",
        "Rowing machine (low resistance)",
        "Water aerobics"
      ],
      notes: "4–6 days/week (20–45 mins/session). Focus on maintaining proper form and comfortable breathing throughout."
    }
  ];

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">Cardio Programs</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Our specialized cardio programs are designed to help you achieve various fitness goals from fat loss to improved
          athletic performance. Choose a program that matches your fitness level and objectives.
        </p>
      </div>

      {/* Featured Programs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardioPrograms
            .filter(program => program.featured)
            .map(program => (
              <Card key={program.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-primary">{program.title}</CardTitle>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {program.difficulty}
                    </span>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-gymmawy-gray mb-3">
                    <FaClock className="mr-2" />
                    <span>{program.sessions} days per week</span>
                  </div>
                  <div className="flex items-center text-gymmawy-gray">
                    <FaFire className="mr-2" />
                    <span>{program.category}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`#${program.id}`} onClick={() => window.scrollTo(0, 0)}>View Program</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* All Programs */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary">All Cardio Programs</h2>
        <Tabs defaultValue="fat-loss-hiit" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-6">
            {cardioPrograms.map(program => (
              <TabsTrigger key={program.id} value={program.id}>
                {program.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {cardioPrograms.map(program => (
            <TabsContent key={program.id} value={program.id} id={program.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Card className="overflow-hidden mb-6">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-primary">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-gymmawy-gray">
                          <FaClock className="mr-2 text-primary" />
                          <span>{program.sessions} days per week</span>
                        </div>
                        <div className="flex items-center text-gymmawy-gray">
                          <FaFire className="mr-2 text-primary" />
                          <span>Category: {program.category}</span>
                        </div>
                        <div className="flex items-center text-gymmawy-gray">
                          <FaDumbbell className="mr-2 text-primary" />
                          <span>Difficulty: {program.difficulty}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Schedule</CardTitle>
                      <CardDescription>Weekly breakdown of your cardio routine</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {program.schedule ? (
                        <table className="w-full">
                          <thead>
                            <tr className="text-left border-b">
                              <th className="pb-2 text-primary">Day</th>
                              <th className="pb-2 text-primary">Workout</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.schedule.map((day, index) => (
                              <tr key={index} className="border-b last:border-b-0">
                                <td className="py-3 font-medium">{day.day}</td>
                                <td className="py-3 text-gymmawy-gray">{day.workout}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-primary mb-2">Exercise Circuit</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                              {program.exercises.map((exercise, index) => (
                                <li key={index}>{exercise}</li>
                              ))}
                            </ul>
                          </div>
                          {program.notes && (
                            <div>
                              <h3 className="font-semibold text-primary mb-2">Notes</h3>
                              <p className="text-gymmawy-gray">{program.notes}</p>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Notes section if available outside schedule */}
                      {!program.schedule && program.notes && (
                        <div className="mt-6">
                          <h3 className="font-semibold mb-2">Program Notes</h3>
                          <p className="text-gymmawy-gray">{program.notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <div className="mt-12 bg-primary/10 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Improve Your Cardiovascular Fitness?</h2>
          <p className="text-gymmawy-gray mb-6 max-w-2xl mx-auto">
            Choose a program that matches your goals and fitness level. Our cardio programs are designed to be integrated 
            with our strength training routines for a complete fitness approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/trainers">Get a Trainer</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/workout-plans">Browse All Workout Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardioPrograms; 