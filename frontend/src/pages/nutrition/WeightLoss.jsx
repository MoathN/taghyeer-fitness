import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WeightLoss = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Nutrition for Weight Loss</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Sustainable weight loss is about more than just cutting calories. Learn evidence-based strategies
          to lose fat while preserving muscle mass and maintaining energy levels for your workouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/meal-prep-2.jpg"
          alt="Weight Loss Nutrition"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Beyond Crash Diets</h2>
          <p className="text-gymmawy-gray mb-4">
            Successful, sustainable weight loss is about finding an approach that works with your body and lifestyle, 
            not against them. Crash diets and extreme approaches might produce quick results, but they're rarely sustainable 
            and often lead to rebound weight gain.
          </p>
          <p className="text-gymmawy-gray">
            Our approach focuses on gradual, consistent fat loss while preserving muscle mass, maintaining energy levels,
            and developing habits that can be sustained long-term. This guide will show you how to create a sustainable 
            caloric deficit while optimizing your macronutrient intake and food choices for satiety, performance, and results.
          </p>
        </div>
      </div>

      {/* Creating a Sustainable Caloric Deficit */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Creating a Sustainable Caloric Deficit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Science of Caloric Deficit</h3>
            <p className="text-gymmawy-gray mb-3">
              Weight loss fundamentally requires consuming fewer calories than you expend. Your body then turns to stored energy (primarily fat) to make up the difference.
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>One pound of fat contains approximately 3,500 calories</li>
              <li>A safe, sustainable deficit is typically 500-750 calories per day</li>
              <li>This creates a weight loss of 1-1.5 pounds per week</li>
              <li>Faster weight loss often comes at the cost of muscle mass and metabolic health</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Finding Your Calorie Target</h3>
            <p className="text-gymmawy-gray mb-3">
              To determine your optimal calorie intake, start by calculating your maintenance calories:
            </p>
            <ol className="list-decimal list-inside text-gymmawy-gray space-y-2">
              <li>Calculate your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation</li>
              <li>Multiply by an activity factor (1.2-1.9) based on your daily activity level</li>
              <li>This gives you your Total Daily Energy Expenditure (TDEE)</li>
              <li>Subtract 500-750 calories from your TDEE for sustainable fat loss</li>
              <li>Never go below 1,200 calories for women or 1,500 for men without medical supervision</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Sample Deficit Calculation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">For a 30-year-old woman:</h4>
              <ul className="list-none text-gymmawy-gray space-y-1">
                <li>• Height: 5'6" (167.6 cm)</li>
                <li>• Weight: 160 lbs (72.6 kg)</li>
                <li>• BMR: 1,478 calories</li>
                <li>• Activity: Moderate (1.55)</li>
                <li>• TDEE: 2,291 calories</li>
                <li>• Deficit: 500 calories</li>
                <li>• <span className="font-medium">Target intake: 1,791 calories</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">For a 35-year-old man:</h4>
              <ul className="list-none text-gymmawy-gray space-y-1">
                <li>• Height: 5'10" (177.8 cm)</li>
                <li>• Weight: 190 lbs (86.2 kg)</li>
                <li>• BMR: 1,890 calories</li>
                <li>• Activity: Moderate (1.55)</li>
                <li>• TDEE: 2,930 calories</li>
                <li>• Deficit: 700 calories</li>
                <li>• <span className="font-medium">Target intake: 2,230 calories</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Adjusting Over Time</h3>
          <p className="text-gymmawy-gray mb-3">
            As you lose weight, your calorie needs will change. Your body also adapts to prolonged caloric restriction through metabolic adaptation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Recalculate your calorie needs every 10-15 pounds lost</li>
              <li>Use diet breaks (1-2 weeks at maintenance) every 8-12 weeks</li>
              <li>Implement refeed days (higher calorie days) during prolonged deficits</li>
              <li>Increase your activity level rather than decreasing calories further</li>
            </ul>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Track your weekly average weight, not daily fluctuations</li>
              <li>Aim for consistent, gradual progress (1-2 lbs per week)</li>
              <li>Be patient - sustainable results take time</li>
              <li>If progress stalls for 2+ weeks, reassess your intake and activity</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Protein Requirements During Fat Loss */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Protein Requirements During Fat Loss</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Why Protein Matters Even More During Weight Loss</h3>
            <p className="text-gymmawy-gray mb-3">
              Protein is essential during weight loss for several key reasons:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Preserves lean muscle mass during caloric deficit</li>
              <li>Has the highest thermic effect (20-30% of calories burned during digestion)</li>
              <li>Provides greater satiety compared to carbs and fats</li>
              <li>Supports recovery from exercise and physical activity</li>
              <li>Helps maintain metabolic rate as body weight decreases</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Optimal Protein Intake for Fat Loss</h3>
            <p className="text-gymmawy-gray mb-3">
              Research suggests higher protein intakes during caloric restriction:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Sedentary individuals:</span> 1.2-1.6g per kg of bodyweight</li>
              <li><span className="font-medium">Recreational exercisers:</span> 1.6-2.2g per kg of bodyweight</li>
              <li><span className="font-medium">Athletes/bodybuilders:</span> 2.2-3.0g per kg of bodyweight</li>
              <li><span className="font-medium">During severe caloric restriction:</span> Up to 2.5-3.1g per kg</li>
              <li>Protein intake should be based on target or ideal bodyweight, not current weight (if overweight)</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Quality Protein Sources</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {name: "Chicken Breast", protein: "31g per 100g", calories: "165"},
              {name: "Greek Yogurt", protein: "10g per 100g", calories: "59"},
              {name: "Lean Beef", protein: "26g per 100g", calories: "179"},
              {name: "Eggs", protein: "13g per 100g", calories: "143"},
              {name: "Tuna", protein: "30g per 100g", calories: "132"},
              {name: "Tofu", protein: "8g per 100g", calories: "76"},
              {name: "Cottage Cheese", protein: "11g per 100g", calories: "98"},
              {name: "Turkey Breast", protein: "29g per 100g", calories: "157"},
              {name: "Salmon", protein: "20g per 100g", calories: "206"},
              {name: "Whey Protein", protein: "80g per 100g", calories: "400"},
              {name: "Lentils", protein: "9g per 100g", calories: "116"},
              {name: "Edamame", protein: "11g per 100g", calories: "121"}
            ].map((source, index) => (
              <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm">
                <p className="font-medium text-primary">{source.name}</p>
                <p className="text-xs text-gymmawy-gray">{source.protein}</p>
                <p className="text-xs text-gymmawy-gray">{source.calories} cal</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Protein Distribution Throughout the Day</h3>
          <p className="text-gymmawy-gray mb-3">
            How you distribute your protein intake matters for optimal muscle retention and recovery:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li>Aim for 4-5 protein-rich meals or snacks spread throughout the day</li>
            <li>Target 0.3-0.4g of protein per kg bodyweight per meal (20-40g for most people)</li>
            <li>Include protein in your pre and post-workout nutrition</li>
            <li>Consider casein protein or cottage cheese before bed for overnight muscle preservation</li>
            <li>Maintain consistent protein intake even on rest days</li>
          </ul>
        </div>
      </div>

      {/* Managing Hunger and Cravings */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Managing Hunger and Cravings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Science of Hunger</h3>
            <p className="text-gymmawy-gray mb-3">
              Understanding the physiological and psychological aspects of hunger can help you manage it effectively:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>True hunger builds gradually and can be satisfied with any food</li>
              <li>Cravings come on suddenly and typically target specific foods</li>
              <li>Ghrelin (hunger hormone) increases during dieting</li>
              <li>Leptin (satiety hormone) decreases during weight loss</li>
              <li>Environmental cues and habits strongly influence perceived hunger</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Food Choices for Satiety</h3>
            <p className="text-gymmawy-gray mb-3">
              Some foods keep you fuller for longer calorie-for-calorie. Focus on:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">High protein:</span> Meat, fish, eggs, dairy, legumes</li>
              <li><span className="font-medium">High fiber:</span> Vegetables, fruits, whole grains, legumes</li>
              <li><span className="font-medium">High volume, low calorie:</span> Leafy greens, soups, air-popped popcorn</li>
              <li><span className="font-medium">Healthy fats (in moderation):</span> Avocados, nuts, olive oil</li>
              <li><span className="font-medium">Complex carbs:</span> Potatoes, oats, quinoa, brown rice</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Practical Strategies for Hunger Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Meal Structure and Timing</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Eat protein with every meal and snack</li>
                <li>Start meals with vegetables or soup</li>
                <li>Space meals 3-5 hours apart</li>
                <li>Consider intermittent fasting if it suits your lifestyle</li>
                <li>Plan meals ahead to avoid impulsive choices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Behavioral Strategies</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Drink water before and during meals</li>
                <li>Use smaller plates and bowls</li>
                <li>Practice mindful eating (no screens/distractions)</li>
                <li>Brush teeth after meals to signal "eating time is over"</li>
                <li>Get adequate sleep (7-9 hours)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Dealing with Cravings</h3>
          <p className="text-gymmawy-gray mb-3">
            Cravings are normal during weight loss but can be managed effectively:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li><span className="font-medium">Delay, don't deny:</span> Wait 15 minutes before giving in to a craving</li>
            <li><span className="font-medium">Find healthier substitutes:</span> Greek yogurt for ice cream, dark chocolate for milk chocolate</li>
            <li><span className="font-medium">Plan strategic treats:</span> Schedule indulgences to enjoy mindfully</li>
            <li><span className="font-medium">Address the underlying trigger:</span> Stress, boredom, fatigue, or social situations</li>
            <li><span className="font-medium">Practice the 80/20 rule:</span> 80% nutritious whole foods, 20% more flexible choices</li>
          </ul>
          <p className="text-gymmawy-gray mt-3">
            Remember: Complete restriction often leads to binge behavior. Moderation and planned flexibility are key to sustainable results.
          </p>
        </div>
      </div>

      {/* Tracking Progress Beyond the Scale */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Tracking Progress Beyond the Scale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Limitations of Scale Weight</h3>
            <p className="text-gymmawy-gray mb-3">
              Your scale weight is influenced by many factors beyond fat loss:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Water retention/depletion (can fluctuate 2-5 pounds daily)</li>
              <li>Muscle gain (especially if strength training)</li>
              <li>Glycogen stores (each gram stores 3-4 grams of water)</li>
              <li>Undigested food and waste</li>
              <li>Hormonal fluctuations (especially for women)</li>
              <li>Sodium intake and carbohydrate changes</li>
            </ul>
            <p className="text-gymmawy-gray mt-3">
              True progress isn't linear—it's normal to see fluctuations even when doing everything right.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Better Metrics for Tracking</h3>
            <p className="text-gymmawy-gray mb-3">
              Use these additional measurements to get a more complete picture:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Body measurements:</span> Waist, hips, chest, arms, thighs</li>
              <li><span className="font-medium">Progress photos:</span> Same lighting, time of day, and clothing</li>
              <li><span className="font-medium">Body composition:</span> Body fat percentage via calipers, bioimpedance, or DEXA</li>
              <li><span className="font-medium">Fitness performance:</span> Strength, endurance, flexibility improvements</li>
              <li><span className="font-medium">How clothes fit:</span> Often more reliable than scale weight</li>
              <li><span className="font-medium">Energy levels and mood:</span> Sustainable approaches improve both</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Recommended Tracking Protocol</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Daily</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Food intake (calories/macros)</li>
                <li>Morning weight (optional)</li>
                <li>Hunger levels and energy</li>
                <li>Workout performance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Weekly</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Average weight for the week</li>
                <li>Adherence to nutrition plan</li>
                <li>Weekly calorie deficit achieved</li>
                <li>Overall energy and recovery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Monthly</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Body measurements</li>
                <li>Progress photos</li>
                <li>Body composition (if available)</li>
                <li>Fitness assessments</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Dealing with Plateaus</h3>
          <p className="text-gymmawy-gray mb-3">
            Weight loss plateaus are normal and expected. Here's how to address them:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Confirm it's actually a plateau (2+ weeks of no changes in any metrics)</li>
              <li>Review your tracking for accuracy and consistency</li>
              <li>Reassess your calorie needs as you've lost weight</li>
              <li>Increase physical activity slightly (add 1000-2000 steps)</li>
              <li>Consider reducing calories by 100-200 per day (if not already too low)</li>
            </ul>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Implement a diet break at maintenance calories for 1-2 weeks</li>
              <li>Adjust macronutrient distribution (often more protein)</li>
              <li>Manage stress levels and prioritize quality sleep</li>
              <li>Change up your exercise routine to create new stimulus</li>
              <li>Be patient – sometimes continuing your plan works best</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Related Nutrition Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/nutrition/macronutrients-101" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Macronutrients 101</h3>
            <p className="text-gymmawy-gray">Learn the basics of proteins, carbohydrates, and fats and how they affect your weight loss goals.</p>
          </Link>
          
          <Link to="/nutrition/pre-post-workout" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Pre & Post Workout Nutrition</h3>
            <p className="text-gymmawy-gray">Optimize workout performance and recovery even while in a caloric deficit.</p>
          </Link>
          
          <Link to="/nutrition/fat-loss-meal-plan" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Fat Loss Meal Plan</h3>
            <p className="text-gymmawy-gray">Get a structured meal plan designed specifically for sustainable fat loss.</p>
          </Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gymmawy-gray mb-4">
          Ready to get a personalized weight loss plan based on your specific goals and needs?
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 mr-4">
          <Link to="/nutrition?tab=calculators">Calculate Your Calorie Needs</Link>
        </Button>
        <Button asChild variant="outline" className="border-primary/30 text-gymmawy-white hover:border-primary hover:bg-primary/10 hover:text-primary">
          <Link to="/contact">Get a Custom Plan</Link>
        </Button>
      </div>
    </div>
  );
};

export default WeightLoss; 