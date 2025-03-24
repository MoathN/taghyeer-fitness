import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter, FaFire, FaWeightHanging, FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WorkoutPlans = () => {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  // Mock workout plans data
  const workoutPlans = [
    {
      id: 1,
      title: "Beginner Strength Builder",
      description: "Perfect for beginners looking to build foundational strength and learn proper form.",
      category: "strength",
      duration: 4,
      sessions: 3,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "HIIT Fat Burner",
      description: "High intensity interval training designed to maximize calorie burn and boost metabolism.",
      category: "cardio",
      duration: 6,
      sessions: 4,
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 3,
      title: "Advanced Muscle Hypertrophy",
      description: "Intensive program focused on muscle growth using progressive overload principles.",
      category: "strength",
      duration: 8,
      sessions: 5,
      difficulty: "advanced",
      image: "https://images.unsplash.com/photo-1584863231364-2edc166de576?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Core & Flexibility",
      description: "Build core strength while improving overall flexibility and posture.",
      category: "flexibility",
      duration: 4,
      sessions: 3,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Total Body Transformation",
      description: "Comprehensive program targeting all major muscle groups for total body recomposition.",
      category: "full-body",
      duration: 12,
      sessions: 5,
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 6,
      title: "Functional Fitness",
      description: "Improve everyday movement patterns and prevent injuries with functional training.",
      category: "functional",
      duration: 6,
      sessions: 3,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 7,
      title: "Power Lifting Program",
      description: "Specialized program for building maximum strength in the three powerlifting movements.",
      category: "strength",
      duration: 8,
      sessions: 4,
      difficulty: "advanced",
      image: "https://images.unsplash.com/photo-1587871202416-3c8f9c9dc5ef?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 8,
      title: "30-Day Shred",
      description: "Intense one-month program designed for rapid fat loss and muscle toning.",
      category: "cardio",
      duration: 4,
      sessions: 6,
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
  ];

  // Filter workout plans based on selected filters
  const filteredWorkoutPlans = workoutPlans.filter(plan => {
    if (difficultyFilter !== "all" && plan.difficulty !== difficultyFilter) {
      return false;
    }

    if (durationFilter !== "all") {
      const weeks = parseInt(durationFilter);
      if (durationFilter === "4-less" && plan.duration > 4) {
        return false;
      } else if (durationFilter === "4-8" && (plan.duration < 4 || plan.duration > 8)) {
        return false;
      } else if (durationFilter === "8-plus" && plan.duration < 8) {
        return false;
      }
    }

    return true;
  });

  // Group workout plans by category for the tabs
  const categories = ["all", "strength", "cardio", "flexibility", "full-body", "functional"];
  const getWorkoutsByCategory = (category) => {
    return category === "all"
      ? filteredWorkoutPlans
      : filteredWorkoutPlans.filter(plan => plan.category === category);
  };

  // Difficulty level badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container py-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Workout Plans</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover professionally designed workout plans to help you reach your fitness goals,
            whether you're a beginner or advanced athlete.
          </p>
        </div>
        <div className="flex gap-2">
          {/* Difficulty Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FaFilter className="h-4 w-4" />
                <span>Difficulty</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Difficulty</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <DropdownMenuRadioItem value="all">All Levels</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="beginner">Beginner</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="intermediate">Intermediate</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="advanced">Advanced</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Duration Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FaClock className="h-4 w-4" />
                <span>Duration</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Duration</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={durationFilter} onValueChange={setDurationFilter}>
                <DropdownMenuRadioItem value="all">Any Duration</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4-less">4 weeks or less</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4-8">4-8 weeks</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="8-plus">8+ weeks</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category.replace("-", " ")}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              {getWorkoutsByCategory(category).length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {getWorkoutsByCategory(category).map(plan => (
                    <Card key={plan.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                        {plan.featured && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <div className="mb-2">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(plan.difficulty)}`}>
                            {plan.difficulty.charAt(0).toUpperCase() + plan.difficulty.slice(1)}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-1">{plan.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-2 mb-4">{plan.description}</CardDescription>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <FaClock className="h-3 w-3" />
                            <span>{plan.duration} weeks</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaFire className="h-3 w-3" />
                            <span>{plan.sessions}x / week</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button asChild className="w-full">
                          <Link to={`/workout-plans/${plan.id}`}>View Plan</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">No workout plans found with the selected filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setDifficultyFilter("all");
                      setDurationFilter("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default WorkoutPlans;
