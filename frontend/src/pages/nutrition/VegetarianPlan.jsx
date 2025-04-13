import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VegetarianPlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Vegetarian Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A nutrient-dense plant-based meal plan designed to support fitness goals without animal meat.
          This plan focuses on complete plant proteins, essential nutrients, and proper meal timing to
          fuel your workouts and optimize recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">2200-2400</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">140g</p>
            <p className="text-sm text-gymmawy-gray">25% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">280g</p>
            <p className="text-sm text-gymmawy-gray">50% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">65g</p>
            <p className="text-sm text-gymmawy-gray">25% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4">
          This vegetarian meal plan is designed to provide complete nutrition while supporting an active lifestyle. It emphasizes plant-based protein sources like legumes, tofu, tempeh, dairy, and eggs (for lacto-ovo vegetarians), along with complex carbohydrates, healthy fats, and plenty of micronutrient-rich fruits and vegetables. The plan includes strategies for ensuring adequate intake of key nutrients that can be challenging for vegetarians, such as iron, B12, zinc, and omega-3 fatty acids.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Balanced macronutrients for optimal performance</li>
              <li>Complete amino acid profile from varied protein sources</li>
              <li>Rich in fiber for digestive health and satiety</li>
              <li>Abundant micronutrients from whole plant foods</li>
              <li>Focused on iron-rich plant foods for energy levels</li>
              <li>Strategic supplementation recommendations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Vegetarians pursuing fitness goals</li>
              <li>Those transitioning to a plant-based diet</li>
              <li>Athletes looking to incorporate more plant foods</li>
              <li>Health-conscious individuals seeking balanced nutrition</li>
              <li>Those looking to reduce environmental impact of food choices</li>
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
                  <CardDescription>Training Day - Lower Body</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt parfait (1 cup Greek yogurt)</li>
                      <li>1/2 cup granola</li>
                      <li>1 tbsp ground flaxseed</li>
                      <li>1 cup mixed berries</li>
                      <li>1 tbsp honey</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 30g protein | 60g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 apple</li>
                      <li>1/4 cup almonds</li>
                      <li>1 string cheese (for lacto-vegetarians)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">300 calories | 12g protein | 25g carbs | 18g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Lentil and quinoa bowl:</li>
                      <li>1 cup cooked lentils</li>
                      <li>1/2 cup cooked quinoa</li>
                      <li>1 cup roasted vegetables (bell peppers, zucchini, onions)</li>
                      <li>1/4 avocado</li>
                      <li>2 tbsp tahini dressing</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 25g protein | 65g carbs | 20g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Pre-Workout Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Smoothie:</li>
                      <li>1 scoop plant protein powder</li>
                      <li>1 banana</li>
                      <li>1 cup almond milk</li>
                      <li>1 tbsp almond butter</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">350 calories | 25g protein | 40g carbs | 10g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Tofu stir-fry:</li>
                      <li>6 oz extra-firm tofu</li>
                      <li>2 cups stir-fried vegetables (broccoli, carrots, snap peas)</li>
                      <li>1 cup brown rice</li>
                      <li>2 tbsp stir-fry sauce</li>
                      <li>1 tbsp sesame seeds</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 30g protein | 70g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (9:00 PM - Optional)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1/2 cup cottage cheese (for lacto-vegetarians)</li>
                      <li>1 tbsp chia seeds</li>
                      <li>1/2 cup cherries</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">150 calories | 15g protein | 15g carbs | 3g fat</p>
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
                      <p className="text-2xl font-bold text-primary">2400</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">137g</p>
                      <p className="text-xs text-gymmawy-gray">23% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">275g</p>
                      <p className="text-xs text-gymmawy-gray">46% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">81g</p>
                      <p className="text-xs text-gymmawy-gray">30% of calories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Iron Sources</h3>
                    <p className="text-gymmawy-gray">Lentils, tofu, and quinoa provide plant-based iron. Pairing with vitamin C-rich foods (bell peppers, berries) enhances absorption.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Complete Proteins</h3>
                    <p className="text-gymmawy-gray">This day combines complementary proteins (lentils + quinoa, tofu + rice) to ensure all essential amino acids are obtained.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Omega-3 Fatty Acids</h3>
                    <p className="text-gymmawy-gray">Flaxseed and chia seeds provide plant-based omega-3s for anti-inflammatory benefits and overall health.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Calcium Sources</h3>
                    <p className="text-gymmawy-gray">Greek yogurt, cottage cheese, and tofu provide calcium for bone health and muscle function.</p>
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
        <h2 className="text-2xl font-bold mb-4 text-primary">Special Considerations for Vegetarians</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Protein Strategies</h3>
            <p className="text-gymmawy-gray mb-4">
              Focus on protein-dense plant foods at each meal. Combine complementary protein sources (grains + legumes) to ensure you're getting all essential amino acids. Consider adding a plant-based protein supplement if needed.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Iron Absorption</h3>
            <p className="text-gymmawy-gray">
              Non-heme iron from plant sources is less bioavailable than animal sources. Pair iron-rich foods with vitamin C to enhance absorption and consider cooking in cast iron cookware which can increase iron content of food.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended Supplements</h3>
            <p className="text-gymmawy-gray mb-4">
              Consider supplementing with vitamin B12 (especially for strict vegetarians), vitamin D, zinc, and algae-based omega-3s. Always consult with a healthcare provider before starting supplements.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-primary">Variety is Key</h3>
            <p className="text-gymmawy-gray">
              Eat a wide range of plant foods to ensure you're getting all necessary nutrients. Include foods from different color groups, various protein sources, and different types of whole grains and healthy fats.
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

export default VegetarianPlan; 