import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample food database with common foods
const foodDatabase = [
  {
    id: 1,
    name: "Chicken Breast",
    category: "protein",
    serving: "100g",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    vitamins: ["B6", "B12", "Niacin"],
    minerals: ["Phosphorus", "Selenium", "Potassium"]
  },
  {
    id: 2,
    name: "Salmon",
    category: "protein",
    serving: "100g",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    fiber: 0,
    vitamins: ["B12", "D", "B6"],
    minerals: ["Selenium", "Phosphorus", "Potassium"]
  },
  {
    id: 3,
    name: "Brown Rice",
    category: "carbs",
    serving: "100g cooked",
    calories: 112,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    fiber: 1.8,
    vitamins: ["B1", "B3", "B6"],
    minerals: ["Manganese", "Magnesium", "Phosphorus"]
  },
  {
    id: 4,
    name: "Sweet Potato",
    category: "carbs",
    serving: "100g",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    vitamins: ["A", "C", "B6"],
    minerals: ["Potassium", "Manganese", "Copper"]
  },
  {
    id: 5,
    name: "Avocado",
    category: "fat",
    serving: "100g",
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    fiber: 6.7,
    vitamins: ["K", "E", "C"],
    minerals: ["Potassium", "Copper", "Folate"]
  },
  {
    id: 6,
    name: "Olive Oil",
    category: "fat",
    serving: "1 tbsp (14g)",
    calories: 119,
    protein: 0,
    carbs: 0,
    fat: 13.5,
    fiber: 0,
    vitamins: ["E", "K"],
    minerals: []
  },
  {
    id: 7,
    name: "Broccoli",
    category: "vegetable",
    serving: "100g",
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fat: 0.4,
    fiber: 2.6,
    vitamins: ["C", "K", "Folate"],
    minerals: ["Potassium", "Manganese", "Iron"]
  },
  {
    id: 8,
    name: "Spinach",
    category: "vegetable",
    serving: "100g",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    vitamins: ["K", "A", "C"],
    minerals: ["Iron", "Calcium", "Magnesium"]
  },
  {
    id: 9,
    name: "Banana",
    category: "fruit",
    serving: "1 medium (118g)",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.4,
    fiber: 3.1,
    vitamins: ["B6", "C"],
    minerals: ["Potassium", "Manganese", "Magnesium"]
  },
  {
    id: 10,
    name: "Blueberries",
    category: "fruit",
    serving: "100g",
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    fiber: 2.4,
    vitamins: ["C", "K"],
    minerals: ["Manganese"]
  },
  {
    id: 11,
    name: "Greek Yogurt",
    category: "dairy",
    serving: "100g",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    vitamins: ["B12", "B2"],
    minerals: ["Calcium", "Phosphorus", "Selenium"]
  },
  {
    id: 12,
    name: "Eggs",
    category: "protein",
    serving: "1 large (50g)",
    calories: 72,
    protein: 6.3,
    carbs: 0.4,
    fat: 5,
    fiber: 0,
    vitamins: ["B12", "B2", "A"],
    minerals: ["Selenium", "Phosphorus", "Iron"]
  },
  {
    id: 13,
    name: "Almonds",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 164,
    protein: 6,
    carbs: 6,
    fat: 14,
    fiber: 3.5,
    vitamins: ["E", "B2"],
    minerals: ["Magnesium", "Manganese", "Phosphorus"]
  },
  {
    id: 14,
    name: "Quinoa",
    category: "carbs",
    serving: "100g cooked",
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    fiber: 2.8,
    vitamins: ["B1", "B6", "Folate"],
    minerals: ["Magnesium", "Phosphorus", "Manganese"]
  },
  {
    id: 15,
    name: "Lentils",
    category: "protein",
    serving: "100g cooked",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4,
    fiber: 8,
    vitamins: ["B1", "B6", "Folate"],
    minerals: ["Iron", "Potassium", "Magnesium"]
  },
  // New Protein Items
  {
    id: 16,
    name: "Turkey Breast",
    category: "protein",
    serving: "100g",
    calories: 157,
    protein: 29,
    carbs: 0,
    fat: 4,
    fiber: 0,
    vitamins: ["B6", "B12", "Niacin"],
    minerals: ["Phosphorus", "Selenium", "Zinc"]
  },
  {
    id: 17,
    name: "Lean Beef",
    category: "protein",
    serving: "100g",
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 15,
    fiber: 0,
    vitamins: ["B12", "B6", "Niacin"],
    minerals: ["Iron", "Zinc", "Phosphorus"]
  },
  {
    id: 18,
    name: "Tuna",
    category: "protein",
    serving: "100g",
    calories: 130,
    protein: 28,
    carbs: 0,
    fat: 1,
    fiber: 0,
    vitamins: ["D", "B12"],
    minerals: ["Selenium", "Phosphorus", "Magnesium"]
  },
  {
    id: 19,
    name: "Tofu",
    category: "protein",
    serving: "100g",
    calories: 76,
    protein: 8,
    carbs: 2,
    fat: 4.5,
    fiber: 0.5,
    vitamins: ["Calcium", "Iron"],
    minerals: ["Manganese", "Copper", "Selenium"]
  },
  {
    id: 20,
    name: "Whey Protein",
    category: "protein",
    serving: "30g scoop",
    calories: 120,
    protein: 24,
    carbs: 3,
    fat: 2,
    fiber: 0,
    vitamins: ["B12"],
    minerals: ["Calcium", "Phosphorus"]
  },
  // New Carbs Items
  {
    id: 21,
    name: "Oatmeal",
    category: "carbs",
    serving: "100g cooked",
    calories: 68,
    protein: 2.5,
    carbs: 12,
    fat: 1.3,
    fiber: 2,
    vitamins: ["B1", "B5", "Folate"],
    minerals: ["Manganese", "Phosphorus", "Magnesium"]
  },
  {
    id: 22,
    name: "Whole Wheat Bread",
    category: "carbs",
    serving: "1 slice (40g)",
    calories: 91,
    protein: 4,
    carbs: 17,
    fat: 1,
    fiber: 2.5,
    vitamins: ["B1", "B3", "Folate"],
    minerals: ["Manganese", "Selenium", "Iron"]
  },
  {
    id: 23,
    name: "White Potatoes",
    category: "carbs",
    serving: "100g",
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    vitamins: ["C", "B6"],
    minerals: ["Potassium", "Manganese", "Phosphorus"]
  },
  {
    id: 24,
    name: "Pasta",
    category: "carbs",
    serving: "100g cooked",
    calories: 158,
    protein: 5.8,
    carbs: 31,
    fat: 0.9,
    fiber: 1.8,
    vitamins: ["B1", "B9", "B3"],
    minerals: ["Selenium", "Manganese", "Copper"]
  },
  {
    id: 25,
    name: "Corn",
    category: "carbs",
    serving: "100g",
    calories: 96,
    protein: 3.4,
    carbs: 21,
    fat: 1.5,
    fiber: 2.4,
    vitamins: ["B1", "B5", "C"],
    minerals: ["Magnesium", "Phosphorus", "Manganese"]
  },
  // New Fats Items
  {
    id: 26,
    name: "Coconut Oil",
    category: "fat",
    serving: "1 tbsp (14g)",
    calories: 117,
    protein: 0,
    carbs: 0,
    fat: 13.5,
    fiber: 0,
    vitamins: ["E"],
    minerals: []
  },
  {
    id: 27,
    name: "Butter",
    category: "fat",
    serving: "1 tbsp (14g)",
    calories: 102,
    protein: 0.1,
    carbs: 0.1,
    fat: 11.5,
    fiber: 0,
    vitamins: ["A", "E", "K"],
    minerals: ["Calcium"]
  },
  {
    id: 28,
    name: "Flaxseed Oil",
    category: "fat",
    serving: "1 tbsp (14g)",
    calories: 120,
    protein: 0,
    carbs: 0,
    fat: 13.6,
    fiber: 0,
    vitamins: ["K", "E"],
    minerals: []
  },
  {
    id: 29,
    name: "Chia Seeds",
    category: "fat",
    serving: "1 oz (28g)",
    calories: 138,
    protein: 4.7,
    carbs: 12,
    fat: 8.7,
    fiber: 9.8,
    vitamins: ["B3", "B1", "B2"],
    minerals: ["Calcium", "Phosphorus", "Manganese"]
  },
  {
    id: 30,
    name: "Dark Chocolate",
    category: "fat",
    serving: "1 oz (28g)",
    calories: 155,
    protein: 2.2,
    carbs: 13,
    fat: 11,
    fiber: 3.1,
    vitamins: ["E"],
    minerals: ["Iron", "Magnesium", "Copper"]
  },
  // New Vegetable Items
  {
    id: 31,
    name: "Kale",
    category: "vegetable",
    serving: "100g",
    calories: 49,
    protein: 4.3,
    carbs: 8.8,
    fat: 0.9,
    fiber: 3.6,
    vitamins: ["K", "C", "A"],
    minerals: ["Manganese", "Calcium", "Copper"]
  },
  {
    id: 32,
    name: "Bell Peppers",
    category: "vegetable",
    serving: "100g",
    calories: 31,
    protein: 1,
    carbs: 6,
    fat: 0.3,
    fiber: 2.1,
    vitamins: ["C", "B6", "A"],
    minerals: ["Potassium", "Manganese", "Folate"]
  },
  {
    id: 33,
    name: "Carrots",
    category: "vegetable",
    serving: "100g",
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    fiber: 2.8,
    vitamins: ["A", "K", "B6"],
    minerals: ["Potassium", "Biotin", "Manganese"]
  },
  {
    id: 34,
    name: "Cauliflower",
    category: "vegetable",
    serving: "100g",
    calories: 25,
    protein: 1.9,
    carbs: 5,
    fat: 0.3,
    fiber: 2,
    vitamins: ["C", "K", "B6"],
    minerals: ["Folate", "Pantothenic Acid", "Manganese"]
  },
  {
    id: 35,
    name: "Cucumber",
    category: "vegetable",
    serving: "100g",
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    fiber: 0.5,
    vitamins: ["K", "C", "B5"],
    minerals: ["Potassium", "Magnesium", "Manganese"]
  },
  // New Fruit Items
  {
    id: 36,
    name: "Apple",
    category: "fruit",
    serving: "1 medium (182g)",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
    fiber: 4.4,
    vitamins: ["C", "K"],
    minerals: ["Potassium"]
  },
  {
    id: 37,
    name: "Strawberries",
    category: "fruit",
    serving: "100g",
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fat: 0.3,
    fiber: 2,
    vitamins: ["C", "Folate", "B9"],
    minerals: ["Manganese", "Potassium"]
  },
  {
    id: 38,
    name: "Orange",
    category: "fruit",
    serving: "1 medium (131g)",
    calories: 62,
    protein: 1.2,
    carbs: 15.4,
    fat: 0.2,
    fiber: 3.1,
    vitamins: ["C", "B1", "Folate"],
    minerals: ["Potassium", "Calcium"]
  },
  {
    id: 39,
    name: "Avocado",
    category: "fruit",
    serving: "1/2 medium (68g)",
    calories: 114,
    protein: 1.3,
    carbs: 6,
    fat: 10.5,
    fiber: 4.6,
    vitamins: ["K", "E", "C"],
    minerals: ["Potassium", "Folate", "Copper"]
  },
  {
    id: 40,
    name: "Pineapple",
    category: "fruit",
    serving: "100g",
    calories: 50,
    protein: 0.5,
    carbs: 13.1,
    fat: 0.1,
    fiber: 1.4,
    vitamins: ["C", "B6", "Thiamin"],
    minerals: ["Manganese", "Copper"]
  },
  // New Dairy Items
  {
    id: 41,
    name: "Cottage Cheese",
    category: "dairy",
    serving: "100g",
    calories: 98,
    protein: 11.1,
    carbs: 3.4,
    fat: 4.3,
    fiber: 0,
    vitamins: ["B12", "B2", "A"],
    minerals: ["Calcium", "Phosphorus", "Selenium"]
  },
  {
    id: 42,
    name: "Cheddar Cheese",
    category: "dairy",
    serving: "1 oz (28g)",
    calories: 113,
    protein: 7,
    carbs: 0.4,
    fat: 9.3,
    fiber: 0,
    vitamins: ["A", "B12", "K2"],
    minerals: ["Calcium", "Phosphorus", "Zinc"]
  },
  {
    id: 43,
    name: "Milk",
    category: "dairy",
    serving: "1 cup (244g)",
    calories: 122,
    protein: 8.1,
    carbs: 11.7,
    fat: 4.8,
    fiber: 0,
    vitamins: ["D", "B12", "B2"],
    minerals: ["Calcium", "Phosphorus", "Potassium"]
  },
  {
    id: 44,
    name: "Kefir",
    category: "dairy",
    serving: "1 cup (243g)",
    calories: 104,
    protein: 6.1,
    carbs: 11.6,
    fat: 2.5,
    fiber: 0,
    vitamins: ["B12", "B2", "K2"],
    minerals: ["Calcium", "Phosphorus", "Magnesium"]
  },
  {
    id: 45,
    name: "Cream Cheese",
    category: "dairy",
    serving: "1 oz (28g)",
    calories: 99,
    protein: 2.1,
    carbs: 1.2,
    fat: 9.9,
    fiber: 0,
    vitamins: ["A", "B2"],
    minerals: ["Calcium", "Phosphorus"]
  },
  // New Nuts & Seeds Items
  {
    id: 46,
    name: "Walnuts",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 185,
    protein: 4.3,
    carbs: 3.9,
    fat: 18.5,
    fiber: 1.9,
    vitamins: ["E", "B6"],
    minerals: ["Copper", "Manganese", "Phosphorus"]
  },
  {
    id: 47,
    name: "Pumpkin Seeds",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 158,
    protein: 8.6,
    carbs: 5.2,
    fat: 13.9,
    fiber: 1.7,
    vitamins: ["K", "E"],
    minerals: ["Magnesium", "Phosphorus", "Zinc"]
  },
  {
    id: 48,
    name: "Cashews",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 157,
    protein: 5.2,
    carbs: 8.6,
    fat: 12.4,
    fiber: 0.9,
    vitamins: ["K", "E", "B6"],
    minerals: ["Copper", "Magnesium", "Phosphorus"]
  },
  {
    id: 49,
    name: "Sunflower Seeds",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 165,
    protein: 5.5,
    carbs: 6.5,
    fat: 14,
    fiber: 3,
    vitamins: ["E", "B1", "B6"],
    minerals: ["Copper", "Manganese", "Selenium"]
  },
  {
    id: 50,
    name: "Pistachios",
    category: "nuts",
    serving: "1 oz (28g)",
    calories: 159,
    protein: 5.7,
    carbs: 7.7,
    fat: 12.9,
    fiber: 3,
    vitamins: ["B6", "E", "K"],
    minerals: ["Copper", "Manganese", "Phosphorus"]
  }
];

