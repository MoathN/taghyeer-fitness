import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Macronutrients101 = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Macronutrients 101</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Understanding macronutrients is essential for anyone looking to improve their physique, performance, or overall health.
          Let's break down the three main macronutrients and how they affect your body and fitness goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/meal-prep-1.jpg"
          alt="Macronutrients"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Why Macronutrients Matter</h2>
          <p className="text-gymmawy-gray mb-4">
            Macronutrients are the nutrients that your body needs in large amounts to function properly - they include
            proteins, carbohydrates, and fats. Each macronutrient serves different functions in the body and provides
            energy measured in calories:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2 mb-4">
            <li>Protein: 4 calories per gram</li>
            <li>Carbohydrates: 4 calories per gram</li>
            <li>Fats: 9 calories per gram</li>
          </ul>
          <p className="text-gymmawy-gray">
            Finding the right balance of these macronutrients for your specific goals is key to optimizing your nutrition plan. 
            Whether you're looking to build muscle, lose fat, or improve athletic performance, understanding how to manipulate
            your macros can make a significant difference in your results.
          </p>
        </div>
      </div>

      {/* Protein Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Protein</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Functions & Benefits</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Builds and repairs muscle tissue</li>
              <li>Supports immune function</li>
              <li>Creates enzymes and hormones</li>
              <li>Provides structure to skin, hair, and nails</li>
              <li>Increases satiety and helps control appetite</li>
              <li>Has the highest thermic effect (burns more calories during digestion)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Recommended Intake</h3>
            <p className="text-gymmawy-gray mb-3">
              Your protein needs depend on your activity level, goals, and body composition:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">General health:</span> 0.8g per kg of bodyweight</li>
              <li><span className="font-medium">Active individuals:</span> 1.2-1.7g per kg of bodyweight</li>
              <li><span className="font-medium">Strength athletes:</span> 1.6-2.2g per kg of bodyweight</li>
              <li><span className="font-medium">During caloric deficit:</span> 1.8-2.7g per kg to preserve muscle mass</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Quality Protein Sources</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["Chicken breast", "Lean beef", "Fish", "Eggs", "Whey protein", 
              "Greek yogurt", "Cottage cheese", "Tofu", "Lentils", "Quinoa"].map((source, index) => (
              <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm">
                <p className="text-gymmawy-gray">{source}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Protein and Muscle Building</h3>
          <p className="text-gymmawy-gray mb-3">
            Protein is essential for muscle growth and recovery. When you exercise, especially resistance training, 
            you create micro-tears in your muscle fibers. Consuming adequate protein provides the amino acids needed 
            to repair and rebuild these muscles, resulting in growth and increased strength over time.
          </p>
          <p className="text-gymmawy-gray">
            For optimal muscle protein synthesis, research suggests distributing your protein intake evenly throughout the day,
            with 20-40g servings every 3-4 hours, rather than consuming the majority in one meal.
          </p>
        </div>
      </div>

      {/* Carbohydrates Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Carbohydrates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Functions & Benefits</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Primary energy source for the body</li>
              <li>Fuels high-intensity exercise and brain function</li>
              <li>Spares protein from being used for energy</li>
              <li>Provides fiber for digestive health</li>
              <li>Influences mood and mental performance</li>
              <li>Aids in recovery after intense training</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Types of Carbohydrates</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Simple Carbohydrates</h4>
                <p className="text-gymmawy-gray">Digested quickly, providing immediate energy but potential blood sugar spikes.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: sugar, fruit, honey, sports drinks</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Complex Carbohydrates</h4>
                <p className="text-gymmawy-gray">Digested more slowly, providing sustained energy and better blood sugar control.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: whole grains, legumes, starchy vegetables</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Fiber</h4>
                <p className="text-gymmawy-gray">Indigestible carbohydrates that support gut health and help you feel full.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: vegetables, fruits, whole grains, nuts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Recommended Intake</h3>
          <p className="text-gymmawy-gray mb-3">
            Carbohydrate needs vary significantly based on activity level and goals:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li><span className="font-medium">Fat loss:</span> 2-3g per kg of bodyweight</li>
            <li><span className="font-medium">Maintenance:</span> 3-5g per kg of bodyweight</li>
            <li><span className="font-medium">Highly active/athletes:</span> 5-8g per kg of bodyweight</li>
            <li><span className="font-medium">Endurance athletes:</span> 8-10g per kg of bodyweight</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Carbohydrates for Performance</h3>
          <p className="text-gymmawy-gray mb-3">
            Carbohydrates are the body's preferred energy source for high-intensity exercise. They're stored in your muscles 
            and liver as glycogen, which can be quickly converted to glucose for energy during workouts.
          </p>
          <p className="text-gymmawy-gray">
            Strategically timing your carbohydrate intake around your workouts can significantly improve performance. 
            Consuming carbs before training provides readily available energy, while post-workout carbs help replenish 
            glycogen stores and enhance recovery.
          </p>
        </div>
      </div>

      {/* Fats Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Fats</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Functions & Benefits</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Hormone production and regulation</li>
              <li>Absorption of fat-soluble vitamins (A, D, E, K)</li>
              <li>Brain development and function</li>
              <li>Cell membrane structure and integrity</li>
              <li>Energy storage and insulation</li>
              <li>Provides satiety and flavor to meals</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Types of Fats</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Saturated Fats</h4>
                <p className="text-gymmawy-gray">Solid at room temperature, found in animal products and some plant oils.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: meat, butter, coconut oil</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Monounsaturated Fats</h4>
                <p className="text-gymmawy-gray">Heart-healthy fats that can improve cholesterol levels.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: olive oil, avocados, nuts</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Polyunsaturated Fats</h4>
                <p className="text-gymmawy-gray">Include essential omega-3 and omega-6 fatty acids that the body cannot produce.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: fatty fish, flaxseeds, walnuts, vegetable oils</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Trans Fats</h4>
                <p className="text-gymmawy-gray">Artificially created fats that should be minimized or avoided.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: processed foods, some margarines, fried foods</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Recommended Intake</h3>
          <p className="text-gymmawy-gray mb-3">
            Dietary fat is essential for health, but should be consumed in moderation:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li><span className="font-medium">Minimum healthy intake:</span> 0.5-1g per kg of bodyweight</li>
            <li><span className="font-medium">Typical range:</span> 20-35% of total daily calories</li>
            <li><span className="font-medium">Prioritize:</span> Unsaturated fats from olive oil, nuts, seeds, and fatty fish</li>
            <li><span className="font-medium">Moderate:</span> Saturated fats from animal sources</li>
            <li><span className="font-medium">Minimize:</span> Trans fats from processed foods</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Fats and Hormonal Health</h3>
          <p className="text-gymmawy-gray mb-3">
            Dietary fats play a crucial role in hormone production, including testosterone and estrogen, which are important 
            for muscle growth, recovery, and overall health. Extremely low-fat diets can disrupt hormonal balance and negatively 
            impact performance and body composition.
          </p>
          <p className="text-gymmawy-gray">
            Omega-3 fatty acids are particularly important for athletes as they help reduce inflammation, improve recovery, 
            enhance blood flow, and may support muscle protein synthesis. Consider including fatty fish like salmon in your diet 
            2-3 times per week, or supplementing with fish oil if you don't consume fish.
          </p>
        </div>
      </div>

      {/* Balancing Macros Section */}
      <div className="bg-primary/10 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Balancing Your Macros for Your Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">For Fat Loss</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Create a moderate caloric deficit (10-20% below maintenance)</li>
              <li>Higher protein (1.8-2.7g/kg) to preserve muscle mass</li>
              <li>Moderate carbs (2-3g/kg), with priority around workouts</li>
              <li>Sufficient fats (0.5-1g/kg) for hormone function</li>
              <li>Focus on whole foods with high satiety and nutrient density</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">For Muscle Building</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Create a moderate caloric surplus (10-15% above maintenance)</li>
              <li>High protein (1.6-2.2g/kg) to support muscle growth</li>
              <li>Higher carbs (4-7g/kg) to fuel intense training</li>
              <li>Moderate fats (0.8-1.2g/kg) for hormonal balance</li>
              <li>Time carbs and protein around training for optimal results</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">For Performance</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Match calorie intake to activity level and performance goals</li>
              <li>Adequate protein (1.4-2g/kg) for recovery and adaptation</li>
              <li>High carbs (5-10g/kg) based on training intensity and volume</li>
              <li>Moderate fats (0.8-1.2g/kg) for health and energy</li>
              <li>Strategic pre, during, and post-workout nutrition</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">Practical Tips for Tracking Macros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Getting Started</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Use a food tracking app like MyFitnessPal or Cronometer</li>
                <li>Weigh foods using a digital food scale for accuracy</li>
                <li>Track consistently for 2-3 weeks to understand your patterns</li>
                <li>Adjust macros based on progress and how you feel</li>
                <li>Don't stress about being 100% exact every day</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Making It Sustainable</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Prepare meals in bulk to save time</li>
                <li>Create a rotation of go-to meals with known macros</li>
                <li>Allow for flexibility with the 80/20 rule</li>
                <li>Focus on food quality, not just macros</li>
                <li>Consider tracking only protein at first if feeling overwhelmed</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gymmawy-gray mb-4">
            Ready to start planning your nutrition based on your macronutrient needs?
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 mr-4">
            <Link to="/nutrition?tab=calculators">Try Our Macro Calculator</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/30 text-gymmawy-white hover:border-primary hover:bg-primary/10 hover:text-primary">
            <Link to="/contact">Speak to a Nutrition Coach</Link>
          </Button>
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Related Nutrition Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/nutrition" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Pre & Post Workout Nutrition</h3>
            <p className="text-gymmawy-gray">Optimize your workout performance and recovery with strategic nutritional timing.</p>
          </Link>
          
          <Link to="/nutrition" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Nutrition for Weight Loss</h3>
            <p className="text-gymmawy-gray">Sustainable strategies for healthy fat loss while preserving muscle mass.</p>
          </Link>
          
          <Link to="/nutrition" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Supplements Guide</h3>
            <p className="text-gymmawy-gray">Navigate the world of fitness supplements and learn what's worth your money.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Macronutrients101; 