import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import calculator components
import CalorieCalculator from "./CalorieCalculator";
import MacroCalculator from "./MacroCalculator";
import NutritionDatabase from "./NutritionDatabase";

const Nutrition = () => {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Nutrition</h1>
        <p className="text-gymmawy-gray max-w-3xl mx-auto">
          Proper nutrition is the foundation of any fitness journey. Explore our comprehensive guides, meal plans, and nutrition advice to fuel your workouts and maximize your results.
        </p>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="guides">Nutrition Guides</TabsTrigger>
          <TabsTrigger value="mealplans">Meal Plans</TabsTrigger>
          <TabsTrigger value="calculators">Nutrition Tools</TabsTrigger>
        </TabsList>

        {/* Nutrition Guides Tab */}
        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              title="Macronutrients 101"
              description="Learn the basics of proteins, carbohydrates, and fats"
              imageSrc="/img/nutrition/meal-prep-1.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>Understanding protein and muscle building</li>
                <li>Carbohydrates for energy and performance</li>
                <li>Healthy fats and their importance</li>
                <li>How to balance your macros for your goals</li>
              </ul>
            </NutritionCard>

            <NutritionCard
              title="Pre & Post Workout Nutrition"
              description="Optimize your workout performance and recovery"
              imageSrc="/img/nutrition/pre-workout-nutrition.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>What to eat before your workout</li>
                <li>Post-workout nutrition window</li>
                <li>Recovery foods and supplements</li>
                <li>Hydration strategies for peak performance</li>
              </ul>
            </NutritionCard>

            <NutritionCard
              title="Nutrition for Weight Loss"
              description="Sustainable strategies for healthy fat loss"
              imageSrc="/img/nutrition/meal-prep-2.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>Creating a caloric deficit safely</li>
                <li>Protein requirements during fat loss</li>
                <li>Managing hunger and cravings</li>
                <li>Tracking progress beyond the scale</li>
              </ul>
            </NutritionCard>

            <NutritionCard
              title="Muscle Building Nutrition"
              description="Eat to grow stronger and build lean muscle"
              imageSrc="/img/nutrition/muscle-meal-prep.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>Caloric surplus for muscle growth</li>
                <li>Protein timing and distribution</li>
                <li>Supporting nutrients for recovery</li>
                <li>Clean bulking vs. traditional bulking</li>
              </ul>
            </NutritionCard>

            <NutritionCard
              title="Supplements Guide"
              description="Navigate the world of fitness supplements"
              imageSrc="/img/nutrition/protein-meal.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>Essential supplements for beginners</li>
                <li>Pre-workout and performance enhancers</li>
                <li>Recovery and health supplements</li>
                <li>What supplements are worth your money</li>
              </ul>
            </NutritionCard>

            <NutritionCard
              title="Nutrition Myths Debunked"
              description="Separate fact from fiction in fitness nutrition"
              imageSrc="/img/nutrition/nutrition-consultation.jpg"
            >
              <ul className="mt-4 space-y-2 list-disc list-inside text-gymmawy-gray">
                <li>Meal frequency and metabolism</li>
                <li>Carbs at night myths</li>
                <li>Fat burning foods and supplements</li>
                <li>Evidence-based nutrition practices</li>
              </ul>
            </NutritionCard>
          </div>
        </TabsContent>

        {/* Meal Plans Tab */}
        <TabsContent value="mealplans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MealPlanCard
              title="Beginner's Meal Plan"
              description="Simple, effective nutrition for fitness newcomers"
              calories="2000-2500"
              protein="150g"
              carbs="200g"
              fat="70g"
              imageSrc="/img/nutrition/meal-prep-1.jpg"
            />

            <MealPlanCard
              title="Fat Loss Meal Plan"
              description="Designed for sustainable weight loss with satiety"
              calories="1800-2000"
              protein="180g"
              carbs="150g"
              fat="60g"
              imageSrc="/img/nutrition/meal-prep-2.jpg"
            />

            <MealPlanCard
              title="Muscle Building Plan"
              description="High protein, calorie-dense plan for growth"
              calories="2800-3200"
              protein="200g"
              carbs="350g"
              fat="80g"
              imageSrc="/img/nutrition/muscle-meal-prep.jpg"
            />

            <MealPlanCard
              title="Maintenance Plan"
              description="Balanced nutrition for body composition maintenance"
              calories="2400-2600"
              protein="170g"
              carbs="250g"
              fat="75g"
              imageSrc="/img/nutrition/pre-workout-nutrition.jpg"
            />

            <MealPlanCard
              title="Vegetarian Plan"
              description="Plant-based nutrition for fitness performance"
              calories="2200-2400"
              protein="140g"
              carbs="280g"
              fat="65g"
              imageSrc="/img/nutrition/protein-meal.jpg"
            />

            <MealPlanCard
              title="Performance Plan"
              description="For athletes and high-intensity training"
              calories="2800-3500"
              protein="180g"
              carbs="400g"
              fat="70g"
              imageSrc="/img/nutrition/nutrition-consultation.jpg"
            />
          </div>

          <div className="bg-gymmawy-dark/10 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-primary mb-2">Custom Meal Planning</h3>
            <p className="text-gymmawy-gray mb-4">
              Need a personalized meal plan tailored to your specific goals, preferences, and dietary requirements? Our nutrition experts can create a custom plan just for you.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Request Custom Meal Plan</Link>
            </Button>
          </div>
        </TabsContent>

        {/* Nutrition Calculators Tab */}
        <TabsContent value="calculators">
          <Tabs defaultValue="calorie" className="w-full">
            <TabsList className="flex flex-wrap gap-2 mb-6">
              <TabsTrigger value="calorie">Calorie Calculator</TabsTrigger>
              <TabsTrigger value="macro">Macro Calculator</TabsTrigger>
              <TabsTrigger value="foods">Food Database</TabsTrigger>
            </TabsList>

            <TabsContent value="calorie" className="py-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Calorie Calculator</h2>
                <p className="text-gymmawy-gray">
                  Estimate your daily calorie needs based on your age, weight, height, gender, and activity level. This calculator uses the Mifflin-St Jeor equation to calculate your Basal Metabolic Rate (BMR) and then adjusts for activity level.
                </p>
              </div>
              <CalorieCalculator />
            </TabsContent>

            <TabsContent value="macro" className="py-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Macro Calculator</h2>
                <p className="text-gymmawy-gray">
                  Determine your ideal macronutrient ratio based on your fitness goals and dietary preferences. This calculator will help you find the right balance of proteins, carbohydrates, and fats.
                </p>
              </div>
              <MacroCalculator />
            </TabsContent>

            <TabsContent value="foods" className="py-4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Nutrition Facts Database</h2>
                <p className="text-gymmawy-gray">
                  Search our comprehensive database of foods to get detailed nutritional information including calories, macronutrients, vitamins, and minerals.
                </p>
              </div>
              <NutritionDatabase />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-primary/10 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Need Personalized Nutrition Advice?</h2>
            <p className="text-gymmawy-gray mb-6">
              Our team of certified nutritionists can help you develop a personalized nutrition plan that aligns with your fitness goals, dietary preferences, and lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src="/img/nutrition/nutrition-consultation.jpg"
              alt="Nutrition consultation"
              className="rounded-lg w-full h-auto"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Nutrition Guide Card Component
const NutritionCard = ({ title, description, imageSrc, children }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-44 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {children}
      </CardContent>
    </Card>
  );
};

// Meal Plan Card Component
const MealPlanCard = ({ title, description, calories, protein, carbs, fat, imageSrc }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="h-36 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gymmawy-dark/10 p-3 rounded-lg text-center">
            <p className="text-xs text-gymmawy-gray uppercase">Calories</p>
            <p className="text-lg font-semibold text-primary">{calories}</p>
          </div>
          <div className="bg-gymmawy-dark/10 p-3 rounded-lg text-center">
            <p className="text-xs text-gymmawy-gray uppercase">Protein</p>
            <p className="text-lg font-semibold text-primary">{protein}</p>
          </div>
          <div className="bg-gymmawy-dark/10 p-3 rounded-lg text-center">
            <p className="text-xs text-gymmawy-gray uppercase">Carbs</p>
            <p className="text-lg font-semibold text-primary">{carbs}</p>
          </div>
          <div className="bg-gymmawy-dark/10 p-3 rounded-lg text-center">
            <p className="text-xs text-gymmawy-gray uppercase">Fat</p>
            <p className="text-lg font-semibold text-primary">{fat}</p>
          </div>
        </div>
        <Button className="w-full" asChild>
          <Link to="/contact">View Full Plan</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Nutrition;
