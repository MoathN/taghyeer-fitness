import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender.",
  }),
  age: z.coerce
    .number()
    .min(15, { message: "Age must be at least 15" })
    .max(100, { message: "Age must be less than 100" }),
  weight: z.coerce
    .number()
    .min(30, { message: "Weight must be at least 30kg" })
    .max(300, { message: "Weight must be less than 300kg" }),
  height: z.coerce
    .number()
    .min(100, { message: "Height must be at least 100cm" })
    .max(250, { message: "Height must be less than 250cm" }),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very_active"], {
    required_error: "Please select your activity level.",
  }),
  goal: z.enum(["lose", "maintain", "gain"], {
    required_error: "Please select your goal.",
  }),
});

const activityMultipliers = {
  sedentary: 1.2, // Little to no exercise
  light: 1.375, // Light exercise/sports 1-3 days/week
  moderate: 1.55, // Moderate exercise/sports 3-5 days/week
  active: 1.725, // Hard exercise/sports 6-7 days/week
  very_active: 1.9, // Very hard exercise & physical job or training twice a day
};

const goalAdjustments = {
  lose: 0.8, // 20% calorie deficit
  maintain: 1, // No adjustment
  gain: 1.15, // 15% calorie surplus
};

const CalorieCalculator = () => {
  const [calorieResults, setCalorieResults] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      age: 30,
      weight: 70,
      height: 170,
      activityLevel: "moderate",
      goal: "maintain",
    },
  });

  function calculateCalories(data) {
    let bmr;

    // Mifflin-St Jeor Equation
    if (data.gender === "male") {
      bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
    } else {
      bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
    }

    // Factor in activity level
    const tdee = bmr * activityMultipliers[data.activityLevel];

    // Adjust based on goal
    const adjustedCalories = tdee * goalAdjustments[data.goal];

    // Calculate macros (sample distribution: 30% protein, 40% carbs, 30% fat)
    let proteinPercentage, carbPercentage, fatPercentage;

    switch (data.goal) {
      case "lose":
        proteinPercentage = 0.35; // Higher protein for satiety and muscle retention
        carbPercentage = 0.35;
        fatPercentage = 0.3;
        break;
      case "gain":
        proteinPercentage = 0.3;
        carbPercentage = 0.45; // More carbs for muscle glycogen and energy
        fatPercentage = 0.25;
        break;
      default: // maintain
        proteinPercentage = 0.3;
        carbPercentage = 0.4;
        fatPercentage = 0.3;
    }

    const protein = Math.round((adjustedCalories * proteinPercentage) / 4); // 4 calories per gram
    const carbs = Math.round((adjustedCalories * carbPercentage) / 4); // 4 calories per gram
    const fat = Math.round((adjustedCalories * fatPercentage) / 9); // 9 calories per gram

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      adjustedCalories: Math.round(adjustedCalories),
      protein,
      carbs,
      fat,
    };
  }

  function onSubmit(data) {
    const results = calculateCalories(data);
    setCalorieResults(results);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Required for basal metabolic rate calculation
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age (years)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                      <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="very_active">Very Active (intense exercise daily)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lose">Weight Loss</SelectItem>
                      <SelectItem value="maintain">Maintenance</SelectItem>
                      <SelectItem value="gain">Muscle Gain</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">Calculate Calories</Button>
        </form>
      </Form>

      {calorieResults && (
        <div className="mt-8 p-6 bg-gymmawy-dark/10 rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Your Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">Daily Calories</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.adjustedCalories}</p>
              <p className="text-xs text-gymmawy-gray mt-1">calories/day</p>
            </div>
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.protein}g</p>
              <p className="text-xs text-gymmawy-gray mt-1">{Math.round(calorieResults.protein * 4)} calories</p>
            </div>
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbohydrates</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.carbs}g</p>
              <p className="text-xs text-gymmawy-gray mt-1">{Math.round(calorieResults.carbs * 4)} calories</p>
            </div>
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.fat}g</p>
              <p className="text-xs text-gymmawy-gray mt-1">{Math.round(calorieResults.fat * 9)} calories</p>
            </div>
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">BMR</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.bmr}</p>
              <p className="text-xs text-gymmawy-gray mt-1">Basal Metabolic Rate</p>
            </div>
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <p className="text-xs text-gymmawy-gray uppercase font-semibold">TDEE</p>
              <p className="text-2xl font-bold text-primary">{calorieResults.tdee}</p>
              <p className="text-xs text-gymmawy-gray mt-1">Total Daily Energy</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
