import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaFire, FaWeightHanging, FaClock, FaCalendarAlt, FaDumbbell } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const WorkoutPlanDetails = () => {
  const { id } = useParams();
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call to fetch the workout plan details
    // For now, we'll simulate this with mock data
    const fetchWorkoutPlan = () => {
      setLoading(true);
      
      // Mock workout plans data (in a real app, this would come from an API)
      const workoutPlansData = [
        {
          id: "1",
          title: "PPL (Push Pull Legs)",
          description: "6-day split targeting specific muscle groups for optimal muscle growth and strength.",
          longDescription: "The Push Pull Legs (PPL) split is a highly effective 6-day training program designed for intermediate to advanced lifters looking to maximize muscle growth and strength gains. This split divides workouts by movement patterns, allowing for adequate recovery while training each muscle group twice per week. The program is flexible and can be adapted to fit your schedule as a 3-day or 6-day routine.",
          category: "strength",
          duration: 6,
          sessions: 6,
          difficulty: "intermediate",
          image: "/images/PPL.png",
          featured: true,
          trainer: "Chris Evans",
          trainerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
          equipment: ["Barbell", "Dumbbells", "Bench", "Squat rack", "Cable machine"],
          goals: ["Build muscle mass", "Increase strength", "Improve body composition"],
          weeks: [
            {
              weekNumber: 1,
              description: "Establishing the foundation of the Push Pull Legs routine",
              workouts: [
                {
                  day: "Day 1 - Push",
                  focus: "Chest, Shoulders, Triceps",
                  exercises: [
                    { name: "Barbell Bench Press", sets: 4, reps: "8-10", rest: "90-120 sec" },
                    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Seated Shoulder Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Tricep Rope Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Overhead Tricep Extension", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Pull",
                  focus: "Back, Biceps, Rear Delts",
                  exercises: [
                    { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90-120 sec" },
                    { name: "Pull-Ups or Lat Pulldowns", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Seated Cable Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Barbell Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 3 - Legs",
                  focus: "Quads, Hamstrings, Calves",
                  exercises: [
                    { name: "Barbell Back Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "90 sec" },
                    { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 4 - Push",
                  focus: "Chest, Shoulders, Triceps",
                  exercises: [
                    { name: "Incline Barbell Bench Press", sets: 4, reps: "8-10", rest: "90-120 sec" },
                    { name: "Flat Dumbbell Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Cable Chest Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Tricep Dips", sets: 3, reps: "10-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 5 - Pull",
                  focus: "Back, Biceps, Rear Delts",
                  exercises: [
                    { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Chest Supported Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Lat Pulldowns (Wide Grip)", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Single-Arm Dumbbell Rows", sets: 3, reps: "12 each arm", rest: "60 sec" },
                    { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Incline Dumbbell Curls", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 6 - Legs",
                  focus: "Quads, Hamstrings, Calves",
                  exercises: [
                    { name: "Front Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Bulgarian Split Squats", sets: 3, reps: "10-12 each leg", rest: "90 sec" },
                    { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Seated Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Hack Squats", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Seated Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 7",
                  focus: "Rest Day",
                  exercises: [
                    { name: "Active Recovery (optional)", sets: 1, reps: "20-30 min light cardio", rest: "0" },
                    { name: "Mobility Work", sets: 1, reps: "15-20 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "15-20 min", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Jason M.",
              rating: 5,
              comment: "This PPL split is amazing for hypertrophy. I've gained serious muscle mass following this routine!",
              date: "1 month ago"
            },
            {
              name: "Alex T.",
              rating: 4,
              comment: "Great program but challenging to commit to 6 days every week. I modified it to 3 days when needed.",
              date: "3 weeks ago"
            },
            {
              name: "Sophia R.",
              rating: 5,
              comment: "Perfect balance of volume and intensity. My strength has increased on all major lifts.",
              date: "2 months ago"
            }
          ]
        },
        {
          id: "2",
          title: "HIIT Fat Burner",
          description: "High intensity interval training designed to maximize calorie burn and boost metabolism.",
          longDescription: "This intense 6-week HIIT program is strategically designed to torch calories and boost your metabolism for maximum fat burning. Each session combines explosive cardio intervals with targeted strength movements to keep your heart rate elevated while building lean muscle. The varied workout structure prevents plateaus and keeps your body constantly adapting.",
          category: "cardio",
          duration: 6,
          sessions: 4,
          difficulty: "intermediate",
          image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=600&auto=format&fit=crop",
          featured: true,
          trainer: "Michael Stevens",
          trainerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
          equipment: ["Dumbbells", "Jump rope", "Step or bench", "Timer"],
          goals: ["Burn fat", "Improve cardiovascular fitness", "Boost metabolism"],
          weeks: [
            {
              weekNumber: 1,
              description: "Building baseline conditioning with fundamental HIIT patterns",
              workouts: [
                {
                  day: "Day 1",
                  focus: "Lower Body HIIT",
                  exercises: [
                    { name: "Warm-Up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Jump Squats", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Walking Lunges", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Mountain Climbers", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Glute Bridges", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Cool Down & Stretch", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2",
                  focus: "Upper Body HIIT",
                  exercises: [
                    { name: "Warm-Up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Push-Ups", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Dumbbell Rows", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Shoulder Taps", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Tricep Dips", sets: 4, reps: "30 sec", rest: "30 sec" },
                    { name: "Cool Down & Stretch", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3",
                  focus: "Total Body Circuit",
                  exercises: [
                    { name: "Warm-Up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Burpees", sets: 3, reps: "30 sec", rest: "30 sec" },
                    { name: "Dumbbell Thrusters", sets: 3, reps: "30 sec", rest: "30 sec" },
                    { name: "Jumping Jacks", sets: 3, reps: "30 sec", rest: "30 sec" },
                    { name: "Russian Twists", sets: 3, reps: "30 sec", rest: "30 sec" },
                    { name: "High Knees", sets: 3, reps: "30 sec", rest: "30 sec" },
                    { name: "Cool Down & Stretch", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4",
                  focus: "Cardio Blast",
                  exercises: [
                    { name: "Warm-Up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Jump Rope", sets: 5, reps: "45 sec", rest: "15 sec" },
                    { name: "Speed Skaters", sets: 5, reps: "45 sec", rest: "15 sec" },
                    { name: "Mountain Climbers", sets: 5, reps: "45 sec", rest: "15 sec" },
                    { name: "Jumping Jacks", sets: 5, reps: "45 sec", rest: "15 sec" },
                    { name: "Cool Down & Stretch", sets: 1, reps: "5 min", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Increasing intensity with tabata-style intervals",
              workouts: []
            }
          ],
          reviews: [
            {
              name: "Sarah P.",
              rating: 5,
              comment: "No joke - this program is intense but the results are worth it! Lost 8 pounds in 6 weeks.",
              date: "2 weeks ago"
            },
            {
              name: "Robert M.",
              rating: 4,
              comment: "Great fat burning workouts. I modified some exercises as I'm recovering from an injury and still saw results.",
              date: "1 month ago"
            },
            {
              name: "Emma L.",
              rating: 5,
              comment: "Challenging but effective! The variety keeps it interesting. My endurance has improved dramatically.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "3",
          title: "Upper/Lower Split",
          description: "4-day program alternating between upper and lower body workouts for balanced strength gains.",
          longDescription: "The Upper/Lower Split is a highly efficient training protocol that divides your workout days between upper and lower body exercises. This approach allows for optimal frequency and recovery, training each muscle group twice per week with adequate rest between sessions. This 6-week program progressively increases in intensity and is perfect for intermediate lifters looking to make consistent strength and muscle gains.",
          category: "strength",
          duration: 6,
          sessions: 4,
          difficulty: "intermediate",
          image: "/images/upper lower.png",
          featured: false,
          trainer: "David Miller",
          trainerImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop",
          equipment: [
            "Barbell and weights",
            "Dumbbells",
            "Cable machine",
            "Squat rack",
            "Bench press",
            "Pull-up bar"
          ],
          goals: [
            "Build balanced strength",
            "Increase muscle mass",
            "Improve body composition",
            "Enhance workout efficiency"
          ],
          weeks: [
            {
              weekNumber: 1,
              description: "Foundation phase focusing on proper form and establishing baseline strength",
              workouts: [
                {
                  day: "Day 1 - Upper A",
                  focus: "Chest, Back, Shoulders, Arms",
                  exercises: [
                    { name: "Barbell Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Bent Over Barbell Rows", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Seated Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Pull-Ups or Lat Pulldowns", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Dumbbell Bicep Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Lower A",
                  focus: "Quads, Hamstrings, Glutes, Calves",
                  exercises: [
                    { name: "Barbell Back Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Walking Lunges", sets: 3, reps: "12 steps each leg", rest: "90 sec" },
                    { name: "Leg Press", sets: 3, reps: "12-15", rest: "90 sec" },
                    { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 3 - Rest",
                  focus: "Recovery and Mobility",
                  exercises: [
                    { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Foam Rolling", sets: 1, reps: "10-15 min", rest: "0" },
                    { name: "Dynamic Stretching", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Upper B",
                  focus: "Back, Chest, Shoulders, Arms",
                  exercises: [
                    { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Barbell Rows (Underhand Grip)", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Overhead Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Cable Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 5 - Lower B",
                  focus: "Hamstrings, Quads, Glutes, Calves",
                  exercises: [
                    { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Front Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Bulgarian Split Squats", sets: 3, reps: "10-12 each leg", rest: "90 sec" },
                    { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Glute Bridges", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Seated Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 6 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Progressive overload with increased weight and intensity",
              workouts: [
                {
                  day: "Day 1 - Upper A",
                  focus: "Chest, Back, Shoulders, Arms with increased intensity",
                  exercises: [
                    { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Bent Over Barbell Rows", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Seated Dumbbell Shoulder Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Weighted Pull-Ups or Lat Pulldowns", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Incline Dumbbell Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Close-Grip Bench Press", sets: 3, reps: "10-12", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Lower A",
                  focus: "Quads, Hamstrings, Glutes, Calves with increased load",
                  exercises: [
                    { name: "Barbell Back Squats", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Weighted Walking Lunges", sets: 3, reps: "10 steps each leg", rest: "90 sec" },
                    { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Leg Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Standing Calf Raises", sets: 4, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 3 - Rest",
                  focus: "Recovery and Mobility",
                  exercises: [
                    { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Foam Rolling", sets: 1, reps: "10-15 min", rest: "0" },
                    { name: "Dynamic Stretching", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Upper B",
                  focus: "Back, Chest, Shoulders, Arms with variation",
                  exercises: [
                    { name: "Incline Dumbbell Press", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Barbell Rows (Underhand Grip)", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Standing Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "T-Bar Rows", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Dips", sets: 3, reps: "10-12", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 5 - Lower B",
                  focus: "Hamstrings, Quads, Glutes, Calves with higher intensity",
                  exercises: [
                    { name: "Deadlifts", sets: 4, reps: "5-6", rest: "120 sec" },
                    { name: "Front Squats", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Bulgarian Split Squats", sets: 3, reps: "8-10 each leg", rest: "90 sec" },
                    { name: "Leg Extensions", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Hip Thrusts", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Seated Calf Raises", sets: 4, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 6 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Robert K.",
              rating: 5,
              comment: "This split is perfect for people with a busy schedule. I've made consistent gains training just 4 days a week.",
              date: "2023-09-15"
            },
            {
              name: "Sarah T.",
              rating: 4,
              comment: "Great balance between upper and lower body work. I've noticed significant improvements in my squat and bench press numbers.",
              date: "2023-10-22"
            },
            {
              name: "Mark D.",
              rating: 5,
              comment: "The frequency is perfect - hitting each muscle group twice a week is the sweet spot for my recovery and growth.",
              date: "2023-11-30"
            },
            {
              name: "Jessica P.",
              rating: 5,
              comment: "I switched from a bro split to this upper/lower program and I'm seeing much better results. Highly recommended!",
              date: "2024-01-08"
            }
          ]
        },
        {
          id: "17",
          title: "Daily Flexibility Routine",
          description: "Quick daily routine to improve mobility, posture, and joint health in just 10-15 minutes.",
          longDescription: "This simple 10-15 minute daily flexibility routine targets all major muscle groups to enhance overall mobility and posture. Perfect for beginners looking to increase flexibility, reduce muscle stiffness, or complement other workout programs. Practice in the morning to energize your day or after workouts to enhance recovery.",
          category: "flexibility",
          duration: 2,
          sessions: 7,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
          featured: false,
          trainer: "Emily Chen",
          trainerImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop",
          equipment: ["Yoga mat"],
          goals: ["Improve daily mobility", "Enhance posture", "Maintain joint health", "Reduce muscle stiffness"],
          weeks: [
            {
              weekNumber: 1,
              description: "General Daily Flexibility Routine (Full Body – 10–15 mins)",
              workouts: [
                {
                  day: "Daily Routine",
                  focus: "Full Body Mobility and Flexibility",
                  exercises: [
                    { name: "Neck rolls", sets: 1, reps: "30 sec per direction", rest: "0" },
                    { name: "Shoulder rolls & arm circles", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Cat-Cow stretches", sets: 1, reps: "10 reps", rest: "0" },
                    { name: "Standing forward fold", sets: 1, reps: "45 sec", rest: "0" },
                    { name: "Hip flexor stretch (lunge position)", sets: 1, reps: "30 sec each side", rest: "0" },
                    { name: "Seated hamstring stretch", sets: 1, reps: "45 sec each side", rest: "0" },
                    { name: "Butterfly stretch (inner thighs)", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Seated spinal twist", sets: 1, reps: "30 sec each side", rest: "0" },
                    { name: "Child's pose", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Cobra stretch (abdominal extension)", sets: 1, reps: "30 sec", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Sophia L.",
              rating: 5,
              comment: "Perfect quick routine to do every morning. I can already touch my toes after just two weeks!",
              date: "2 weeks ago"
            },
            {
              name: "Michael R.",
              rating: 4,
              comment: "Simple yet effective. I do this daily and my posture has improved significantly.",
              date: "1 month ago"
            },
            {
              name: "Aisha K.",
              rating: 5,
              comment: "This daily routine has helped relieve my desk job back pain. I feel so much better throughout the day.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "5",
          title: "Post-Workout Stretching",
          description: "Quick 5-10 minute stretching routine to enhance recovery after any workout.",
          longDescription: "This essential post-workout stretching sequence is specifically designed to accelerate recovery, reduce muscle soreness (DOMS), and improve your overall results from training. When performed immediately after exercise while muscles are still warm, these targeted stretches help to gradually cool down the body while promoting blood flow to worked muscles, aiding in the removal of metabolic waste products.\n\nEach stretch is held for the optimal 30-second duration, which research has shown to effectively improve flexibility without diminishing strength gains from your workout. The sequence methodically targets all major muscle groups in just 5-10 minutes, making it an efficient addition to any training program. Regular implementation of this routine can lead to improved recovery between training sessions, decreased tightness and stiffness, and potentially reduced injury risk over time.\n\nThis routine can be adapted to any workout type by placing extra focus on the muscle groups you've trained most intensely. The gentle, static nature of these stretches makes them appropriate for all fitness levels.",
          category: "flexibility",
          duration: 1,
          sessions: 3,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1570691079236-4bca6c45d440?q=80&w=600&auto=format&fit=crop",
          featured: false,
          trainer: "Emily Chen",
          trainerImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop",
          equipment: ["None required", "Exercise mat (optional)", "Towel for padding (optional)"],
          goals: ["Enhance workout recovery", "Reduce post-workout soreness", "Maintain flexibility", "Improve range of motion", "Cool down gradually after exercise", "Promote relaxation after intense activity"],
          weeks: [
            {
              weekNumber: 1,
              description: "Post-workout recovery sequence designed to be performed immediately after exercise when muscles are warm. Focus on slow, controlled breathing and gentle stretching without bouncing or forcing movements beyond comfortable range.",
              workouts: [
                {
                  day: "After Any Workout",
                  focus: "Full Body Recovery",
                  exercises: [
                    { name: "Hamstring stretch", sets: 1, reps: "30 sec each leg", rest: "0" },
                    { name: "Quad stretch", sets: 1, reps: "30 sec each leg", rest: "0" },
                    { name: "Calf stretch", sets: 1, reps: "30 sec each leg", rest: "0" },
                    { name: "Chest stretch", sets: 1, reps: "30 sec", rest: "0" },
                    { name: "Shoulder stretch", sets: 1, reps: "30 sec each side", rest: "0" },
                    { name: "Upper back stretch", sets: 1, reps: "30 sec", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Tyler K.",
              rating: 5,
              comment: "I've been doing this after every workout and have noticed significantly less soreness the next day.",
              date: "2 weeks ago"
            },
            {
              name: "Emma P.",
              rating: 5,
              comment: "Quick, simple and effective. Perfect for cooling down after intense training sessions.",
              date: "1 month ago"
            },
            {
              name: "Jordan M.",
              rating: 4,
              comment: "Great routine. I've added it to all my workouts and my recovery has improved dramatically.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "4",
          title: "Weekly Flexibility Program",
          description: "Comprehensive 6-day program targeting different body areas each day for complete flexibility.",
          longDescription: "This meticulously structured weekly flexibility program dedicates each day to a different area of the body, ensuring complete and balanced flexibility development. Following a systematic approach to stretching, this program addresses tight muscles and restricted joints with specific targeted routines. The carefully sequenced 6-day split allows for proper recovery between sessions while still maintaining consistent work on improving your overall mobility.\n\nResearch shows that consistent, targeted flexibility training can lead to significant improvements in range of motion within 4-6 weeks. This program utilizes both static and dynamic stretching techniques, with longer holds to effectively lengthen muscle tissues and improve connective tissue elasticity. Perfect for athletes looking to enhance performance, office workers countering the effects of prolonged sitting, or anyone seeking to move more freely in daily activities.",
          category: "flexibility",
          duration: 4,
          sessions: 6,
          difficulty: "intermediate",
          image: "/images/flexibility-sunset.jpg",
          featured: false,
          trainer: "Emily Chen",
          trainerImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop",
          equipment: ["Yoga mat", "Foam roller (optional)", "Resistance band (optional)", "Wall or sturdy surface for support"],
          goals: ["Develop full-body flexibility", "Target specific problem areas", "Create a balanced flexibility routine", "Establish a consistent practice", "Improve posture and alignment", "Reduce risk of injury during other activities"],
          weeks: [
            {
              weekNumber: 1,
              description: "Foundation phase: Building a base level of flexibility with proper form and technique. Focus on learning to breathe through discomfort and finding the appropriate intensity for your current flexibility level.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Progressive phase: Increasing stretch duration and intensity while maintaining proper form. Introducing deeper variations of the basic stretches as your body adapts to the routine.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 3,
              description: "Maintenance and advancement: Continuing to build on progress by adding more challenging variations and focusing on problem areas identified in previous weeks.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Jessica T.",
              rating: 5,
              comment: "I love how each day focuses on a different area. After 4 weeks, I feel like my entire body is more flexible!",
              date: "1 month ago"
            },
            {
              name: "David M.",
              rating: 4,
              comment: "Great program structure. I especially like the hip flexor day - really helped my tight hips from sitting all day.",
              date: "3 weeks ago"
            },
            {
              name: "Priya S.",
              rating: 5,
              comment: "This program helped me establish a consistency with my flexibility training that I never had before.",
              date: "2 months ago"
            }
          ]
        },
        {
          id: "6",
          title: "Yoga for Flexibility",
          description: "Beginner-friendly yoga flow focusing on deep stretching and flexibility improvement.",
          longDescription: "This beginner-friendly yoga program focuses specifically on improving flexibility through traditional yoga poses and sequences, combining the ancient wisdom of yoga with modern understanding of physiology and flexibility training. Unlike conventional stretching routines, this yoga-based approach integrates breath work, mindfulness, and proper alignment to create a comprehensive practice that addresses both the physical and mental aspects of flexibility.\n\nEach session follows a carefully structured progression, beginning with gentle warm-up movements before transitioning into deeper held poses. The sequences are designed to safely open tight areas through both active and passive stretching techniques. Key areas of focus include the hamstrings, hips, shoulders, and spine—regions that commonly develop restrictions due to modern lifestyles.\n\nThis program is ideal for both yoga newcomers and those with some experience who want to specifically target flexibility. The emphasis is on proper form and mindful movement rather than achieving perfect poses, making it accessible to those with varying levels of initial flexibility. With consistent practice 2-3 times per week, you can expect noticeable improvements in your range of motion, posture, and overall ease of movement within the 4-week program duration.",
          category: "flexibility",
          duration: 4,
          sessions: 3,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop",
          featured: true,
          trainer: "Emily Chen",
          trainerImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop",
          equipment: ["Yoga mat", "Yoga blocks (2 recommended)", "Yoga strap or towel", "Blanket for support (optional)"],
          goals: ["Improve flexibility through yoga", "Learn proper yoga alignment", "Combine breathing with stretching", "Develop a yoga practice", "Increase mind-body awareness", "Relieve tension in chronically tight areas"],
          weeks: [
            {
              weekNumber: 1,
              description: "Introduction to foundational yoga poses and proper breathing techniques. Focus on learning the basic alignment principles and becoming comfortable with the essential postures that form the basis of flexibility-focused yoga.",
              workouts: [
                {
                  day: "Flexibility-Focused Yoga Flow",
                  focus: "Full Body Yoga Sequence (20-60 mins)",
                  exercises: [
                    { name: "Child's Pose", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Cat-Cow", sets: 1, reps: "10 flows", rest: "0" },
                    { name: "Downward Dog", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Low Lunge (Anjaneyasana)", sets: 1, reps: "45 sec each side", rest: "0" },
                    { name: "Seated Forward Fold", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Supine Twist", sets: 1, reps: "30 sec each side", rest: "0" },
                    { name: "Happy Baby Pose", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Savasana (rest)", sets: 1, reps: "2-3 min", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Building on foundation with longer holds and deeper variations. Introducing sequences that link poses together with breath, creating a more flowing practice while still emphasizing flexibility.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 3,
              description: "Advancing practice with more challenging poses and combinations. Focusing on areas of tightness identified in previous weeks and introducing targeted variations to address individual needs.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 4,
              description: "Integration phase: Combining individual stretches into flowing sequences that promote both flexibility and body awareness. Emphasizing the mind-body connection while continuing to deepen flexibility through both active and passive stretching techniques.",
              workouts: [
                {
                  day: "Monday",
                  focus: "Neck + Shoulders",
                  exercises: [
                    { name: "Neck rolls", sets: 3, reps: "10 each direction", rest: "15 sec" },
                    { name: "Ear-to-shoulder stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Shoulder shrugs", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Wall angels", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Thread the needle stretch", sets: 2, reps: "30 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Tuesday",
                  focus: "Lower Back + Spine",
                  exercises: [
                    { name: "Cat-cow stretches", sets: 3, reps: "10 reps", rest: "30 sec" },
                    { name: "Seated twist", sets: 3, reps: "30 sec each side", rest: "15 sec" },
                    { name: "Supine spinal twist", sets: 2, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Child's pose", sets: 2, reps: "1 min", rest: "30 sec" },
                    { name: "Sphinx pose", sets: 2, reps: "30 sec", rest: "30 sec" }
                  ]
                },
                {
                  day: "Wednesday",
                  focus: "Hamstrings + Calves",
                  exercises: [
                    { name: "Standing hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Seated hamstring stretch", sets: 3, reps: "45 sec each leg", rest: "15 sec" },
                    { name: "Downward dog", sets: 3, reps: "45 sec", rest: "30 sec" },
                    { name: "Calf wall stretch", sets: 3, reps: "30 sec each leg", rest: "15 sec" },
                    { name: "Seated calf stretch with band", sets: 2, reps: "45 sec each leg", rest: "15 sec" }
                  ]
                },
                {
                  day: "Thursday",
                  focus: "Hips + Hip Flexors",
                  exercises: [
                    { name: "Lunge stretch", sets: 3, reps: "45 sec each side", rest: "15 sec" },
                    { name: "Pigeon pose", sets: 3, reps: "1 min each side", rest: "15 sec" },
                    { name: "Frog pose", sets: 2, reps: "45 sec", rest: "30 sec" },
                    { name: "Butterfly stretch", sets: 3, reps: "45 sec", rest: "15 sec" },
                    { name: "90/90 hip stretch", sets: 2, reps: "45 sec each side", rest: "15 sec" }
                  ]
                },
                {
                  day: "Friday",
                  focus: "Chest + Arms",
                  exercises: [
                    { name: "Doorway chest stretch", sets: 3, reps: "30 sec", rest: "15 sec" },
                    { name: "Triceps stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Shoulder cross stretch", sets: 3, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist flexor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" },
                    { name: "Wrist extensor stretch", sets: 2, reps: "30 sec each arm", rest: "15 sec" }
                  ]
                },
                {
                  day: "Saturday",
                  focus: "Full Body Flow",
                  exercises: [
                    { name: "Sun salutation sequence", sets: 3, reps: "complete flow", rest: "30 sec" },
                    { name: "Cobra to downward dog flow", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Forward fold to mountain pose", sets: 2, reps: "8 transitions", rest: "30 sec" },
                    { name: "Low lunge to warrior II flow", sets: 2, reps: "5 each side", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Sunday",
                  focus: "Rest or foam rolling",
                  exercises: [
                    { name: "Foam rolling - calves", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - hamstrings", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - quads", sets: 1, reps: "1 min each", rest: "30 sec" },
                    { name: "Foam rolling - back", sets: 1, reps: "1 min", rest: "30 sec" },
                    { name: "Foam rolling - glutes", sets: 1, reps: "1 min each", rest: "30 sec" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Lily R.",
              rating: 5,
              comment: "As a yoga beginner, this program has been perfect. I feel more flexible and also more calm after each session.",
              date: "1 month ago"
            },
            {
              name: "Carlos J.",
              rating: 4,
              comment: "Great introduction to yoga for flexibility. The poses are well selected and the sequence flows nicely.",
              date: "2 weeks ago"
            },
            {
              name: "Samantha B.",
              rating: 5,
              comment: "I've tried many flexibility programs and this yoga-based approach has given me the best results by far.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "7",
          title: "Dynamic Stretching",
          description: "Active stretching routine to prepare muscles for workouts and athletic performance.",
          longDescription: "This specialized dynamic stretching program represents the cutting edge of pre-activity preparation, based on sports science research showing that dynamic movement patterns are superior to static stretching for performance enhancement. Unlike traditional static stretching, dynamic stretching involves active movements that take your joints through their full range of motion, effectively preparing the body for the demands of exercise or athletic performance.\n\nEach movement in this routine serves multiple purposes: increasing core temperature, enhancing neuromuscular coordination, improving blood flow to working muscles, and rehearsing movement patterns relevant to most physical activities. The progressive sequence targets all major muscle groups through functional movements that mimic natural human locomotion and sport-specific actions.\n\nIdeal for use before strength training, cardio workouts, sports practice, or competition, this 5-10 minute routine can significantly improve your performance while potentially reducing injury risk. Research indicates that proper dynamic warm-up can increase power output, sprint performance, agility, and exercise efficiency while preparing the nervous system for optimal muscle recruitment. For maximum effectiveness, perform this routine immediately before your primary activity without extended rest periods in between.",
          category: "flexibility",
          duration: 1,
          sessions: 5,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
          featured: false,
          trainer: "Emily Chen",
          trainerImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop",
          equipment: ["None required", "Open space for movement (10-15 feet)", "Flat, non-slip surface"],
          goals: ["Prepare muscles for activity", "Increase range of motion", "Improve athletic performance", "Prevent injury", "Enhance neuromuscular activation", "Increase core body temperature", "Improve movement efficiency"],
          weeks: [
            {
              weekNumber: 1,
              description: "Pre-activity dynamic preparation sequence designed to be performed immediately before workouts or athletic events. Focus on controlled, purposeful movements that gradually increase in intensity and range of motion.",
              workouts: [
                {
                  day: "Pre-Workout/Sports",
                  focus: "Dynamic Warm-Up (5-10 mins)",
                  exercises: [
                    { name: "Leg swings (front-back, side-side)", sets: 1, reps: "10 reps each direction", rest: "0" },
                    { name: "Arm circles", sets: 1, reps: "30 sec", rest: "0" },
                    { name: "Hip circles", sets: 1, reps: "30 sec", rest: "0" },
                    { name: "Walking lunges with twist", sets: 1, reps: "10 reps", rest: "0" },
                    { name: "High knees or butt kicks", sets: 1, reps: "30 sec", rest: "0" },
                    { name: "Inchworm to cobra", sets: 1, reps: "5 reps", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Marcus T.",
              rating: 5,
              comment: "Great pre-workout routine. My workouts feel so much better when I start with these dynamic stretches.",
              date: "3 weeks ago"
            },
            {
              name: "Hannah L.",
              rating: 4,
              comment: "I use this before my runs and have noticed much less stiffness in the first mile. Simple but effective!",
              date: "1 month ago"
            },
            {
              name: "Ryan J.",
              rating: 5,
              comment: "As a basketball player, this dynamic routine has become essential before games. I feel more agile and ready to perform.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          id: "8",
          title: "Total Body Transformation",
          description: "3-day workout routine targeting all major muscle groups multiple times per week. Great for beginners.",
          longDescription: "The Full Body Split is a highly efficient 3-day program that works all major muscle groups in each session. This approach is perfect for beginners, those focused on fat loss, or anyone with limited training time. By training each muscle group multiple times per week with moderate volume per session, this routine optimizes both muscle growth and recovery.",
          category: "strength",
          duration: 8,
          sessions: 3,
          difficulty: "beginner",
          image: "/images/full body.png",
          featured: false,
          trainer: "Lisa Andrews",
          trainerImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop",
          equipment: ["Barbell", "Dumbbells", "Bodyweight", "Bench", "Pull-up bar"],
          goals: ["Build overall strength", "Establish workout consistency", "Improve fitness fundamentals"],
          weeks: [
            {
              weekNumber: 1,
              description: "Introduction to full body training fundamentals",
              workouts: [
                {
                  day: "Day 1 - Full Body A",
                  focus: "Compound movements for all major muscle groups",
                  exercises: [
                    { name: "Barbell Squats", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Bench Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Bent-Over Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Overhead Press", sets: 2, reps: "10-12", rest: "60 sec" },
                    { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Planks", sets: 3, reps: "30-45 sec", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 2 - Rest or Cardio",
                  focus: "Recovery or light activity",
                  exercises: [
                    { name: "Light Cardio (optional)", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Full Body B",
                  focus: "Alternate compound movements",
                  exercises: [
                    { name: "Deadlifts", sets: 3, reps: "6-8", rest: "120 sec" },
                    { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Pull-Ups or Lat Pulldowns", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Dumbbell Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
                    { name: "Lateral Raises", sets: 2, reps: "12-15", rest: "60 sec" },
                    { name: "Hanging Leg Raises", sets: 3, reps: "10-12", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Full Body C",
                  focus: "Variation and progression",
                  exercises: [
                    { name: "Front Squats", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Push-Ups", sets: 3, reps: "10-15", rest: "60 sec" },
                    { name: "Seated Cable Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Russian Twists", sets: 3, reps: "15 each side", rest: "45 sec" }
                  ]
                },
                {
                  day: "Days 6-7 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Light Activity (optional)", sets: 1, reps: "Walking, swimming, etc.", rest: "0" },
                    { name: "Mobility Work", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Thomas L.",
              rating: 5,
              comment: "Perfect for beginners! I was intimidated by weight training but this program made it approachable.",
              date: "2 months ago"
            },
            {
              name: "Jessica W.",
              rating: 5,
              comment: "Great program for busy schedules. I can only make it to the gym 3 days a week and still see results.",
              date: "3 weeks ago"
            },
            {
              name: "Kevin P.",
              rating: 4,
              comment: "Excellent foundation program. I've moved to a more advanced split now, but this was perfect to start with.",
              date: "1 month ago"
            }
          ]
        },
        {
          id: "10",
          title: "Bro Split",
          description: "5-day body part split targeting individual muscle groups for maximum isolation and growth.",
          longDescription: "The 'Bro Split' is a classic bodybuilding approach that dedicates each training day to a specific muscle group, allowing for maximum volume, intensity, and recovery. This training style has been a staple in bodybuilding for decades and remains popular for its straightforward approach and potential for muscle hypertrophy. By focusing entirely on one muscle group per session, you can achieve the necessary training volume and intensity to stimulate growth while allowing adequate recovery before training that muscle group again.",
          category: "strength",
          duration: 8,
          sessions: 5,
          difficulty: "advanced",
          image: "/images/bro.png",
          featured: false,
          trainer: "Mike Johnson",
          trainerImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=250&auto=format&fit=crop",
          equipment: [
            "Barbell and weights",
            "Dumbbells",
            "Cable machine",
            "Bench press",
            "Squat rack",
            "Pull-up bar",
            "Various machines"
          ],
          goals: [
            "Build muscle mass through isolation work",
            "Focus on muscle hypertrophy",
            "Develop specific muscle groups",
            "Achieve aesthetic physique goals",
            "Increase strength in targeted lifts"
          ],
          weeks: [
            {
              week: 1,
              workouts: [
                {
                  day: "Day 1 - Chest",
                  focus: "Chest hypertrophy",
                  exercises: [
                    { name: "Flat Barbell Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Machine Chest Fly", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Cable Crossovers", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Push-Ups", sets: 2, reps: "To failure", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Back",
                  focus: "Back width and thickness",
                  exercises: [
                    { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Pull-Ups", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Bent Over Barbell Rows", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Seated Cable Rows", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Lat Pulldowns", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 3 - Shoulders",
                  focus: "Shoulder development",
                  exercises: [
                    { name: "Seated Overhead Press", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60 sec" },
                    { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Upright Rows", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Shrugs", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 4 - Arms",
                  focus: "Biceps and triceps",
                  exercises: [
                    { name: "Barbell Curls", sets: 4, reps: "8-10", rest: "60 sec" },
                    { name: "Skull Crushers", sets: 4, reps: "8-10", rest: "60 sec" },
                    { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Tricep Pushdowns", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 5 - Legs",
                  focus: "Leg development",
                  exercises: [
                    { name: "Barbell Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Leg Press", sets: 3, reps: "12-15", rest: "90 sec" },
                    { name: "Leg Extensions", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Leg Curls", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 6 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 0, reps: "Complete rest", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Alex P.",
              rating: 5,
              comment: "This split is perfect for my goals. I've seen significant growth in my chest and arms after just 4 weeks.",
              date: "2023-10-05"
            },
            {
              name: "Jordan T.",
              rating: 4,
              comment: "Love the focus on individual muscle groups. Would like more variation in exercises, but overall very effective.",
              date: "2023-11-12"
            },
            {
              name: "Chris M.",
              rating: 5,
              comment: "Best split I've tried for pure muscle building. The recovery time between sessions for each muscle group is perfect.",
              date: "2023-12-20"
            },
            {
              name: "Taylor R.",
              rating: 4,
              comment: "Great program for intermediate to advanced lifters. Seeing good progress, especially in my shoulders and arms.",
              date: "2024-01-15"
            }
          ]
        },
        {
          id: "14",
          title: "Fat Loss (HIIT + Steady State)",
          description: "Combined HIIT and steady-state cardio program designed for maximum fat burning efficiency.",
          longDescription: "This specialized 4-week cardio program combines the calorie-burning intensity of HIIT workouts with the endurance-building benefits of steady-state cardio. The strategic combination maximizes fat loss by utilizing both anaerobic and aerobic energy systems. This dual approach helps prevent plateaus, reduces burnout risk, and accommodates various fitness levels, making it ideal for those focused on sustainable fat loss.",
          category: "cardio",
          duration: 4,
          sessions: 5,
          difficulty: "intermediate",
          image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop",
          featured: true,
          trainer: "Jessica Williams",
          trainerImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=200&auto=format&fit=crop",
          equipment: ["Treadmill", "Exercise bike", "Jump rope", "Timer", "Mat"],
          goals: ["Maximize fat loss", "Improve cardio capacity", "Boost metabolism", "Improve endurance"],
          weeks: [
            {
              weekNumber: 1,
              description: "Foundation building with moderate intensity intervals and steady-state work",
              workouts: [
                {
                  day: "Day 1 - HIIT Focus",
                  focus: "Lower body intervals",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min light cardio", rest: "0" },
                    { name: "Jump Squats", sets: 6, reps: "30 sec", rest: "30 sec" },
                    { name: "Speed Skaters", sets: 6, reps: "30 sec", rest: "30 sec" },
                    { name: "Mountain Climbers", sets: 6, reps: "30 sec", rest: "30 sec" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Repeat Circuit", sets: 2, reps: "complete all exercises", rest: "2 min between circuits" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Steady State",
                  focus: "Base endurance building",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Treadmill/Outdoor Walk/Jog", sets: 1, reps: "35 min at 65-70% max HR", rest: "0" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - HIIT Focus",
                  focus: "Full body circuit",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min light cardio", rest: "0" },
                    { name: "Burpees", sets: 5, reps: "30 sec", rest: "30 sec" },
                    { name: "High Knees", sets: 5, reps: "30 sec", rest: "30 sec" },
                    { name: "Plank Jacks", sets: 5, reps: "30 sec", rest: "30 sec" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Repeat Circuit", sets: 2, reps: "complete all exercises", rest: "2 min between circuits" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Active Recovery",
                  exercises: [
                    { name: "Light Walking", sets: 1, reps: "15-20 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "10 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Steady State",
                  focus: "Building endurance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Cycling/Elliptical/Swimming", sets: 1, reps: "40 min at 65-70% max HR", rest: "0" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 6 - HIIT Focus",
                  focus: "Tabata intervals",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Jump Rope", sets: 8, reps: "20 sec", rest: "10 sec" },
                    { name: "Rest", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Bodyweight Squats", sets: 8, reps: "20 sec", rest: "10 sec" },
                    { name: "Rest", sets: 1, reps: "1 min", rest: "0" },
                    { name: "Mountain Climbers", sets: 8, reps: "20 sec", rest: "10 sec" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Complete Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "No planned exercise", rest: "0" },
                    { name: "Light stretching (optional)", sets: 1, reps: "10 min", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Increasing interval intensity and steady-state duration",
              workouts: [
                {
                  day: "Day 1 - HIIT Focus",
                  focus: "Shorter rest periods",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min light cardio", rest: "0" },
                    { name: "Jumping Lunges", sets: 6, reps: "30 sec", rest: "20 sec" },
                    { name: "Lateral Jumps", sets: 6, reps: "30 sec", rest: "20 sec" },
                    { name: "Plank to Push-up", sets: 6, reps: "30 sec", rest: "20 sec" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Repeat Circuit", sets: 2, reps: "complete all exercises", rest: "90 sec between circuits" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Steady State",
                  focus: "Extended endurance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Treadmill/Outdoor Walk/Jog", sets: 1, reps: "40 min at 65-70% max HR", rest: "0" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - HIIT Focus",
                  focus: "Pyramid intervals",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min light cardio", rest: "0" },
                    { name: "Jumping Jacks", sets: 1, reps: "20 sec", rest: "10 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "30 sec", rest: "15 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "40 sec", rest: "20 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "50 sec", rest: "25 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "40 sec", rest: "20 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "30 sec", rest: "15 sec" },
                    { name: "Jumping Jacks", sets: 1, reps: "20 sec", rest: "10 sec" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Repeat with Squats", sets: 1, reps: "Same pyramid pattern", rest: "Same rest periods" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Repeat with Push-ups", sets: 1, reps: "Same pyramid pattern", rest: "Same rest periods" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Active Recovery",
                  exercises: [
                    { name: "Light Walking", sets: 1, reps: "20 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Steady State + Strength",
                  focus: "Endurance with light resistance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Cycling/Elliptical", sets: 1, reps: "30 min at 65-70% max HR", rest: "0" },
                    { name: "Circuit: Squats", sets: 3, reps: "15", rest: "30 sec" },
                    { name: "Circuit: Push-ups", sets: 3, reps: "10-15", rest: "30 sec" },
                    { name: "Circuit: Lunges", sets: 3, reps: "12 each leg", rest: "30 sec" },
                    { name: "Circuit: Plank", sets: 3, reps: "30-45 sec", rest: "30 sec" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 3,
              description: "Peak intensity intervals with mixed steady-state variations",
              workouts: [
                {
                  day: "Day 1 - HIIT Focus",
                  focus: "Max effort intervals",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min light cardio", rest: "0" },
                    { name: "Sprint or Max Effort", sets: 8, reps: "20 sec", rest: "40 sec" },
                    { name: "Rest Period", sets: 1, reps: "2 min", rest: "0" },
                    { name: "Sprint or Max Effort", sets: 8, reps: "20 sec", rest: "40 sec" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Fartlek Training",
                  focus: "Mixed pace endurance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Fartlek Session", sets: 1, reps: "30 min alternating between easy, moderate and hard efforts", rest: "0" },
                    { name: "Cool Down", sets: 1, reps: "5 min", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Michelle R.",
              rating: 5,
              comment: "The combination of HIIT and steady state is perfect! I've lost 12 pounds in 4 weeks with this program.",
              date: "2 weeks ago"
            },
            {
              name: "David C.",
              rating: 4,
              comment: "Effective program that doesn't leave you completely drained. The balance between intense and moderate workouts is ideal.",
              date: "1 month ago"
            },
            {
              name: "Jennifer T.",
              rating: 5,
              comment: "I love how this program introduces variety. I haven't been bored once, and the results are noticeable after just 2 weeks.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "16",
          title: "Endurance & Performance",
          description: "Advanced training program for athletes and runners looking to improve endurance and performance.",
          longDescription: "This comprehensive 6-week endurance training program is designed for advanced athletes looking to improve cardiorespiratory fitness, lactate threshold, and overall performance. The plan integrates interval training, tempo work, and long-distance sessions to develop all energy systems. Perfect for experienced runners, cyclists, and endurance athletes preparing for competitions or looking to break through plateaus.",
          category: "cardio",
          duration: 6,
          sessions: 5,
          difficulty: "advanced",
          image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=600&auto=format&fit=crop",
          featured: true,
          trainer: "Marcus Johnson",
          trainerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
          equipment: ["Running shoes", "Heart rate monitor", "Treadmill/outdoor track", "Bike (optional)", "Stopwatch"],
          goals: ["Improve VO2 max", "Enhance lactate threshold", "Increase endurance capacity", "Optimize race performance"],
          weeks: [
            {
              weekNumber: 1,
              description: "Base building with structured interval work",
              workouts: [
                {
                  day: "Day 1 - Interval Training",
                  focus: "VO2 max development",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "10 min progressive jog", rest: "0" },
                    { name: "Dynamic stretching", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Hard intervals", sets: 6, reps: "3 min at 85-90% max HR", rest: "2 min easy jogging" },
                    { name: "Cool down", sets: 1, reps: "10 min easy jog + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Recovery Run",
                  focus: "Active recovery",
                  exercises: [
                    { name: "Easy run", sets: 1, reps: "30 min at 60-65% max HR", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "10 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Tempo Run",
                  focus: "Lactate threshold development",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "10 min easy pace", rest: "0" },
                    { name: "Tempo run", sets: 1, reps: "25 min at 75-80% max HR", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "10 min easy jog + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Rest or Cross Training",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "Complete rest", rest: "0" },
                    { name: "Optional low-impact activity", sets: 1, reps: "30 min swimming/cycling", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Hill Repeats",
                  focus: "Strength and power",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "10 min progressive jog", rest: "0" },
                    { name: "Dynamic stretching", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Hill repeats", sets: 8, reps: "60 sec uphill hard effort", rest: "Walk back down for recovery" },
                    { name: "Cool down", sets: 1, reps: "10 min easy jog + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 6 - Long Run",
                  focus: "Endurance base building",
                  exercises: [
                    { name: "Long distance run", sets: 1, reps: "60 min at 65-70% max HR", rest: "0" },
                    { name: "Post-run stretching", sets: 1, reps: "10 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "No planned exercise", rest: "0" },
                    { name: "Light stretching/foam rolling", sets: 1, reps: "10-15 min (optional)", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Increasing intensity with structured progression",
              workouts: [
                {
                  day: "Day 1 - Interval Training",
                  focus: "VO2 max development",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "10 min progressive jog", rest: "0" },
                    { name: "Dynamic stretching", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Hard intervals", sets: 5, reps: "4 min at 85-90% max HR", rest: "2 min easy jogging" },
                    { name: "Cool down", sets: 1, reps: "10 min easy jog + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Recovery Run",
                  focus: "Active recovery",
                  exercises: [
                    { name: "Easy run", sets: 1, reps: "35 min at 60-65% max HR", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "10 min", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Chris M.",
              rating: 5,
              comment: "I knocked 8 minutes off my half marathon time after following this program. The structured progression works!",
              date: "1 month ago"
            },
            {
              name: "Laura S.",
              rating: 4,
              comment: "Excellent for serious runners. Challenging but effective - I've seen significant improvements in my endurance.",
              date: "3 weeks ago"
            },
            {
              name: "Tyler R.",
              rating: 5,
              comment: "This program balances intensity and recovery perfectly. My VO2 max has increased noticeably, and I'm hitting new PRs.",
              date: "2 months ago"
            }
          ]
        },
        {
          id: "18",
          title: "Low Impact Cardio",
          description: "Joint-friendly cardio options ideal for beginners, those with injuries, or during recovery periods.",
          longDescription: "This gentle but effective 4-week low-impact cardio program is perfect for those with joint concerns, beginners, seniors, or anyone recovering from injury. Each workout is carefully designed to elevate your heart rate and improve cardiovascular fitness without putting stress on your joints. The program progressively increases in intensity while maintaining the low-impact nature of all exercises.",
          category: "cardio",
          duration: 4,
          sessions: 5,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
          featured: false,
          trainer: "Catherine Lopez",
          trainerImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=200&auto=format&fit=crop",
          equipment: ["Exercise bike", "Swimming access (optional)", "Walking shoes", "Light dumbbells", "Resistance bands"],
          goals: ["Improve cardiovascular health", "Build endurance", "Burn calories", "Joint-friendly fitness"],
          weeks: [
            {
              weekNumber: 1,
              description: "Establishing comfortable baseline fitness",
              workouts: [
                {
                  day: "Day 1 - Walking",
                  focus: "Steady state aerobic fitness",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy walk", rest: "0" },
                    { name: "Brisk walking", sets: 1, reps: "20 min at moderate pace", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "5 min easy walk + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Cycling",
                  focus: "Lower body endurance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy pedaling", rest: "0" },
                    { name: "Steady cycling", sets: 1, reps: "20 min at moderate resistance", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "5 min easy pedaling + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "Complete rest", rest: "0" },
                    { name: "Light stretching (optional)", sets: 1, reps: "10 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Water Exercise",
                  focus: "Full body movement",
                  exercises: [
                    { name: "Water walking", sets: 1, reps: "10 min", rest: "0" },
                    { name: "Water arm movements", sets: 3, reps: "2 min", rest: "1 min" },
                    { name: "Gentle swimming or aqua jogging", sets: 1, reps: "10 min", rest: "0" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Chair Cardio",
                  focus: "Upper body movement",
                  exercises: [
                    { name: "Seated arm circles", sets: 3, reps: "30 sec each direction", rest: "30 sec" },
                    { name: "Seated marching", sets: 3, reps: "1 min", rest: "30 sec" },
                    { name: "Seated punches", sets: 3, reps: "1 min", rest: "30 sec" },
                    { name: "Seated tap backs", sets: 3, reps: "1 min", rest: "30 sec" },
                    { name: "Cool down stretches", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 6 - Walking Circuit",
                  focus: "Variable intensity",
                  exercises: [
                    { name: "Warm-up walk", sets: 1, reps: "5 min easy pace", rest: "0" },
                    { name: "Moderate pace walking", sets: 5, reps: "3 min", rest: "2 min very slow walking" },
                    { name: "Cool down", sets: 1, reps: "5 min easy walk + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "No planned exercise", rest: "0" },
                    { name: "Gentle stretching (optional)", sets: 1, reps: "10 min", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Gradually increasing duration",
              workouts: [
                {
                  day: "Day 1 - Walking",
                  focus: "Extended steady state",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy walk", rest: "0" },
                    { name: "Brisk walking", sets: 1, reps: "25 min at moderate pace", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "5 min easy walk + stretching", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Cycling",
                  focus: "Lower body endurance",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy pedaling", rest: "0" },
                    { name: "Steady cycling", sets: 1, reps: "25 min at moderate resistance", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "5 min easy pedaling + stretching", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Margaret H.",
              rating: 5,
              comment: "Perfect for my arthritis! I can finally get cardio exercise without pain. Already feeling stronger after 3 weeks.",
              date: "2 weeks ago"
            },
            {
              name: "James T.",
              rating: 5,
              comment: "I'm recovering from knee surgery and this program has been exactly what I needed to maintain fitness safely.",
              date: "1 month ago"
            },
            {
              name: "Patricia M.",
              rating: 4,
              comment: "Great for beginners like me. The gradual progression makes it very approachable and I don't feel intimidated.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          id: "15",
          title: "Heart Health & General Fitness",
          description: "Moderate intensity cardiovascular training for improved heart health and general fitness.",
          longDescription: "This balanced 4-week cardiovascular training program focuses on improving heart health, increasing stamina, and enhancing overall fitness. Designed for those seeking moderate, sustainable exercise with meaningful health benefits, this plan incorporates a variety of cardio activities to keep workouts enjoyable and effective. Ideal for both beginners and intermediate exercisers who prioritize heart health and general wellness.",
          category: "cardio",
          duration: 4,
          sessions: 4,
          difficulty: "beginner",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
          featured: false,
          trainer: "Robert Chen",
          trainerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
          equipment: ["Walking/running shoes", "Bicycle (optional)", "Jump rope", "Heart rate monitor (optional)"],
          goals: ["Improve cardiovascular health", "Enhance overall fitness", "Build consistent exercise habits", "Increase energy levels"],
          weeks: [
            {
              weekNumber: 1,
              description: "Establishing consistent cardiac exercise habits",
              workouts: [
                {
                  day: "Day 1 - Steady State Walking/Jogging",
                  focus: "Aerobic base building",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy walking", rest: "0" },
                    { name: "Walking or slow jogging", sets: 1, reps: "20 min at moderate pace", rest: "0" },
                    { name: "Cool down walk", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "Complete rest or light activity", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Cross Training",
                  focus: "Cardio variety",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Cycling, swimming, or elliptical", sets: 1, reps: "20 min at moderate intensity", rest: "0" },
                    { name: "Cool down", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "Complete rest or light activity", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Mixed Cardio",
                  focus: "Varied intensity",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Moderate walking", sets: 3, reps: "5 min", rest: "1 min light walking" },
                    { name: "Brisk walking or light jogging", sets: 3, reps: "3 min", rest: "1 min light walking" },
                    { name: "Cool down", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 6 - Active Recovery",
                  focus: "Light movement",
                  exercises: [
                    { name: "Light walking", sets: 1, reps: "15-20 min", rest: "0" },
                    { name: "Gentle stretching", sets: 1, reps: "10 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "No planned exercise", rest: "0" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Gradually increasing duration and introducing mild intervals",
              workouts: [
                {
                  day: "Day 1 - Steady State Walking/Jogging",
                  focus: "Extended aerobic work",
                  exercises: [
                    { name: "Warm-up", sets: 1, reps: "5 min easy walking", rest: "0" },
                    { name: "Walking or slow jogging", sets: 1, reps: "25 min at moderate pace", rest: "0" },
                    { name: "Cool down walk", sets: 1, reps: "5 min", rest: "0" },
                    { name: "Stretching", sets: 1, reps: "5 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 2 - Rest",
                  focus: "Recovery",
                  exercises: [
                    { name: "Rest day", sets: 1, reps: "Complete rest or light activity", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Thomas W.",
              rating: 5,
              comment: "My doctor recommended cardio for my heart health, and this program has been perfect. My resting heart rate has already improved!",
              date: "3 weeks ago"
            },
            {
              name: "Karen L.",
              rating: 5,
              comment: "Great for getting back into fitness after years of inactivity. I feel energized and my stamina has improved noticeably.",
              date: "1 month ago"
            },
            {
              name: "Michael P.",
              rating: 4,
              comment: "Straightforward program that's easy to follow. I appreciate the focus on heart health rather than just intense workouts.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          id: "13",
          title: "Arnold Split",
          description: "Advanced 5-day program based on Arnold Schwarzenegger's classic bodybuilding routine.",
          longDescription: "Named after legendary bodybuilder Arnold Schwarzenegger, this 5-day split focuses on training each muscle group twice per week with high volume. This advanced program is designed for experienced lifters seeking aesthetic muscle development and symmetry. The unique chest and back pairing creates a powerful pump and balanced development.",
          category: "strength",
          duration: 8,
          sessions: 5,
          difficulty: "advanced",
          image: "/images/Arnold.png",
          featured: true,
          trainer: "Arnold Thompson",
          trainerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
          equipment: ["Barbell", "Dumbbells", "Cable machines", "Various machines", "Bench"],
          goals: ["Muscle hypertrophy", "Aesthetic development", "Symmetrical physique", "Strength building", "Classic bodybuilding look"],
          weeks: [
            {
              weekNumber: 1,
              description: "High volume training following Arnold's principles of pairing opposing muscle groups and prioritizing weak points",
              workouts: [
                {
                  day: "Day 1 - Chest & Back",
                  focus: "Superset opposing muscle groups",
                  exercises: [
                    { name: "Bench Press", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Wide-Grip Pull-Ups", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Incline Dumbbell Press", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "T-Bar Rows", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Seated Cable Rows", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Dips", sets: 3, reps: "10-15", rest: "60 sec" },
                    { name: "Pull-Overs", sets: 3, reps: "12-15", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Shoulders & Arms",
                  focus: "Shoulders, Biceps, Triceps",
                  exercises: [
                    { name: "Military Press", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Lateral Raises", sets: 4, reps: "10-15", rest: "60 sec" },
                    { name: "Rear Delt Flyes", sets: 4, reps: "10-15", rest: "60 sec" },
                    { name: "Barbell Curls", sets: 4, reps: "8-12", rest: "60 sec" },
                    { name: "Close-Grip Bench Press", sets: 4, reps: "8-12", rest: "60 sec" },
                    { name: "Incline Dumbbell Curls", sets: 3, reps: "10-12", rest: "45 sec" },
                    { name: "Skull Crushers", sets: 3, reps: "10-12", rest: "45 sec" },
                    { name: "Concentration Curls", sets: 3, reps: "12-15", rest: "45 sec" },
                    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 3 - Legs",
                  focus: "Complete lower body development",
                  exercises: [
                    { name: "Squats", sets: 5, reps: "8-12", rest: "120 sec" },
                    { name: "Leg Press", sets: 4, reps: "12-15", rest: "90 sec" },
                    { name: "Leg Extensions", sets: 4, reps: "12-15", rest: "60 sec" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Leg Curls", sets: 4, reps: "12-15", rest: "60 sec" },
                    { name: "Standing Calf Raises", sets: 5, reps: "15-20", rest: "45 sec" },
                    { name: "Seated Calf Raises", sets: 5, reps: "15-20", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 4 - Chest & Back",
                  focus: "Superset variation",
                  exercises: [
                    { name: "Incline Barbell Press", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Barbell Rows", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Flat Dumbbell Press", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Lat Pulldowns", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Decline Bench Press", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Single-Arm Dumbbell Rows", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Machine Flyes", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Straight-Arm Pulldowns", sets: 3, reps: "15-20", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 5 - Shoulders & Arms",
                  focus: "Volume and detail work",
                  exercises: [
                    { name: "Arnold Press", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Upright Rows", sets: 4, reps: "10-12", rest: "60 sec" },
                    { name: "Face Pulls", sets: 4, reps: "12-15", rest: "60 sec" },
                    { name: "Preacher Curls", sets: 4, reps: "10-12", rest: "60 sec" },
                    { name: "Overhead Tricep Extensions", sets: 4, reps: "10-12", rest: "60 sec" },
                    { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "45 sec" },
                    { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "45 sec" },
                    { name: "Wrist Curls", sets: 3, reps: "15-20", rest: "30 sec" }
                  ]
                },
                {
                  day: "Day 6 - Legs",
                  focus: "Intensity and detail",
                  exercises: [
                    { name: "Front Squats", sets: 4, reps: "8-12", rest: "120 sec" },
                    { name: "Hack Squats", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "90 sec" },
                    { name: "Good Mornings", sets: 4, reps: "10-12", rest: "90 sec" },
                    { name: "Seated Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Donkey Calf Raises", sets: 4, reps: "15-20", rest: "45 sec" },
                    { name: "Calf Press on Leg Press", sets: 4, reps: "15-20", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 7 - Rest",
                  focus: "Complete Recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" },
                    { name: "Light walking (optional)", sets: 1, reps: "20-30 min", rest: "0" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Arnold F.",
              rating: 5,
              comment: "Training like the Austrian Oak himself! The volume is intense but the results are amazing for muscle development.",
              date: "3 weeks ago"
            },
            {
              name: "Samantha K.",
              rating: 4,
              comment: "Great for bodybuilding but requires serious commitment. I modified some exercises for my home gym setup.",
              date: "1 month ago"
            },
            {
              name: "Marcus T.",
              rating: 5,
              comment: "The chest and back supersets are genius! Creating a balanced physique and incredible pumps.",
              date: "2 months ago"
            }
          ]
        },
        {
          id: "12",
          title: "Full Body Split",
          description: "3-day workout routine targeting all major muscle groups multiple times per week. Great for beginners.",
          longDescription: "This 8-week full body routine is perfect for beginners and those returning to fitness. Training the entire body three times per week maximizes recovery while maintaining frequency for optimal muscle and strength gains. This approach is both time-efficient and effective for developing a balanced physique and functional strength.",
          category: "strength",
          duration: 8,
          sessions: 3,
          difficulty: "beginner",
          image: "/images/full body.png",
          featured: false,
          trainer: "Jessica Williams",
          trainerImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop",
          equipment: ["Barbell", "Dumbbells", "Pull-up bar", "Bench", "Bodyweight"],
          goals: ["Overall strength", "Balanced muscle development", "Proper exercise form", "Workout consistency", "Building a foundation"],
          weeks: [
            {
              weekNumber: 1,
              description: "Introduction phase focusing on proper form and establishing a routine",
              workouts: [
                {
                  day: "Day 1 - Full Body A",
                  focus: "Primary movement patterns",
                  exercises: [
                    { name: "Goblet Squats", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Push-Ups", sets: 3, reps: "8-12", rest: "60 sec" },
                    { name: "Dumbbell Rows", sets: 3, reps: "10-12 per arm", rest: "60 sec" },
                    { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Plank", sets: 3, reps: "30-45 sec hold", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 2 - Rest or Light Activity",
                  focus: "Recovery",
                  exercises: [
                    { name: "Walking", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Light Stretching", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Full Body B",
                  focus: "Secondary movements",
                  exercises: [
                    { name: "Dumbbell Lunges", sets: 3, reps: "10-12 per leg", rest: "90 sec" },
                    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "45 sec" },
                    { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Bicycle Crunches", sets: 3, reps: "15-20 per side", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Full Body C",
                  focus: "Variation and functional movement",
                  exercises: [
                    { name: "Bodyweight Squats", sets: 3, reps: "15-20", rest: "60 sec" },
                    { name: "Dumbbell Bench Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Cable Rows", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Arnold Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Glute Bridges", sets: 3, reps: "15-20", rest: "45 sec" },
                    { name: "Mountain Climbers", sets: 3, reps: "20 per side", rest: "45 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 2,
              description: "Building on foundation with increased volume",
              workouts: [
                {
                  day: "Day 1 - Full Body A",
                  focus: "Compound movements",
                  exercises: [
                    { name: "Dumbbell Squats", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Push-Ups (Elevated if needed)", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Seated Cable Rows", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Standing Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Dumbbell Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Side Planks", sets: 3, reps: "30 sec per side", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 2 - Rest or Light Activity",
                  focus: "Recovery",
                  exercises: [
                    { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Dynamic Stretching", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Full Body B",
                  focus: "Isolation and stability",
                  exercises: [
                    { name: "Split Squats", sets: 3, reps: "10-12 per leg", rest: "90 sec" },
                    { name: "Dumbbell Floor Press", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Single-Arm Dumbbell Rows", sets: 3, reps: "10-12 per arm", rest: "60 sec" },
                    { name: "Lateral and Front Raises Superset", sets: 3, reps: "12 each", rest: "60 sec" },
                    { name: "Stability Ball Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Plank with Shoulder Taps", sets: 3, reps: "10 taps per side", rest: "45 sec" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Full Body C",
                  focus: "Endurance and functional strength",
                  exercises: [
                    { name: "Walking Lunges", sets: 3, reps: "12 per leg", rest: "60 sec" },
                    { name: "Incline Push-Ups", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "TRX Rows or Inverted Rows", sets: 3, reps: "12-15", rest: "60 sec" },
                    { name: "Pike Push-Ups", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Step-Ups", sets: 3, reps: "12 per leg", rest: "60 sec" },
                    { name: "Russian Twists", sets: 3, reps: "15 per side", rest: "45 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 3,
              description: "Progressive overload phase with increased intensity",
              workouts: [
                {
                  day: "Day 1 - Full Body A",
                  focus: "Strength development",
                  exercises: [
                    { name: "Barbell Box Squats", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Decline Push-Ups", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Bent-Over Barbell Rows", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Seated Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Hanging Leg Raises", sets: 3, reps: "10-12", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Rest or Light Activity",
                  focus: "Recovery",
                  exercises: [
                    { name: "Swimming or Cycling", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Foam Rolling", sets: 1, reps: "10-15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Full Body B",
                  focus: "Hypertrophy",
                  exercises: [
                    { name: "Bulgarian Split Squats", sets: 3, reps: "10 per leg", rest: "90 sec" },
                    { name: "Dumbbell Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Lat Pulldowns", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Upright Rows", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Leg Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Cable Woodchoppers", sets: 3, reps: "12 per side", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Full Body C",
                  focus: "Power and explosiveness",
                  exercises: [
                    { name: "Goblet Jump Squats", sets: 3, reps: "10", rest: "90 sec" },
                    { name: "Plyometric Push-Ups", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Renegade Rows", sets: 3, reps: "8 per side", rest: "90 sec" },
                    { name: "Push Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Explosive Step-Ups", sets: 3, reps: "8 per leg", rest: "90 sec" },
                    { name: "Medicine Ball Slams", sets: 3, reps: "12", rest: "60 sec" }
                  ]
                }
              ]
            },
            {
              weekNumber: 4,
              description: "Progression phase with increased weights and intensity",
              workouts: [
                {
                  day: "Day 1 - Full Body A",
                  focus: "Strength focus",
                  exercises: [
                    { name: "Barbell Squats", sets: 4, reps: "6-8", rest: "120 sec" },
                    { name: "Weighted Push-Ups", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Single-Arm Dumbbell Rows", sets: 4, reps: "8-10 per arm", rest: "90 sec" },
                    { name: "Dumbbell Shoulder Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120 sec" },
                    { name: "Weighted Planks", sets: 3, reps: "40-60 sec hold", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 2 - Rest or Light Activity",
                  focus: "Recovery",
                  exercises: [
                    { name: "Walking", sets: 1, reps: "20-30 min", rest: "0" },
                    { name: "Dynamic Stretching", sets: 1, reps: "15 min", rest: "0" }
                  ]
                },
                {
                  day: "Day 3 - Full Body B",
                  focus: "Hypertrophy focus",
                  exercises: [
                    { name: "Walking Lunges with Dumbbells", sets: 3, reps: "12 per leg", rest: "90 sec" },
                    { name: "Incline Dumbbell Press", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Cable Pulldowns", sets: 4, reps: "8-12", rest: "90 sec" },
                    { name: "Lateral Raises", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Leg Curls", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Weighted Russian Twists", sets: 3, reps: "15 per side", rest: "60 sec" }
                  ]
                },
                {
                  day: "Day 4 - Rest",
                  focus: "Complete recovery",
                  exercises: [
                    { name: "Rest Day", sets: 1, reps: "Complete rest", rest: "0" }
                  ]
                },
                {
                  day: "Day 5 - Full Body C",
                  focus: "Strength-endurance",
                  exercises: [
                    { name: "Front Squats", sets: 4, reps: "8-10", rest: "90 sec" },
                    { name: "Close-Grip Push-Ups", sets: 3, reps: "10-12", rest: "60 sec" },
                    { name: "Pull-Ups or Assisted Pull-Ups", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Military Press", sets: 3, reps: "8-10", rest: "90 sec" },
                    { name: "Dumbbell Stiff-Legged Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
                    { name: "Ab Rollouts", sets: 3, reps: "8-12", rest: "60 sec" }
                  ]
                }
              ]
            }
          ],
          reviews: [
            {
              name: "Michael R.",
              rating: 5,
              comment: "This program is perfect for beginners. I've gained 8 pounds of muscle and my strength has gone up significantly across all exercises.",
              date: "2023-09-15"
            },
            {
              name: "Sarah T.",
              rating: 4,
              comment: "I love the simplicity of the full body approach. Three days a week fits perfectly into my schedule, and I'm seeing great results.",
              date: "2023-10-02"
            },
            {
              name: "Jason K.",
              rating: 5,
              comment: "Coming back to fitness after a long break, this program was exactly what I needed. The progression is sensible and I haven't had any injuries.",
              date: "2023-11-12"
            },
            {
              name: "Emily W.",
              rating: 5,
              comment: "As someone with limited time, I appreciate the efficiency of full body workouts. I'm stronger, more confident, and actually enjoying my gym time!",
              date: "2023-12-05"
            }
          ]
        },
      ];
      
      // Find the workout plan by ID
      const foundPlan = workoutPlansData.find(plan => plan.id === id);
      
      // Simulate network delay
      setTimeout(() => {
        setWorkoutPlan(foundPlan || null);
        setLoading(false);
      }, 500);
    };

    fetchWorkoutPlan();
  }, [id]);

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

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-48 bg-slate-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-slate-200 rounded"></div>
            <div className="h-32 bg-slate-200 rounded"></div>
            <div className="h-32 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!workoutPlan) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Workout Plan Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The workout plan you're looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/workout-plans" onClick={() => window.scrollTo(0, 0)}>Browse Workout Plans</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/workout-plans" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <FaArrowLeft />
            <span>Back to Workout Plans</span>
          </Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="w-full md:w-1/2 bg-neutral-900 rounded-lg overflow-hidden">
          <img
            src={workoutPlan.image}
            alt={workoutPlan.title}
            className="rounded-lg object-cover w-full aspect-video"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{workoutPlan.title}</h1>
          
          <div className="flex gap-2 mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(workoutPlan.difficulty)}`}>
              {workoutPlan.difficulty.charAt(0).toUpperCase() + workoutPlan.difficulty.slice(1)}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
              {workoutPlan.category.charAt(0).toUpperCase() + workoutPlan.category.slice(1)}
            </span>
          </div>
          
          <p className="text-muted-foreground mb-6">{workoutPlan.longDescription}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>{workoutPlan.duration} weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              <span>{workoutPlan.sessions}x per week</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWeightHanging className="text-primary" />
              <span>{workoutPlan.difficulty.charAt(0).toUpperCase() + workoutPlan.difficulty.slice(1)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFire className="text-primary" />
              <span>{workoutPlan.category.charAt(0).toUpperCase() + workoutPlan.category.slice(1)}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">Start This Plan</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Save to My Plans</Button>
          </div>
        </div>
      </div>

      {/* Trainer info */}
      <Card className="mb-10">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img 
              src={workoutPlan.trainerImage} 
              alt={workoutPlan.trainer} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Created by {workoutPlan.trainer}</h3>
              <p className="text-muted-foreground">Certified Personal Trainer</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for workout details, equipment, and reviews */}
      <Tabs defaultValue="program" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="program">Program Details</TabsTrigger>
          <TabsTrigger value="equipment">Equipment Needed</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="program">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Goals</CardTitle>
                <CardDescription>What you'll achieve with this plan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {workoutPlan.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Breakdown</CardTitle>
                <CardDescription>Your week-by-week progression</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {workoutPlan.weeks.map((week) => (
                    <div key={week.weekNumber} className="pb-6 border-b last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-semibold mb-2">Week {week.weekNumber}</h3>
                      <p className="text-muted-foreground mb-4">{week.description}</p>
                      
                      {week.workouts && week.workouts.length > 0 ? (
                        <div className="space-y-4">
                          {week.workouts.map((workout, index) => (
                            <Card key={index}>
                              <CardHeader className="py-3 px-4">
                                <CardTitle className="text-base">{workout.day}: {workout.focus}</CardTitle>
                              </CardHeader>
                              <CardContent className="px-4 py-2">
                                <table className="w-full">
                                  <thead>
                                    <tr className="text-left text-sm">
                                      <th className="pb-2">Exercise</th>
                                      <th className="pb-2">Sets</th>
                                      <th className="pb-2">Reps</th>
                                      <th className="pb-2">Rest</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {workout.exercises.map((exercise, exIndex) => (
                                      <tr key={exIndex} className="border-t last:border-b">
                                        <td className="py-2">{exercise.name}</td>
                                        <td className="py-2">{exercise.sets}</td>
                                        <td className="py-2">{exercise.reps}</td>
                                        <td className="py-2">{exercise.rest}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="italic text-muted-foreground">Detailed workout information for this week will be revealed as you progress through the plan.</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle>Required Equipment</CardTitle>
              <CardDescription>What you'll need to complete this workout plan</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                {workoutPlan.equipment.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaDumbbell className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>User Reviews</CardTitle>
              <CardDescription>What others are saying about this plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {workoutPlan.reviews.map((review, index) => (
                  <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaFire 
                          key={i} 
                          className={i < review.rating ? "text-primary" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to action */}
      <div className="bg-primary/5 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your fitness?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start this plan today and track your progress with our comprehensive fitness tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Start This Plan</Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/workout-plans" onClick={() => window.scrollTo(0, 0)}>Explore Other Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanDetails; 