import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FatLossMealPlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Fat Loss Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A scientifically-backed meal plan designed for sustainable weight loss while maintaining high energy levels and promoting satiety.
          This plan emphasizes high protein, moderate carbs, and strategic fat intake to support your workouts and recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">1800-2000</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">180g</p>
            <p className="text-sm text-gymmawy-gray">40% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">150g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">60g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4">
          This fat loss meal plan is strategically designed to create a moderate caloric deficit while providing optimal nutrition for recovery and muscle preservation. The high protein content helps maintain muscle mass during weight loss and increases satiety, while the carbohydrates are timed to fuel your workouts and support recovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Sustainable caloric deficit for consistent fat loss</li>
              <li>High protein intake to preserve muscle mass</li>
              <li>Strategic carb timing for workout performance</li>
              <li>Includes healthy fats for hormone production</li>
              <li>Focus on nutrient-dense whole foods for satiety</li>
              <li>Flexible structure to accommodate preferences</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>People looking to lose body fat while maintaining muscle</li>
              <li>Active individuals who still want to perform well in workouts</li>
              <li>Those who have hit a weight loss plateau</li>
              <li>Anyone seeking a sustainable approach to fat loss</li>
              <li>Intermediate fitness enthusiasts ready for a structured approach</li>
            </ul>
          </div>
        </div>
      </div>

      <Tabs defaultValue="day1" className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-primary">7-Day Meal Plan</h2>
        <TabsList className="flex flex-wrap gap-2 mb-6">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
          <TabsTrigger value="day4">Day 4</TabsTrigger>
          <TabsTrigger value="day5">Day 5</TabsTrigger>
          <TabsTrigger value="day6">Day 6</TabsTrigger>
          <TabsTrigger value="day7">Day 7</TabsTrigger>
        </TabsList>

        <TabsContent value="day1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 1 Meals</CardTitle>
                  <CardDescription>Training Day - Lower Body Focus</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>3 egg whites + 1 whole egg scrambled</li>
                      <li>1/2 cup oatmeal with berries</li>
                      <li>1 tablespoon almond butter</li>
                      <li>Black coffee or green tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">450 calories | 30g protein | 40g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt (6 oz)</li>
                      <li>1 tablespoon honey</li>
                      <li>1/4 cup blueberries</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">200 calories | 20g protein | 20g carbs | 2g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz grilled chicken breast</li>
                      <li>1 cup brown rice</li>
                      <li>1 cup roasted vegetables</li>
                      <li>1 tablespoon olive oil for cooking</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 40g protein | 45g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 apple</li>
                      <li>1 scoop whey protein with water</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">200 calories | 25g protein | 20g carbs | 1g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz salmon fillet</li>
                      <li>1 cup steamed broccoli</li>
                      <li>1 small sweet potato</li>
                      <li>Mixed green salad with 1 tbsp vinaigrette</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 40g protein | 25g carbs | 25g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (Optional)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Casein protein shake or cottage cheese (1/2 cup)</li>
                      <li>1/4 cup mixed berries</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">150 calories | 25g protein | 5g carbs | 2g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 1</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">1900</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">180g</p>
                      <p className="text-xs text-gymmawy-gray">38% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">155g</p>
                      <p className="text-xs text-gymmawy-gray">33% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">60g</p>
                      <p className="text-xs text-gymmawy-gray">29% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workout Plan</CardTitle>
                  <CardDescription>Paired with Day 1 nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Lower Body Strength + HIIT</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Warm-up:</span> 5 min light cardio, dynamic stretches</li>
                    <li><span className="font-medium">Main workout:</span> Barbell squats, Romanian deadlifts, walking lunges, leg press (3-4 sets of 8-12 reps)</li>
                    <li><span className="font-medium">HIIT finisher:</span> 10 minutes of 30 sec sprint, 30 sec rest intervals</li>
                    <li><span className="font-medium">Cool down:</span> 5 min light cardio, static stretches</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">Calories in this meal plan are optimized for workout performance while maintaining a caloric deficit. Carbs are slightly higher on training days to fuel workouts.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hydration & Supplements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Drink 3-4 liters of water throughout the day</li>
                    <li>Multivitamin with breakfast</li>
                    <li>Fish oil (if not consuming fatty fish that day)</li>
                    <li>Optional: Whey protein (as included in plan)</li>
                    <li>Optional: Casein protein (as included in plan)</li>
                    <li>Optional: Pre-workout (if needed for training)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 2 Meals</CardTitle>
                  <CardDescription>Rest Day - Recovery Focus</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>2 whole eggs + 1 egg white, omelet with spinach and mushrooms</li>
                      <li>1/4 avocado</li>
                      <li>1 slice whole grain toast</li>
                      <li>Black coffee or herbal tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">420 calories | 25g protein | 20g carbs | 25g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Protein smoothie: 1 scoop whey protein</li>
                      <li>1 cup unsweetened almond milk</li>
                      <li>1/2 cup berries</li>
                      <li>1 tbsp chia seeds</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">230 calories | 24g protein | 12g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz wild-caught tuna steak</li>
                      <li>Large green salad with mixed vegetables</li>
                      <li>1/2 cup quinoa</li>
                      <li>2 tbsp olive oil and lemon dressing</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">450 calories | 35g protein | 25g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Afternoon Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 apple</li>
                      <li>2 tbsp natural almond butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 7g protein | 25g carbs | 14g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz grilled chicken thighs (skinless)</li>
                      <li>2 cups roasted vegetables (brussels sprouts, carrots, onions)</li>
                      <li>1/2 small sweet potato</li>
                      <li>1 tbsp olive oil for cooking</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">490 calories | 42g protein | 25g carbs | 22g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (9:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1/2 cup cottage cheese</li>
                      <li>2 tbsp pumpkin seeds</li>
                      <li>Cinnamon (optional)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">150 calories | 15g protein | 4g carbs | 8g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 2</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">1990</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">148g</p>
                      <p className="text-xs text-gymmawy-gray">30% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">111g</p>
                      <p className="text-xs text-gymmawy-gray">22% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">99g</p>
                      <p className="text-xs text-gymmawy-gray">48% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rest Day Plan</CardTitle>
                  <CardDescription>Active recovery recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Light Activity</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Morning:</span> 20-30 minute walk to increase blood flow</li>
                    <li><span className="font-medium">Mobility work:</span> 15-20 minutes of stretching and foam rolling, focusing on lower body</li>
                    <li><span className="font-medium">Evening:</span> Light yoga or gentle stretching for recovery</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">On rest days, we reduce carbohydrate intake since energy demands are lower, while maintaining protein intake for recovery and slightly increasing healthy fats for satiety and hormonal health.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rest Day Nutrition Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Higher fat intake to support hormone production during recovery</li>
                    <li>Steady protein intake spread throughout the day for muscle repair</li>
                    <li>Lower carbohydrate intake focused around morning and midday</li>
                    <li>Increase anti-inflammatory foods (fatty fish, berries, turmeric)</li>
                    <li>Focus on hydration and electrolytes for recovery</li>
                    <li>Consider magnesium-rich foods to support muscle relaxation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 3 Meals</CardTitle>
                  <CardDescription>Upper Body Training Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 cup Greek yogurt (0% fat)</li>
                      <li>1/3 cup granola (low sugar)</li>
                      <li>1 tablespoon honey</li>
                      <li>1/2 cup mixed berries</li>
                      <li>Black coffee or green tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">400 calories | 30g protein | 50g carbs | 7g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 rice cake</li>
                      <li>1 tablespoon natural peanut butter</li>
                      <li>1 medium banana</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">220 calories | 6g protein | 35g carbs | 7g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz lean turkey breast</li>
                      <li>2 slices whole grain bread</li>
                      <li>Lettuce, tomato, mustard</li>
                      <li>1 oz baked sweet potato chips</li>
                      <li>Side salad with 1 tbsp olive oil dressing</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">480 calories | 45g protein | 40g carbs | 14g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium apple</li>
                      <li>1 scoop whey protein with water</li>
                      <li>1/4 cup dried cranberries</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 25g protein | 35g carbs | 1g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Post-Workout (6:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 scoop whey protein with water</li>
                      <li>1 banana</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">180 calories | 25g protein | 27g carbs | 1g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz cod fillet</li>
                      <li>1 cup quinoa</li>
                      <li>1 cup roasted asparagus</li>
                      <li>1 tbsp olive oil and herbs for cooking</li>
                      <li>Lemon wedge</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">450 calories | 40g protein | 40g carbs | 14g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 3</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">1980</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">171g</p>
                      <p className="text-xs text-gymmawy-gray">35% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">227g</p>
                      <p className="text-xs text-gymmawy-gray">46% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">44g</p>
                      <p className="text-xs text-gymmawy-gray">19% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workout Plan</CardTitle>
                  <CardDescription>Upper Body Strength Focus</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Upper Body Training Session</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Warm-up:</span> 5 min light rowing, arm circles, band pull-aparts</li>
                    <li><span className="font-medium">Main workout:</span> Bench press, bent-over rows, overhead press, pull-ups/assisted pull-ups, incline dumbbell press, face pulls (3-4 sets of 8-12 reps)</li>
                    <li><span className="font-medium">Finisher:</span> Superset of bicep curls and tricep pushdowns (3 sets of 15 reps each)</li>
                    <li><span className="font-medium">Cool down:</span> 5 min light cardio, upper body stretches</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">On upper body training days, carbohydrates are increased to fuel the workout and replenish glycogen in the trained muscles. Protein intake is strategically timed around the workout window.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upper Body Training Day Nutrition Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Higher overall carbohydrate intake focused around the workout</li>
                    <li>Fast-digesting protein and carbs immediately post-workout</li>
                    <li>Lower fat intake, especially pre-workout</li>
                    <li>Emphasis on nutrient timing to maximize training performance</li>
                    <li>Include branch chain amino acids (from food or supplements) around workout</li>
                    <li>Focus on thorough hydration, especially during and after training</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 4 Meals</CardTitle>
                  <CardDescription>Active Recovery Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>3-egg white, 1 whole egg veggie omelet</li>
                      <li>1/4 avocado</li>
                      <li>1/2 cup mixed berries</li>
                      <li>Green tea or black coffee</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">320 calories | 24g protein | 10g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning (10:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 apple</li>
                      <li>1 string cheese</li>
                      <li>10 almonds</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">230 calories | 8g protein | 25g carbs | 12g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Large mixed green salad with:</li>
                      <li>4 oz grilled chicken breast</li>
                      <li>1/4 cup chickpeas</li>
                      <li>1/4 avocado</li>
                      <li>Assorted vegetables (cucumber, bell pepper, tomato)</li>
                      <li>1 tbsp olive oil and vinegar dressing</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">425 calories | 35g protein | 20g carbs | 22g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Afternoon Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 cup Greek yogurt (2%)</li>
                      <li>1 tbsp chia seeds</li>
                      <li>Cinnamon (to taste)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">200 calories | 22g protein | 9g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz baked cod with herbs and lemon</li>
                      <li>1 cup roasted brussels sprouts</li>
                      <li>1/2 cup brown rice</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">440 calories | 35g protein | 35g carbs | 16g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening (8:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 cup herbal tea</li>
                      <li>1 oz dark chocolate (85% cacao)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">170 calories | 2g protein | 8g carbs | 14g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 4</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">1785</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">126g</p>
                      <p className="text-xs text-gymmawy-gray">28% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">107g</p>
                      <p className="text-xs text-gymmawy-gray">24% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">92g</p>
                      <p className="text-xs text-gymmawy-gray">48% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Recovery Plan</CardTitle>
                  <CardDescription>Light activity focus</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Mobility & Recovery Focus</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Morning:</span> 20-30 minute brisk walk outdoors</li>
                    <li><span className="font-medium">Midday:</span> 15-20 minutes foam rolling and stretching</li>
                    <li><span className="font-medium">Evening:</span> 20 minutes yoga or mobility work focusing on tight areas</li>
                    <li><span className="font-medium">Optional:</span> 10-15 minutes light swimming if available</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">Active recovery promotes blood flow to muscles without causing additional stress, enhancing recovery from previous training sessions while maintaining an active metabolism.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recovery Day Nutrition Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Slightly reduced overall calories on non-training days</li>
                    <li>Higher healthy fat intake to promote hormone balance</li>
                    <li>Emphasis on anti-inflammatory foods (fatty fish, berries, leafy greens)</li>
                    <li>Moderate protein intake to support ongoing tissue repair</li>
                    <li>Increased focus on vegetables and micronutrients</li>
                    <li>Hydration focus with electrolytes (sodium, potassium, magnesium)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 5 Meals</CardTitle>
                  <CardDescription>Lower Body HIIT Training Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (6:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>2/3 cup oatmeal (dry measure, cooked in water)</li>
                      <li>1 scoop whey protein powder mixed in</li>
                      <li>1 tbsp maple syrup</li>
                      <li>1/2 cup mixed berries</li>
                      <li>Coffee or tea (optional)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">410 calories | 30g protein | 55g carbs | 6g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (9:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium banana</li>
                      <li>1 rice cake</li>
                      <li>1 tbsp almond butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">210 calories | 5g protein | 30g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (12:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz grilled chicken breast</li>
                      <li>2/3 cup brown rice</li>
                      <li>1 cup mixed vegetables (stir-fried)</li>
                      <li>1 tbsp low-sodium teriyaki sauce</li>
                      <li>1 tsp olive oil (for cooking)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">430 calories | 40g protein | 42g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium apple</li>
                      <li>20g whey protein isolate mixed with water</li>
                      <li>5 rice crackers</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">240 calories | 22g protein | 35g carbs | 2g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Post-Workout (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 scoop whey protein isolate</li>
                      <li>1 medium banana</li>
                      <li>1 tbsp honey</li>
                      <li>Water or almond milk</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">230 calories | 25g protein | 30g carbs | 1g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (8:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz extra lean ground turkey</li>
                      <li>1 medium sweet potato</li>
                      <li>2 cups mixed green vegetables</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>Herbs and spices to taste</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">460 calories | 45g protein | 30g carbs | 18g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">1980</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">167g</p>
                      <p className="text-xs text-gymmawy-gray">34% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">222g</p>
                      <p className="text-xs text-gymmawy-gray">45% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">45g</p>
                      <p className="text-xs text-gymmawy-gray">21% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workout Plan</CardTitle>
                  <CardDescription>Lower Body HIIT Focus</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Lower Body HIIT Session</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Warm-up:</span> 5 min light cardio, dynamic leg stretches</li>
                    <li><span className="font-medium">Main workout:</span> Circuit of bodyweight squats, jump lunges, glute bridges, mountain climbers (40 sec work / 20 sec rest, 4 rounds)</li>
                    <li><span className="font-medium">Strength component:</span> Goblet squats, Romanian deadlifts, Bulgarian split squats (3 sets of 12-15 reps)</li>
                    <li><span className="font-medium">HIIT finisher:</span> 10-12 minutes of 30 sec sprint / 30 sec walk intervals</li>
                    <li><span className="font-medium">Cool down:</span> 5 min walking, lower body stretches</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">This high-intensity interval training session is strategically paired with higher carbohydrate intake, properly timed around the workout for optimal performance and recovery.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HIIT Day Nutrition Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Higher carbohydrate intake, particularly around workout times</li>
                    <li>Fast-digesting carbs pre and post-workout for energy and recovery</li>
                    <li>Emphasis on quality protein sources throughout the day</li>
                    <li>Lower fat intake, especially pre-workout for faster digestion</li>
                    <li>Strategic timing of nutrients: carbs mostly before/after workout</li>
                    <li>Focus on rapid rehydration post-HIIT session with electrolytes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 6 Meals</CardTitle>
                  <CardDescription>Upper Body Strength Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 whole egg + 3 egg whites, scrambled</li>
                      <li>2 slices Ezekiel bread, toasted</li>
                      <li>1/4 avocado, mashed on toast</li>
                      <li>1/2 cup fresh spinach (cooked with eggs)</li>
                      <li>Black coffee or tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">420 calories | 32g protein | 30g carbs | 18g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium apple</li>
                      <li>1 oz turkey jerky (low sodium)</li>
                      <li>1 string cheese</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">240 calories | 18g protein | 22g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz grilled chicken breast</li>
                      <li>1 cup brown rice and quinoa blend</li>
                      <li>1 cup roasted broccoli and cauliflower</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>Lemon and herbs for flavor</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">460 calories | 40g protein | 40g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 banana</li>
                      <li>2 rice cakes</li>
                      <li>1 tbsp honey</li>
                      <li>1 scoop whey protein with water</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">310 calories | 25g protein | 50g carbs | 1g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Post-Workout (6:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 scoop whey protein isolate</li>
                      <li>8 oz unsweetened almond milk</li>
                      <li>1 cup frozen berries</li>
                      <li>1 tbsp flaxseed meal</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 26g protein | 20g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz grilled sirloin steak (lean cut)</li>
                      <li>1 medium baked potato</li>
                      <li>2 cups mixed steamed vegetables</li>
                      <li>1 tbsp grass-fed butter (for potato)</li>
                      <li>Salt-free seasoning to taste</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">480 calories | 45g protein | 35g carbs | 16g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 6</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">2160</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">186g</p>
                      <p className="text-xs text-gymmawy-gray">34% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">197g</p>
                      <p className="text-xs text-gymmawy-gray">37% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">66g</p>
                      <p className="text-xs text-gymmawy-gray">29% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workout Plan</CardTitle>
                  <CardDescription>Upper Body Strength Focus</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Upper Body Strength Training</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Warm-up:</span> 5 min rowing machine, arm circles, scapular activations</li>
                    <li><span className="font-medium">Main workout:</span> Barbell bench press, weighted pull-ups, military press, bent-over rows, dips, lateral raises (4 sets of 6-8 reps)</li>
                    <li><span className="font-medium">Secondary:</span> Bicep curls, tricep extensions, face pulls (3 sets of 10-12 reps)</li>
                    <li><span className="font-medium">Core work:</span> Plank variations, hanging leg raises (3 sets)</li>
                    <li><span className="font-medium">Cool down:</span> 5 min light cardio, upper body stretches</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">This day is slightly higher in calories to support the intense strength training session, with an emphasis on protein for muscle repair and carbs for energy and recovery.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strength Day Nutrition Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Slight caloric increase on heavy lifting days for performance</li>
                    <li>Higher protein intake to support muscle protein synthesis</li>
                    <li>Balanced carbohydrate intake with emphasis around training</li>
                    <li>Inclusion of red meat for creatine, iron, and zinc</li>
                    <li>Strategic post-workout nutrition for optimal recovery</li>
                    <li>Emphasis on nutrient timing with faster digesting foods pre-workout</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray"><span className="font-medium">Note:</span> Despite this being a fat loss plan, we strategically increase calories slightly on strength days to maintain performance and preserve muscle tissue, while still maintaining a weekly caloric deficit.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Day 7 Meals</CardTitle>
                  <CardDescription>Flexible Refeed Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (8:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Whole grain pancakes (2-3 medium)</li>
                      <li>1/4 cup pure maple syrup</li>
                      <li>1 cup mixed berries</li>
                      <li>2 turkey breakfast sausages</li>
                      <li>Coffee or tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">520 calories | 20g protein | 85g carbs | 12g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning (10:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Protein smoothie with:</li>
                      <li>1 scoop protein powder</li>
                      <li>1 frozen banana</li>
                      <li>1 tbsp almond butter</li>
                      <li>8 oz almond milk</li>
                      <li>Ice cubes</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">310 calories | 25g protein | 30g carbs | 12g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium sweet potato, roasted</li>
                      <li>6 oz grilled salmon</li>
                      <li>1.5 cups roasted vegetables (bell peppers, zucchini, onions)</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>Fresh herbs and lemon</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">480 calories | 35g protein | 40g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Afternoon (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 medium apple</li>
                      <li>2 tbsp natural peanut butter</li>
                      <li>1 oz dark chocolate (70% or higher)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">340 calories | 8g protein | 30g carbs | 22g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz lean steak or choice protein</li>
                      <li>1 cup quinoa or brown rice</li>
                      <li>Large mixed vegetable salad</li>
                      <li>2 tbsp balsamic vinaigrette</li>
                      <li>1/4 avocado, sliced</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 40g protein | 45g carbs | 25g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Treat (8:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt parfait:</li>
                      <li>1 cup Greek yogurt</li>
                      <li>1/4 cup granola</li>
                      <li>1 tbsp honey</li>
                      <li>1/2 cup mixed berries</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">300 calories | 20g protein | 40g carbs | 7g fat</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Totals</CardTitle>
                  <CardDescription>Nutritional breakdown for Day 7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Total Calories</p>
                      <p className="text-2xl font-bold text-primary">2500</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">148g</p>
                      <p className="text-xs text-gymmawy-gray">24% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">270g</p>
                      <p className="text-xs text-gymmawy-gray">43% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">98g</p>
                      <p className="text-xs text-gymmawy-gray">33% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refeed Strategy</CardTitle>
                  <CardDescription>Benefits and approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-primary mb-2">Strategic Refeed Day</h3>
                  <p className="text-gymmawy-gray mb-4">A refeed day involves temporarily increasing calories (particularly from carbohydrates) after several days in a caloric deficit. This serves multiple purposes:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Replenishes glycogen stores depleted from training</li>
                    <li>Boosts leptin levels, which regulates hunger and metabolism</li>
                    <li>Provides psychological relief from dieting</li>
                    <li>Can help break through weight loss plateaus</li>
                    <li>Supports thyroid function and metabolic rate</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">This is NOT a "cheat day" - foods are still nutritious and portions controlled, just with higher carbohydrate intake and slightly more calories.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Overview</CardTitle>
                  <CardDescription>7-Day Plan Strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gymmawy-gray mb-4">This 7-day plan creates a sustainable weekly caloric deficit while:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Prioritizing protein throughout to preserve muscle mass</li>
                    <li>Strategically timing carbohydrates around training sessions</li>
                    <li>Including healthy fats for hormone function and satiety</li>
                    <li>Incorporating an intelligent refeed strategy on Day 7</li>
                    <li>Varying calories based on activity levels each day</li>
                    <li>Maintaining an overall caloric deficit of approximately 3500 calories/week (1 pound of fat loss)</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gymmawy-dark/10 rounded-lg">
                    <p className="text-gymmawy-gray text-sm">
                      <span className="font-semibold">Weekly averages:</span><br />
                      Calories: ~2000 per day<br />
                      Protein: ~160g per day (32%)<br />
                      Carbs: ~180g per day (36%)<br />
                      Fat: ~72g per day (32%)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-primary/10 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Fat Loss Journey?</h2>
            <p className="text-gymmawy-gray mb-6">
              Get the complete 7-day fat loss meal plan with grocery lists, meal prep guides, and custom adjustments for your specific calorie needs and food preferences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">Get Custom Meal Plan</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/nutrition">Explore Other Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src="/img/nutrition/meal-prep-2.jpg"
              alt="Fat loss meal prep"
              className="rounded-lg w-full h-auto"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FatLossMealPlan; 