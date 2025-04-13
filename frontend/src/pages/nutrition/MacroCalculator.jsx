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
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  calories: z.coerce
    .number()
    .min(1000, { message: "Daily calories must be at least 1000" })
    .max(5000, { message: "Daily calories must be less than 5000" }),
  goal: z.enum(["weight_loss", "maintenance", "muscle_gain"], {
    required_error: "Please select your goal.",
  }),
  dietType: z.enum(["balanced", "low_carb", "high_carb", "keto", "custom"], {
    required_error: "Please select a diet type.",
  }),
  proteinPercentage: z.coerce
    .number()
    .min(10, { message: "Protein must be at least 10%" })
    .max(60, { message: "Protein must be less than 60%" })
    .optional(),
  carbsPercentage: z.coerce
    .number()
    .min(5, { message: "Carbs must be at least 5%" })
    .max(70, { message: "Carbs must be less than 70%" })
    .optional(),
  fatPercentage: z.coerce
    .number()
    .min(10, { message: "Fat must be at least 10%" })
    .max(60, { message: "Fat must be less than 60%" })
    .optional(),
});

// Default macro distributions based on goals and diet types
const macroDistributions = {
  weight_loss: {
    balanced: { protein: 35, carbs: 35, fat: 30 },
    low_carb: { protein: 40, carbs: 20, fat: 40 },
    high_carb: { protein: 30, carbs: 50, fat: 20 },
    keto: { protein: 30, carbs: 5, fat: 65 },
  },
  maintenance: {
    balanced: { protein: 30, carbs: 40, fat: 30 },
    low_carb: { protein: 35, carbs: 25, fat: 40 },
    high_carb: { protein: 25, carbs: 55, fat: 20 },
    keto: { protein: 25, carbs: 5, fat: 70 },
  },
  muscle_gain: {
    balanced: { protein: 30, carbs: 45, fat: 25 },
    low_carb: { protein: 35, carbs: 30, fat: 35 },
    high_carb: { protein: 25, carbs: 60, fat: 15 },
    keto: { protein: 30, carbs: 10, fat: 60 },
  },
};

