import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FaDumbbell, FaAppleAlt, FaCalendarCheck, FaShoppingCart } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { user } = useOutletContext();

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

  // Mock data for the dashboard
  const stats = [
    {
      title: "Workouts Completed",
      value: 24,
      icon: <FaDumbbell className="h-6 w-6 text-primary" />,
      change: "+3 from last week"
    },
    {
      title: "Nutrition Plan",
      value: "85%",
      icon: <FaAppleAlt className="h-6 w-6 text-primary" />,
      change: "+5% from last week"
    },
    {
      title: "Weekly Streak",
      value: 4,
      icon: <FaCalendarCheck className="h-6 w-6 text-primary" />,
      change: "2 days to go!"
    },
    {
      title: "Shop Points",
      value: 450,
      icon: <FaShoppingCart className="h-6 w-6 text-primary" />,
      change: "250 to next reward"
    },
  ];

  const activePlan = {
    id: 2,
    title: "HIIT Fat Burner",
    progress: 45,
    nextSession: "Today, 6:00 PM",
    totalWeeks: 6,
    currentWeek: 3,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=400&auto=format&fit=crop",
  };

  const upcomingWorkouts = [
    {
      id: 1,
      title: "Upper Body Strength",
      date: "Today, 6:00 PM",
      duration: "45 min",
    },
    {
      id: 2,
      title: "HIIT Session",
      date: "Tomorrow, 7:00 AM",
      duration: "30 min",
    },
    {
      id: 3,
      title: "Core & Abs",
      date: "Wed, 6:30 PM",
      duration: "30 min",
    },
  ];

  const mealPlan = [
    {
      id: 1,
      title: "Breakfast",
      description: "Greek yogurt with berries and honey, 2 boiled eggs",
      completed: true,
    },
    {
      id: 2,
      title: "Lunch",
      description: "Grilled chicken salad with avocado and olive oil dressing",
      completed: false,
    },
    {
      id: 3,
      title: "Dinner",
      description: "Baked salmon with steamed vegetables and quinoa",
      completed: false,
    },
    {
      id: 4,
      title: "Snack",
      description: "Protein shake with banana, handful of almonds",
      completed: true,
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
                <Link to={`/workout-plans/${activePlan.id}`}>View Details</Link>
              </Button>
              <Button asChild>
                <Link to="/workout-session">Start Workout</Link>
              </Button>
            </CardFooter>
          </Card>

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
                  <ul className="space-y-4">
                    {upcomingWorkouts.map(workout => (
                      <li key={workout.id} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{workout.title}</h4>
                          <p className="text-sm text-muted-foreground">{workout.date} • {workout.duration}</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/workout-session">View</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline" asChild>
                    <Link to="/calendar">View Calendar</Link>
                  </Button>
                </CardFooter>
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
                        <input
                          type="checkbox"
                          id={`meal-${meal.id}`}
                          checked={meal.completed}
                          className="mt-1"
                          readOnly
                        />
                        <div className={meal.completed ? "text-muted-foreground" : ""}>
                          <label htmlFor={`meal-${meal.id}`} className="font-semibold">
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
                    <Link to="/nutrition/my-plan">Full Meal Plan</Link>
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
                  Premium
                </span>
                <p className="text-sm text-muted-foreground">
                  Your membership is active until Oct 24, 2023
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Personal Training Sessions</span>
                  <span className="font-semibold">2/4 Used</span>
                </div>
                <Progress value={50} className="h-2" />
                <div className="flex justify-between">
                  <span>Group Classes</span>
                  <span className="font-semibold">3/8 Used</span>
                </div>
                <Progress value={37.5} className="h-2" />
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
              <CardTitle>Body Stats</CardTitle>
              <CardDescription>Track your progress over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Weight</span>
                  <span className="text-sm font-semibold">78 kg (-2 kg)</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Body Fat</span>
                  <span className="text-sm font-semibold">18% (-1.5%)</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Muscle Mass</span>
                  <span className="text-sm font-semibold">34 kg (+1.2 kg)</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/profile/body-stats">View Detailed Stats</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
