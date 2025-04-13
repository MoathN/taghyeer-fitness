import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFire, FaClock, FaFilter, FaHourglassHalf } from "react-icons/fa";
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
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, DumbbellIcon } from "lucide-react";

const WorkoutPlans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  // Mock workout plans data
  const workoutPlans = [
    {
      id: 1,
      title: "PPL (Push Pull Legs)",
      description: "6-day split targeting specific muscle groups for optimal muscle growth and strength.",
      category: "strength",
      duration: 6,
      sessions: 6,
      difficulty: "intermediate",
      image: "/images/PPL.png",
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
      title: "Upper/Lower Split",
      description: "4-day program alternating between upper and lower body workouts for balanced strength gains.",
      category: "strength",
      duration: 6,
      sessions: 4,
      difficulty: "intermediate",
      image: "/images/upper lower.png",
      featured: false,
    },
    {
      id: 4,
      title: "Weekly Flexibility Program",
      description: "6-day structured routine targeting different muscle groups each day. Perfect for improving mobility, reducing injury risk, and enhancing athletic performance through systematic stretching sessions.",
      category: "flexibility",
      duration: 4,
      sessions: 6,
      difficulty: "intermediate",
      image: "/images/flexibility-sunset.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Post-Workout Stretching",
      description: "Essential 5-10 minute recovery routine designed to reduce muscle soreness, improve circulation, and enhance recovery after any workout. Includes key stretches for all major muscle groups.",
      category: "flexibility",
      duration: 1,
      sessions: 3,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1570691079236-4bca6c45d440?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Yoga for Flexibility",
      description: "Gentle yoga flow focused on deep, sustained stretches to improve range of motion and joint mobility. Combines breathing techniques with classic yoga postures for both mental and physical flexibility benefits.",
      category: "flexibility",
      duration: 4,
      sessions: 3,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 7,
      title: "Dynamic Stretching",
      description: "Active pre-workout mobility routine using controlled movements through full range of motion. Prepares muscles for activity, increases core temperature, and enhances performance for sports or strength training.",
      category: "flexibility",
      duration: 1,
      sessions: 5,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 8,
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
      id: 9,
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
      id: 10,
      title: "Bro Split",
      description: "5-day body part split targeting individual muscle groups for maximum isolation and growth.",
      category: "strength",
      duration: 8,
      sessions: 5,
      difficulty: "advanced",
      image: "/images/bro.png",
      featured: false,
    },
    {
      id: 12,
      title: "Full Body Split",
      description: "3-day workout routine targeting all major muscle groups multiple times per week. Great for beginners.",
      category: "strength",
      duration: 8,
      sessions: 3,
      difficulty: "beginner",
      image: "/images/full body.png",
      featured: false,
    },
    {
      id: 13,
      title: "Arnold Split",
      description: "Advanced 5-day program based on Arnold Schwarzenegger's classic bodybuilding routine.",
      category: "strength",
      duration: 8,
      sessions: 5,
      difficulty: "advanced",
      image: "/images/Arnold.png",
      featured: true,
    },
    {
      id: 14,
      title: "Fat Loss (HIIT + Steady State)",
      description: "Combined HIIT and steady-state cardio program designed for maximum fat burning efficiency.",
      category: "cardio",
      duration: 4,
      sessions: 5,
      difficulty: "intermediate",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 15,
      title: "Heart Health & General Fitness",
      description: "Moderate intensity cardiovascular training for improved heart health and general fitness.",
      category: "cardio",
      duration: 4,
      sessions: 4,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
    {
      id: 16,
      title: "Endurance & Performance",
      description: "Advanced training program for athletes and runners looking to improve endurance and performance.",
      category: "cardio",
      duration: 6,
      sessions: 5,
      difficulty: "advanced",
      image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 18,
      title: "Low Impact Cardio",
      description: "Joint-friendly cardio options ideal for beginners, those with injuries, or during recovery periods.",
      category: "cardio",
      duration: 4,
      sessions: 5,
      difficulty: "beginner",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      featured: false,
    },
  ];

  // Filter workout plans based on selected filters
  const filteredWorkoutPlans = workoutPlans.filter(plan => {
    // Apply difficulty filter if not "all"
    if (difficultyFilter !== "all" && plan.difficulty !== difficultyFilter) {
      return false;
    }
    
    // Apply duration filter if not "all"
    if (durationFilter !== "all") {
      if (durationFilter === "short" && plan.duration > 4) return false;
      if (durationFilter === "medium" && (plan.duration < 5 || plan.duration > 8)) return false;
      if (durationFilter === "long" && plan.duration < 9) return false;
    }
    
    return true;
  });

  // Group workout plans by category for the tabs
  const categories = ["all", "strength", "cardio", "flexibility"];
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">Workout Plans</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Discover professionally designed workout plans to help you reach your fitness goals. 
          Browse by category to find the perfect match for your needs.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                id={`${category}-tab`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex items-center gap-2">
            {/* Difficulty Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <FaFilter className="h-4 w-4" />
                  <span className="hidden md:inline">Difficulty</span>
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
                <Button variant="outline" size="sm" className="gap-2">
                  <FaHourglassHalf className="h-4 w-4" />
                  <span className="hidden md:inline">Duration</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Duration</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={durationFilter} onValueChange={setDurationFilter}>
                  <DropdownMenuRadioItem value="all">All Durations</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="short">Short (1-4 weeks)</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="medium">Medium (5-8 weeks)</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="long">Long (9+ weeks)</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Content for each category tab */}
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getWorkoutsByCategory(category)
                .map((plan) => (
                  <Card key={plan.id} className="overflow-hidden flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                      />
                      {plan.featured && (
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-primary">{plan.title}</CardTitle>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
                            plan.difficulty
                          )}`}
                        >
                          {plan.difficulty.charAt(0).toUpperCase() + plan.difficulty.slice(1)}
                        </span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center text-gymmawy-gray mb-3">
                        <FaClock className="mr-2" />
                        <span>{plan.duration} weeks</span>
                      </div>
                      <div className="flex items-center text-gymmawy-gray">
                        <FaFire className="mr-2" />
                        <span>{plan.sessions}x per week</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to={`/workout-plans/${plan.id}`} onClick={() => window.scrollTo(0, 0)}>View Plan</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default WorkoutPlans;