const MacroCalculator = () => {
  const [macroResults, setMacroResults] = useState(null);
  const [customMacros, setCustomMacros] = useState({
    protein: 30,
    carbs: 40,
    fat: 30,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      calories: 2000,
      goal: "maintenance",
      dietType: "balanced",
      proteinPercentage: 30,
      carbsPercentage: 40,
      fatPercentage: 30,
    },
  });

  const watchDietType = form.watch("dietType");
  const watchGoal = form.watch("goal");

  // Update custom macro sliders when diet type or goal changes (if not on custom)
  React.useEffect(() => {
    if (watchDietType !== "custom" && macroDistributions[watchGoal] && macroDistributions[watchGoal][watchDietType]) {
      const { protein, carbs, fat } = macroDistributions[watchGoal][watchDietType];
      setCustomMacros({ protein, carbs, fat });
      form.setValue("proteinPercentage", protein);
      form.setValue("carbsPercentage", carbs);
      form.setValue("fatPercentage", fat);
    }
  }, [watchDietType, watchGoal, form]);

  function calculateMacros(data) {
    let proteinPercent, carbsPercent, fatPercent;

    if (data.dietType === "custom") {
      // Use the custom percentages
      proteinPercent = data.proteinPercentage / 100;
      carbsPercent = data.carbsPercentage / 100;
      fatPercent = data.fatPercentage / 100;
    } else {
      // Use the predefined distributions
      const distribution = macroDistributions[data.goal][data.dietType];
      proteinPercent = distribution.protein / 100;
      carbsPercent = distribution.carbs / 100;
      fatPercent = distribution.fat / 100;
    }

    // Calculate grams of each macronutrient
    const proteinGrams = Math.round((data.calories * proteinPercent) / 4); // 4 calories per gram
    const carbsGrams = Math.round((data.calories * carbsPercent) / 4); // 4 calories per gram
    const fatGrams = Math.round((data.calories * fatPercent) / 9); // 9 calories per gram

    // Calculate calories from each macronutrient
    const proteinCalories = proteinGrams * 4;
    const carbsCalories = carbsGrams * 4;
    const fatCalories = fatGrams * 9;

    // Total calories from macros (may be slightly different due to rounding)
    const totalCalories = proteinCalories + carbsCalories + fatCalories;

    return {
      calories: data.calories,
      protein: {
        grams: proteinGrams,
        calories: proteinCalories,
        percentage: Math.round(proteinPercent * 100),
      },
      carbs: {
        grams: carbsGrams,
        calories: carbsCalories,
        percentage: Math.round(carbsPercent * 100),
      },
      fat: {
        grams: fatGrams,
        calories: fatCalories,
        percentage: Math.round(fatPercent * 100),
      },
      totalCalories,
    };
  }

  function handleProteinChange(value) {
    const protein = value[0];
    let carbs = customMacros.carbs;
    let fat = customMacros.fat;

    // Adjust other macros to ensure they add up to 100%
    const total = protein + carbs + fat;
    if (total !== 100) {
      const difference = 100 - total;
      // Distribute the difference proportionally between carbs and fat
      const carbsRatio = carbs / (carbs + fat);
      const fatRatio = fat / (carbs + fat);

      carbs = Math.round(carbs + difference * carbsRatio);
      fat = Math.round(fat + difference * fatRatio);

      // Ensure minimum values
      if (carbs < 5) carbs = 5;
      if (fat < 10) fat = 10;

      // Recalculate to ensure 100%
      const newTotal = protein + carbs + fat;
      if (newTotal !== 100) {
        const newDifference = 100 - newTotal;
        fat = fat + newDifference;
      }
    }

    setCustomMacros({ protein, carbs, fat });
    form.setValue("proteinPercentage", protein);
    form.setValue("carbsPercentage", carbs);
    form.setValue("fatPercentage", fat);
  }

  function handleCarbsChange(value) {
    const carbs = value[0];
    let protein = customMacros.protein;
    let fat = customMacros.fat;

    // Adjust other macros to ensure they add up to 100%
    const total = protein + carbs + fat;
    if (total !== 100) {
      const difference = 100 - total;
      // Distribute the difference proportionally between protein and fat
      const proteinRatio = protein / (protein + fat);
      const fatRatio = fat / (protein + fat);

      protein = Math.round(protein + difference * proteinRatio);
      fat = Math.round(fat + difference * fatRatio);

      // Ensure minimum values
      if (protein < 10) protein = 10;
      if (fat < 10) fat = 10;

      // Recalculate to ensure 100%
      const newTotal = protein + carbs + fat;
      if (newTotal !== 100) {
        const newDifference = 100 - newTotal;
        fat = fat + newDifference;
      }
    }

    setCustomMacros({ protein, carbs, fat });
    form.setValue("proteinPercentage", protein);
    form.setValue("carbsPercentage", carbs);
    form.setValue("fatPercentage", fat);
  }

  function handleFatChange(value) {
    const fat = value[0];
    let protein = customMacros.protein;
    let carbs = customMacros.carbs;

    // Adjust other macros to ensure they add up to 100%
    const total = protein + carbs + fat;
    if (total !== 100) {
      const difference = 100 - total;
      // Distribute the difference proportionally between protein and carbs
      const proteinRatio = protein / (protein + carbs);
      const carbsRatio = carbs / (protein + carbs);

      protein = Math.round(protein + difference * proteinRatio);
      carbs = Math.round(carbs + difference * carbsRatio);

      // Ensure minimum values
      if (protein < 10) protein = 10;
      if (carbs < 5) carbs = 5;

      // Recalculate to ensure 100%
      const newTotal = protein + carbs + fat;
      if (newTotal !== 100) {
        const newDifference = 100 - newTotal;
        carbs = carbs + newDifference;
      }
    }

    setCustomMacros({ protein, carbs, fat });
    form.setValue("proteinPercentage", protein);
    form.setValue("carbsPercentage", carbs);
    form.setValue("fatPercentage", fat);
  }

  function onSubmit(data) {
    const results = calculateMacros(data);
    setMacroResults(results);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Calories</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your total daily caloric intake
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitness Goal</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weight_loss">Weight Loss</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This affects your recommended macro distribution
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietType"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Diet Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select diet type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="low_carb">Low Carb</SelectItem>
                      <SelectItem value="high_carb">High Carb</SelectItem>
                      <SelectItem value="keto">Ketogenic</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select a preset or customize your own macronutrient ratio
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {watchDietType === "custom" && (
            <div className="bg-gymmawy-dark/5 p-6 rounded-lg mt-6 space-y-6">
              <h3 className="text-lg font-semibold text-primary">Custom Macronutrient Ratio</h3>
              <p className="text-sm text-gymmawy-gray">Adjust the sliders to set your desired macronutrient percentages. Total will always equal 100%.</p>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Protein: {customMacros.protein}%</label>
                    <span className="text-xs text-gymmawy-gray">{Math.round((form.getValues("calories") * customMacros.protein / 100) / 4)}g</span>
                  </div>
                  <Slider
                    value={[customMacros.protein]}
                    min={10}
                    max={60}
                    step={1}
                    className="bg-primary/20"
                    onValueChange={handleProteinChange}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Carbohydrates: {customMacros.carbs}%</label>
                    <span className="text-xs text-gymmawy-gray">{Math.round((form.getValues("calories") * customMacros.carbs / 100) / 4)}g</span>
                  </div>
                  <Slider
                    value={[customMacros.carbs]}
                    min={5}
                    max={70}
                    step={1}
                    className="bg-primary/20"
                    onValueChange={handleCarbsChange}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Fat: {customMacros.fat}%</label>
                    <span className="text-xs text-gymmawy-gray">{Math.round((form.getValues("calories") * customMacros.fat / 100) / 9)}g</span>
                  </div>
                  <Slider
                    value={[customMacros.fat]}
                    min={10}
                    max={60}
                    step={1}
                    className="bg-primary/20"
                    onValueChange={handleFatChange}
                  />
                </div>

                <div className="flex justify-between items-center text-sm font-medium pt-2 border-t border-gymmawy-dark/10">
                  <span>Total:</span>
                  <span>{customMacros.protein + customMacros.carbs + customMacros.fat}%</span>
                </div>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full">Calculate Macros</Button>
        </form>
      </Form>

      {macroResults && (
        <div className="mt-8 bg-gymmawy-dark/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Your Macro Breakdown</h3>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">{macroResults.protein.percentage}%</span>
              </div>
              <p className="text-sm font-semibold">Protein</p>
              <p className="text-2xl font-bold text-primary mt-1">{macroResults.protein.grams}g</p>
              <p className="text-xs text-gymmawy-gray">{macroResults.protein.calories} calories</p>
            </div>

            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">{macroResults.carbs.percentage}%</span>
              </div>
              <p className="text-sm font-semibold">Carbs</p>
              <p className="text-2xl font-bold text-primary mt-1">{macroResults.carbs.grams}g</p>
              <p className="text-xs text-gymmawy-gray">{macroResults.carbs.calories} calories</p>
            </div>

            <div className="bg-gymmawy-dark/20 p-4 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-primary">{macroResults.fat.percentage}%</span>
              </div>
              <p className="text-sm font-semibold">Fat</p>
              <p className="text-2xl font-bold text-primary mt-1">{macroResults.fat.grams}g</p>
              <p className="text-xs text-gymmawy-gray">{macroResults.fat.calories} calories</p>
            </div>
          </div>

          <div className="bg-gymmawy-dark/5 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Daily Targets</h4>
            <p className="text-sm text-gymmawy-gray mb-1">Total Calories: <span className="font-medium text-primary">{macroResults.calories} kcal</span></p>
            <p className="text-sm text-gymmawy-gray">For optimal results, try to stay within 5% of these targets each day.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacroCalculator;
