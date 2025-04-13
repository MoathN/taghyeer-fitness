import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BeginnersMealPlan = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Beginner's Meal Plan</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          A simple, nutritionally balanced meal plan designed specifically for fitness newcomers. This plan focuses on 
          establishing healthy eating habits, providing adequate energy for workouts, and introducing balanced macronutrient intake
          without overwhelming complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">2000-2500</p>
            <p className="text-sm text-gymmawy-gray">daily intake</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">150g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">200g</p>
            <p className="text-sm text-gymmawy-gray">40% of calories</p>
          </CardContent>
        </Card>
        <Card className="bg-gymmawy-dark/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gymmawy-gray uppercase">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">70g</p>
            <p className="text-sm text-gymmawy-gray">30% of calories</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gymmawy-dark/5 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Plan Overview</h2>
        <p className="mb-4 text-gymmawy-gray">
          This beginner-friendly meal plan is designed to establish a foundation of healthy eating habits while supporting your new 
          fitness routine. The plan emphasizes whole, nutrient-dense foods that are easy to prepare, with a balanced approach to 
          macronutrients. The calories are set at a moderate level to maintain energy for workouts without dramatic changes to your diet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Simple, easy-to-prepare meals with common ingredients</li>
              <li>Balanced macronutrients for steady energy throughout the day</li>
              <li>Adequate protein to support muscle development</li>
              <li>Emphasis on establishing consistent eating patterns</li>
              <li>Nutrient-dense foods to support overall health</li>
              <li>Flexible structure allowing for personal preferences</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Recommended For</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Fitness beginners starting a new exercise routine</li>
              <li>People transitioning from inconsistent eating patterns</li>
              <li>Those looking to establish healthy nutritional habits</li>
              <li>Individuals seeking a straightforward approach to nutrition</li>
              <li>Anyone unsure how to structure their meals to support fitness</li>
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
                  <CardDescription>Introduction to Balanced Nutrition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Breakfast (7:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>2 whole eggs, scrambled</li>
                      <li>2 slices whole grain toast</li>
                      <li>1 tablespoon butter</li>
                      <li>1/2 avocado, sliced</li>
                      <li>1 cup mixed berries</li>
                      <li>Coffee or tea (optional)</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 25g protein | 45g carbs | 28g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Mid-Morning Snack (10:00 AM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 apple</li>
                      <li>1 tablespoon almond butter</li>
                      <li>1 string cheese</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">250 calories | 10g protein | 25g carbs | 12g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Lunch (1:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Turkey and veggie wrap:</li>
                      <li>- 1 whole wheat tortilla</li>
                      <li>- 4 oz sliced turkey breast</li>
                      <li>- 1 cup mixed leafy greens</li>
                      <li>- 1/4 cup sliced bell peppers</li>
                      <li>- 1 tablespoon hummus</li>
                      <li>1 cup vegetable soup</li>
                      <li>1 orange</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">500 calories | 35g protein | 60g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Afternoon Snack (4:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>Greek yogurt (6 oz)</li>
                      <li>1/4 cup granola</li>
                      <li>1 tablespoon honey</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">300 calories | 20g protein | 40g carbs | 5g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Dinner (7:00 PM)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>5 oz grilled chicken breast</li>
                      <li>1 cup brown rice</li>
                      <li>2 cups roasted vegetables (broccoli, carrots, zucchini)</li>
                      <li>1 tablespoon olive oil (for cooking)</li>
                      <li>Herbs and spices to taste</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">550 calories | 45g protein | 50g carbs | 15g fat</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">Evening Snack (9:00 PM - Optional)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gymmawy-gray">
                      <li>1 cup milk or milk alternative</li>
                      <li>2 graham crackers</li>
                    </ul>
                    <p className="text-sm text-gymmawy-gray mt-2">200 calories | 10g protein | 25g carbs | 5g fat</p>
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
                      <p className="text-2xl font-bold text-primary">2350</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                      <p className="text-2xl font-bold text-primary">145g</p>
                      <p className="text-xs text-gymmawy-gray">25% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                      <p className="text-2xl font-bold text-primary">245g</p>
                      <p className="text-xs text-gymmawy-gray">42% of calories</p>
                    </div>
                    <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                      <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                      <p className="text-2xl font-bold text-primary">80g</p>
                      <p className="text-xs text-gymmawy-gray">33% of calories</p>
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
                  <h3 className="font-semibold text-primary mb-2">Full Body Introduction</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li><span className="font-medium">Warm-up:</span> 5-10 minutes of light cardio and dynamic stretches</li>
                    <li><span className="font-medium">Main workout:</span> 2-3 sets of 10-12 reps of basic exercises:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Bodyweight squats</li>
                        <li>Modified push-ups (on knees if needed)</li>
                        <li>Dumbbell rows (light weight)</li>
                        <li>Lunges (no added weight)</li>
                        <li>Plank (hold as long as comfortable)</li>
                      </ul>
                    </li>
                    <li><span className="font-medium">Cool down:</span> 5 minutes of static stretching</li>
                  </ul>
                  <p className="mt-4 text-gymmawy-gray">Focus on proper form rather than weight or intensity. This plan provides balanced nutrition to fuel your workout and promote recovery as you begin your fitness journey.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beginner Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
                    <li>Aim to drink at least 64 oz (8 cups) of water throughout the day</li>
                    <li>It's okay to substitute similar foods if you don't have exact ingredients</li>
                    <li>Focus on establishing consistent meal timing more than perfect portions</li>
                    <li>Prepare meals in advance when possible to make healthy eating easier</li>
                    <li>Listen to your body - eat when hungry, stop when satisfied</li>
                    <li>Don't worry about being perfect - consistency matters more than perfection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="day2">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>

        {/* Similar placeholder for other days */}
        <TabsContent value="day3">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="day4">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="day5">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="day6">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="day7">
          <div className="p-8 bg-gymmawy-dark/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">More Daily Meal Plans Coming Soon!</h3>
            <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
              We're currently developing detailed meal plans for the rest of the week. Check back soon for updates or contact our nutrition team for personalized guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Nutrition Team</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-gymmawy-dark/5 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Grocery Shopping Tips for Beginners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Shopping Strategies</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li>Shop the perimeter of the store first (produce, meat, dairy)</li>
              <li>Read nutrition labels (focus on ingredients more than calories)</li>
              <li>Buy in bulk for staples like rice, oats, and lean proteins</li>
              <li>Frozen fruits and vegetables are great backups</li>
              <li>Plan meals ahead and make a list to avoid impulse purchases</li>
              <li>Don't shop hungry - it leads to unhealthy choices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Beginner Staples</h3>
            <ul className="list-disc pl-5 space-y-2 text-gymmawy-gray">
              <li><span className="font-medium">Proteins:</span> Eggs, chicken breast, ground turkey, Greek yogurt, cottage cheese, tofu</li>
              <li><span className="font-medium">Carbs:</span> Brown rice, oats, sweet potatoes, whole grain bread, quinoa</li>
              <li><span className="font-medium">Fruits:</span> Bananas, apples, berries, oranges</li>
              <li><span className="font-medium">Vegetables:</span> Spinach, broccoli, bell peppers, carrots, onions</li>
              <li><span className="font-medium">Healthy fats:</span> Avocados, olive oil, nuts, nut butters</li>
              <li><span className="font-medium">Extras:</span> Herbs and spices, garlic, salsa, low-sugar marinades</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-primary/10 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Ready for the Next Level?</h2>
            <p className="text-gymmawy-gray mb-6">
              Once you've established these nutritional basics, you might want to explore more specific meal plans aligned 
              with your evolving fitness goals. Our nutrition coaches can help you transition to more advanced nutrition 
              strategies as your fitness journey progresses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">Book a Nutrition Consultation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/nutrition">Explore Other Meal Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src="/img/nutrition/meal-prep-1.jpg"
              alt="Healthy meal prep"
              className="rounded-lg w-full h-auto"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnersMealPlan; 