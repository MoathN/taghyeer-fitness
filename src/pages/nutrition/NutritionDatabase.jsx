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
