import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MaintenancePlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Maintenance Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A balanced nutrition plan designed to maintain your current body composition while supporting
          performance and recovery. Perfect for those who have reached their goals and want to maintain their results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">2400-2600</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">170g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">250g</p>
            <p className="text-sm text-gymmawy-gray">40% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">75g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4">
          This maintenance meal plan is designed for individuals who have reached their fitness goals and want to maintain their current body composition. The plan focuses on balanced macronutrients, nutrient timing, and sustainable eating habits to support long-term success while still providing adequate nutrition for performance and recovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Balanced macronutrient distribution for optimal hormonal health</li>
              <li>Sufficient protein to maintain lean muscle mass</li>
              <li>Strategic carbohydrate intake for energy and performance</li>
              <li>Adequate healthy fats for hormonal function</li>
              <li>Focus on whole foods and micronutrient density</li>
              <li>Flexible structure to accommodate individual preferences</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Those who have reached their body composition goals</li>
              <li>Individuals looking to sustain results long-term</li>
              <li>Active individuals who want to support training without gaining or losing weight</li>
              <li>Those seeking nutritional balance after a strict cutting or bulking phase</li>
              <li>Anyone looking for a sustainable, healthy eating approach</li>
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
                  <CardDescription>Training Day - Full Body</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>2 whole eggs + 2 egg whites, scrambled</li>
                      <li>1/2 cup oatmeal with 1 tbsp honey</li>
                      <li>1 cup mixed berries</li>
                      <li>Black coffee or green tea</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 30g protein | 45g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt (1 cup)</li>
                      <li>1 tbsp honey</li>
                      <li>1/4 cup granola</li>
                      <li>1 small apple</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">350 calories | 25g protein | 40g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz grilled chicken breast</li>
                      <li>1 cup quinoa</li>
                      <li>2 cups mixed green salad</li>
                      <li>1 tbsp olive oil and vinegar dressing</li>
                      <li>1/4 avocado</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 45g protein | 45g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 banana</li>
                      <li>1 scoop whey protein with water</li>
                      <li>1 tbsp natural peanut butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">300 calories | 25g protein | 30g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz salmon fillet</li>
                      <li>1 medium sweet potato</li>
                      <li>1.5 cups roasted broccoli and cauliflower</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>Fresh herbs and lemon</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 35g protein | 40g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (9:00 PM - Optional)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Casein protein shake (1 scoop)</li>
                      <li>1 tbsp almond butter</li>
                      <li>1/2 cup unsweetened almond milk</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">220 calories | 25g protein | 5g carbs | 10g fat</p>
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
                      <p className="text-2xl font-bold text-primary">2420</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">185g</p>
                      <p className="text-xs text-gymmawy-gray">31% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">205g</p>
                      <p className="text-xs text-gymmawy-gray">34% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">88g</p>
                      <p className="text-xs text-gymmawy-gray">33% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips for Day 1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Hydration</h3>
                    <p className="text-gymmawy-gray">Aim for 3 liters (100 oz) of water throughout the day, with additional intake around your workout.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Meal Timing</h3>
                    <p className="text-gymmawy-gray">Space your meals 3-4 hours apart to maintain steady energy levels and promote optimal nutrient absorption.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Workout Nutrition</h3>
                    <p className="text-gymmawy-gray">The pre-workout meal provides quick-digesting carbs for energy, while the higher protein dinner supports overnight recovery.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Substitutions</h3>
                    <p className="text-gymmawy-gray">Feel free to swap proteins (chicken for fish, tofu for meat) or carb sources (rice for quinoa) while maintaining similar macros.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day2">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 2 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Placeholder for days 3-7, similar to day2 */}
        <TabsContent value="day3">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 3 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="day4">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 4 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="day5">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 5 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="day6">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 6 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="day7">
          <div className="flex justify-center items-center p-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>Day 7 Coming Soon</CardTitle>
                <CardDescription>We're currently finalizing the details for the rest of the week's meal plan.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gymmawy-gray">
                  We're working on providing comprehensive meal plans for the entire week. Check back soon for updates!
                  In the meantime, you can use Day 1 as a template and make substitutions with similar macronutrient profiles.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/nutrition">Back to Nutrition Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Maintenance Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Monitoring Progress</h3>
            <p className="text-gymmawy-gray mb-4">
              Track your weight weekly and take monthly measurements to ensure you're maintaining. If you notice consistent changes in either direction, adjust your calories by 100-200 per day.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Calorie Cycling</h3>
            <p className="text-gymmawy-gray">
              Consider eating more calories on training days and slightly fewer on rest days to match your energy output and improve nutrient partitioning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Meal Flexibility</h3>
            <p className="text-gymmawy-gray mb-4">
              The maintenance phase allows more flexibility - aim to hit your daily protein target and stay within 5-10% of your calorie goal, but don't stress about perfect adherence every day.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Listen to Your Body</h3>
            <p className="text-gymmawy-gray">
              Pay attention to hunger cues, energy levels, and performance. Adjust meal timing and composition based on how your body responds to best support your lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link to="/nutrition" onClick={() => window.scrollTo(0, 0)}>Back to Nutrition</Link>
        </Button>
        <Button asChild>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Get Personalized Plan</Link>
        </Button>
      </div>
    </div>
  );
};

export default MaintenancePlan; 