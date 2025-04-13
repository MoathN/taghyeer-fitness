import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PerformancePlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Performance Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A high-energy nutrition plan designed specifically for athletes and those engaged in intense training.
          This plan provides optimal fuel for performance, supports recovery, and helps maximize training adaptations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">2800-3500</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">180g</p>
            <p className="text-sm text-gymmawy-gray">25% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">400g</p>
            <p className="text-sm text-gymmawy-gray">50% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">70g</p>
            <p className="text-sm text-gymmawy-gray">25% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4">
          This performance nutrition plan is designed to optimize athletic performance by providing adequate energy and nutrients to support intense training. The plan features a higher carbohydrate intake to fuel workouts, moderate protein for recovery and muscle maintenance, and sufficient healthy fats to support hormonal function and overall health. Meal timing is strategically planned around training sessions to maximize energy availability and enhance recovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Optimized energy levels for high-intensity training</li>
              <li>Enhanced glycogen replenishment for faster recovery</li>
              <li>Strategic nutrient timing around workouts</li>
              <li>Hydration protocols to maximize performance</li>
              <li>Sufficient micronutrients for immune system support</li>
              <li>Balanced macronutrient profile for long-term sustainability</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Competitive athletes in endurance or team sports</li>
              <li>CrossFit and HIIT training enthusiasts</li>
              <li>Individuals training multiple times per day</li>
              <li>Those preparing for athletic competitions</li>
              <li>Anyone with a physically demanding lifestyle</li>
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
                  <CardDescription>High-Intensity Training Day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Training Breakfast (6:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 cup oatmeal cooked with water</li>
                      <li>1 banana</li>
                      <li>1 tbsp honey</li>
                      <li>2 tbsp raisins</li>
                      <li>1 cup almond milk</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">450 calories | 12g protein | 90g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">During Training (7:00-8:30 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Sports drink (16 oz)</li>
                      <li>Water (32 oz)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">120 calories | 0g protein | 30g carbs | 0g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Post-Workout Meal (9:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Protein shake (2 scoops whey protein)</li>
                      <li>2 cups chocolate milk</li>
                      <li>1 large bagel with 1 tbsp jam</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">700 calories | 50g protein | 100g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (12:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>8 oz grilled chicken breast</li>
                      <li>2 cups brown rice</li>
                      <li>2 cups mixed vegetables</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>1 large apple</li>
                      <li>Water (16-24 oz)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">750 calories | 60g protein | 85g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Afternoon Snack (3:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt (1 cup)</li>
                      <li>1/4 cup granola</li>
                      <li>1 tbsp honey</li>
                      <li>1/4 cup mixed berries</li>
                      <li>Water (16 oz)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">350 calories | 20g protein | 50g carbs | 8g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (6:30 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>6 oz salmon fillet</li>
                      <li>1.5 cups sweet potato</li>
                      <li>2 cups steamed broccoli</li>
                      <li>1 tbsp olive oil (for cooking)</li>
                      <li>Mixed green salad with balsamic vinaigrette</li>
                      <li>Water (16-24 oz)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">650 calories | 40g protein | 70g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (9:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Casein protein shake (1 scoop)</li>
                      <li>1 cup almond milk</li>
                      <li>1 tbsp natural peanut butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 25g protein | 10g carbs | 12g fat</p>
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
                      <p className="text-2xl font-bold text-primary">3270</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">207g</p>
                      <p className="text-xs text-gymmawy-gray">25% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">435g</p>
                      <p className="text-xs text-gymmawy-gray">53% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">73g</p>
                      <p className="text-xs text-gymmawy-gray">22% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Nutrition Strategies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Training Nutrition</h3>
                    <p className="text-gymmawy-gray">Focus on easily digestible carbohydrates to top off glycogen stores and provide immediate energy. Keep protein and fat moderate to prevent digestive issues during training.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Intra-Workout Nutrition</h3>
                    <p className="text-gymmawy-gray">For sessions lasting over 60 minutes, sports drinks help maintain blood glucose levels and provide electrolytes lost through sweat.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Recovery Window</h3>
                    <p className="text-gymmawy-gray">The 30-60 minutes after training is crucial for glycogen replenishment and muscle repair. Aim for a 3:1 or 4:1 carb-to-protein ratio.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Hydration</h3>
                    <p className="text-gymmawy-gray">Aim for 3-4 liters of water daily, with additional fluid intake during and after training. Monitor urine color (pale yellow indicates proper hydration).</p>
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
        <h2 className="text-2xl font-bold mb-4 text-primary">Advanced Performance Nutrition Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Nutrient Timing</h3>
            <p className="text-gymmawy-gray mb-4">
              For optimal performance, distribute your carbohydrate intake throughout the day with higher amounts pre- and post-workout. Consume protein every 3-4 hours to maximize muscle protein synthesis and recovery.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Carbohydrate Periodization</h3>
            <p className="text-gymmawy-gray">
              Consider adjusting carbohydrate intake based on training demands - higher on intense training days, slightly lower on rest or light training days to enhance metabolic flexibility.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Competition Nutrition</h3>
            <p className="text-gymmawy-gray mb-4">
              For competition days, focus on familiar foods that you know work well for your body. Begin carbohydrate loading 48 hours before major events, and have a competition-day nutrition plan that includes pre-event, during-event, and recovery nutrition.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Supplement Considerations</h3>
            <p className="text-gymmawy-gray">
              Evidence-based supplements that may benefit performance include creatine monohydrate, caffeine, beta-alanine, and sodium bicarbonate. Always consult with a sports nutritionist or healthcare provider before beginning any supplement regimen.
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

export default PerformancePlan; 