// Group foods by category for the category tab
const foodCategories = {
  protein: foodDatabase.filter(food => food.category === "protein"),
  carbs: foodDatabase.filter(food => food.category === "carbs"),
  fat: foodDatabase.filter(food => food.category === "fat"),
  vegetable: foodDatabase.filter(food => food.category === "vegetable"),
  fruit: foodDatabase.filter(food => food.category === "fruit"),
  dairy: foodDatabase.filter(food => food.category === "dairy"),
  nuts: foodDatabase.filter(food => food.category === "nuts")
};

const NutritionDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [activeTab, setActiveTab] = useState("search");

  // Filter foods based on search term
  const filteredFoods = searchTerm === ""
    ? []
    : foodDatabase.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedFood(null);
  };

  const selectFood = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="search" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="search">Search Foods</TabsTrigger>
          <TabsTrigger value="categories">Browse by Category</TabsTrigger>
        </TabsList>

        {/* Search Tab */}
        <TabsContent value="search" className="space-y-6">
          <div className="flex flex-col space-y-4">
            <Label htmlFor="food-search">Search for a food</Label>
            <div className="flex space-x-2">
              <Input
                id="food-search"
                placeholder="Enter food name (e.g., Chicken Breast)"
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1"
              />
              <Button type="submit" onClick={() => {}} className="shrink-0">
                Search
              </Button>
            </div>
          </div>

          {searchTerm && filteredFoods.length === 0 ? (
            <div className="text-center py-4 text-gymmawy-gray">
              No foods found matching "{searchTerm}"
            </div>
          ) : (
            searchTerm && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {filteredFoods.map((food) => (
                  <Card key={food.id} className="cursor-pointer hover:border-primary transition-colors" onClick={() => selectFood(food)}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                      <CardDescription>
                        {food.serving} · {food.calories} calories
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between text-sm">
                      <div className="text-center">
                        <p className="font-medium text-primary">{food.protein}g</p>
                        <p className="text-xs text-gymmawy-gray">Protein</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-primary">{food.carbs}g</p>
                        <p className="text-xs text-gymmawy-gray">Carbs</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-primary">{food.fat}g</p>
                        <p className="text-xs text-gymmawy-gray">Fat</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )
          )}
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6">
          <Tabs defaultValue="protein" className="w-full">
            <TabsList className="flex flex-wrap gap-2 mb-6">
              <TabsTrigger value="protein">Proteins</TabsTrigger>
              <TabsTrigger value="carbs">Carbs</TabsTrigger>
              <TabsTrigger value="fat">Fats</TabsTrigger>
              <TabsTrigger value="vegetable">Vegetables</TabsTrigger>
              <TabsTrigger value="fruit">Fruits</TabsTrigger>
              <TabsTrigger value="dairy">Dairy</TabsTrigger>
              <TabsTrigger value="nuts">Nuts & Seeds</TabsTrigger>
            </TabsList>

            {Object.entries(foodCategories).map(([category, foods]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foods.map((food) => (
                    <Card key={food.id} className="cursor-pointer hover:border-primary transition-colors" onClick={() => selectFood(food)}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{food.name}</CardTitle>
                        <CardDescription>
                          {food.serving} · {food.calories} calories
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-between text-sm">
                        <div className="text-center">
                          <p className="font-medium text-primary">{food.protein}g</p>
                          <p className="text-xs text-gymmawy-gray">Protein</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-primary">{food.carbs}g</p>
                          <p className="text-xs text-gymmawy-gray">Carbs</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-primary">{food.fat}g</p>
                          <p className="text-xs text-gymmawy-gray">Fat</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>

      {/* Detailed Food Info */}
      {selectedFood && (
        <Card className="mt-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">{selectedFood.name}</CardTitle>
                <CardDescription>
                  Serving size: {selectedFood.serving}
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelectedFood(null)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                <p className="text-xs text-gymmawy-gray uppercase font-semibold">Calories</p>
                <p className="text-2xl font-bold text-primary">{selectedFood.calories}</p>
                <p className="text-xs text-gymmawy-gray mt-1">kcal</p>
              </div>
              <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                <p className="text-xs text-gymmawy-gray uppercase font-semibold">Protein</p>
                <p className="text-2xl font-bold text-primary">{selectedFood.protein}g</p>
                <p className="text-xs text-gymmawy-gray mt-1">{Math.round(selectedFood.protein * 4)} calories</p>
              </div>
              <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                <p className="text-xs text-gymmawy-gray uppercase font-semibold">Carbs</p>
                <p className="text-2xl font-bold text-primary">{selectedFood.carbs}g</p>
                <p className="text-xs text-gymmawy-gray mt-1">{Math.round(selectedFood.carbs * 4)} calories</p>
              </div>
              <div className="bg-gymmawy-dark/10 p-4 rounded-lg text-center">
                <p className="text-xs text-gymmawy-gray uppercase font-semibold">Fat</p>
                <p className="text-2xl font-bold text-primary">{selectedFood.fat}g</p>
                <p className="text-xs text-gymmawy-gray mt-1">{Math.round(selectedFood.fat * 9)} calories</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Fiber</span>
                    <span className="text-sm font-medium">{selectedFood.fiber}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Category</span>
                    <span className="text-sm font-medium capitalize">{selectedFood.category}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vitamins</h3>
                  {selectedFood.vitamins.length > 0 ? (
                    <ul className="text-sm space-y-1">
                      {selectedFood.vitamins.map((vitamin, index) => (
                        <li key={index}>Vitamin {vitamin}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gymmawy-gray">No significant vitamins</p>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Minerals</h3>
                  {selectedFood.minerals.length > 0 ? (
                    <ul className="text-sm space-y-1">
                      {selectedFood.minerals.map((mineral, index) => (
                        <li key={index}>{mineral}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gymmawy-gray">No significant minerals</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NutritionDatabase;
