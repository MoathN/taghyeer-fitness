import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MuscleGainPlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Muscle Gain Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A comprehensive nutrition plan designed to support muscle growth and strength development.
          This high-protein, calorie-dense meal plan provides the nutrients needed for intense training
          and optimal recovery while minimizing fat gain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">2800-3200</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">200g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">350g</p>
            <p className="text-sm text-gymmawy-gray">45% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">80g</p>
            <p className="text-sm text-gymmawy-gray">25% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4">
          This muscle gain meal plan is designed to provide a consistent caloric surplus with optimal macronutrient distribution to support muscle hypertrophy. With an emphasis on high-quality protein sources, complex carbohydrates, and nutrient timing, this plan will fuel your workouts and maximize your recovery for optimal muscle growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Sufficient caloric surplus for consistent muscle growth</li>
              <li>High protein intake for muscle protein synthesis</li>
              <li>Carb-timing strategies to fuel intense workouts</li>
              <li>Balanced fat intake for hormone optimization</li>
              <li>Nutrient-dense foods to support overall health</li>
              <li>Strategic meal timing around workouts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Individuals focused on building muscle mass</li>
              <li>Hard-gainers or those with fast metabolisms</li>
              <li>Strength athletes looking to increase size</li>
              <li>Those in a dedicated bulking phase</li>
              <li>Intermediate to advanced lifters with consistent training</li>
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
                  <CardDescription>Training Day - Push Focus</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 whole eggs scrambled</li>
                      <li>1 cup oatmeal with 1 tablespoon honey</li>
                      <li>1 medium banana</li>
                      <li>1 cup whole milk</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">750 calories | 45g protein | 75g carbs | 30g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Protein shake (2 scoops whey protein)</li>
                      <li>1 cup Greek yogurt</li>
                      <li>1/4 cup mixed nuts</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 50g protein | 20g carbs | 25g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>8 oz grilled chicken breast</li>
                      <li>2 cups brown rice</li>
                      <li>1 cup steamed broccoli</li>
                      <li>1 tablespoon olive oil</li>
                      <li>1 large apple</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">750 calories | 60g protein | 90g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 banana</li>
                      <li>1 scoop whey protein with water</li>
                      <li>1 rice cake with 1 tbsp peanut butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">350 calories | 30g protein | 40g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Post-Workout (6:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>2 scoops whey protein</li>
                      <li>1 cup orange juice</li>
                      <li>1 cup white rice</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 50g protein | 70g carbs | 2g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (8:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>10 oz salmon fillet</li>
                      <li>1 large sweet potato</li>
                      <li>2 cups roasted vegetables</li>
                      <li>Mixed green salad with 2 tbsp olive oil dressing</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">650 calories | 45g protein | 50g carbs | 30g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (10:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Casein protein shake (1 scoop)</li>
                      <li>1/4 cup cottage cheese</li>
                      <li>1 tablespoon natural peanut butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 35g protein | 5g carbs | 10g fat</p>
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
                      <p className="text-2xl font-bold text-primary">3000</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">315g</p>
                      <p className="text-xs text-gymmawy-gray">42% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">350g</p>
                      <p className="text-xs text-gymmawy-gray">46% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">122g</p>
                      <p className="text-xs text-gymmawy-gray">12% of calories</p>
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
                    <p className="text-gymmawy-gray">Aim for 1 gallon (3.8 liters) of water throughout the day, especially around workout time.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Workout Nutrition</h3>
                    <p className="text-gymmawy-gray">The pre-workout meal provides quick energy, while the post-workout meal focuses on rapid glycogen replenishment and protein synthesis.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Supplements</h3>
                    <p className="text-gymmawy-gray">Consider 5g of creatine monohydrate daily and a quality multivitamin to support your muscle-building efforts.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Meal Prep</h3>
                    <p className="text-gymmawy-gray">Prepare chicken, rice, and vegetables in bulk to save time while ensuring you meet your nutritional targets.</p>
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
        <h2 className="text-2xl font-bold mb-4 text-primary">Customization Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Adjusting Calories</h3>
            <p className="text-gymmawy-gray mb-4">
              If you're not gaining weight after 2 weeks on this plan, increase daily calories by 200-300. If gaining too much fat, decrease by 200 calories.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Food Substitutions</h3>
            <p className="text-gymmawy-gray">
              You can substitute proteins, carbs, and fats with equivalent options from the same category. For example, replace chicken with an equal amount of lean beef or fish, or rice with quinoa or potatoes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Meal Timing</h3>
            <p className="text-gymmawy-gray mb-4">
              While total daily intake is most important, timing protein and carbs around your workout can optimize results. Aim for protein every 3-4 hours.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Tracking Progress</h3>
            <p className="text-gymmawy-gray">
              Monitor weight changes weekly, take monthly progress photos, and track strength gains. Adjust your intake based on how your body responds over time.
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

export default MuscleGainPlan; 