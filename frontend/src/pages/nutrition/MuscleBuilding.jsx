import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MuscleBuilding = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Muscle Building Nutrition</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Building lean muscle requires more than just lifting weights. Learn how to optimize your nutrition
          to support muscle protein synthesis, enhance recovery, and maximize your gains effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/muscle-meal-prep.jpg"
          alt="Muscle Building Nutrition"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Building Muscle Strategically</h2>
          <p className="text-gymmawy-gray mb-4">
            Muscle growth (hypertrophy) occurs when muscle protein synthesis exceeds muscle protein breakdown
            over time. While training provides the stimulus, nutrition provides the building blocks and energy
            needed for recovery and growth.
          </p>
          <p className="text-gymmawy-gray">
            Our approach focuses on creating the optimal nutritional environment for muscle growth while minimizing
            unnecessary fat gain. This guide will show you how to calculate your caloric needs, optimize your
            macronutrient intake, time your nutrition around workouts, and choose the right foods to support
            your muscle-building goals.
          </p>
        </div>
      </div>

      {/* Caloric Surplus for Muscle Growth */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Caloric Surplus for Muscle Growth</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Why You Need a Surplus</h3>
            <p className="text-gymmawy-gray mb-3">
              Building new muscle tissue requires energy. A caloric surplus provides:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Extra energy to support the energy-intensive process of protein synthesis</li>
              <li>Optimal hormonal environment (particularly for testosterone and IGF-1)</li>
              <li>Glycogen replenishment for training performance</li>
              <li>Resources for recovery and adaptation</li>
              <li>Reduced risk of overtraining and excessive catabolism</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Finding Your Optimal Surplus</h3>
            <p className="text-gymmawy-gray mb-3">
              The size of your surplus should be based on your training experience and body composition:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Beginners:</span> 300-500 calories above maintenance</li>
              <li><span className="font-medium">Intermediate:</span> 200-350 calories above maintenance</li>
              <li><span className="font-medium">Advanced:</span> 100-200 calories above maintenance</li>
              <li>Higher surpluses lead to faster weight gain but more fat accumulation</li>
              <li>A good target is gaining 0.25-0.5% of your bodyweight per week (0.5-1 lb for a 200 lb person)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Sample Surplus Calculation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">For a 25-year-old man (beginner):</h4>
              <ul className="list-none text-gymmawy-gray space-y-1">
                <li>• Height: 5'10" (177.8 cm)</li>
                <li>• Weight: 170 lbs (77.1 kg)</li>
                <li>• BMR: 1,820 calories</li>
                <li>• Activity: Moderate (1.55)</li>
                <li>• TDEE: 2,821 calories</li>
                <li>• Surplus: 400 calories</li>
                <li>• <span className="font-medium">Target intake: 3,221 calories</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">For a 30-year-old woman (intermediate):</h4>
              <ul className="list-none text-gymmawy-gray space-y-1">
                <li>• Height: 5'6" (167.6 cm)</li>
                <li>• Weight: 135 lbs (61.2 kg)</li>
                <li>• BMR: 1,386 calories</li>
                <li>• Activity: Moderate (1.55)</li>
                <li>• TDEE: 2,148 calories</li>
                <li>• Surplus: 250 calories</li>
                <li>• <span className="font-medium">Target intake: 2,398 calories</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Monitoring and Adjusting</h3>
          <p className="text-gymmawy-gray mb-3">
            Effective muscle building requires careful monitoring and adjusting of your caloric intake:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Track your weight 2-3 times per week (same time, conditions)</li>
              <li>Monitor strength gains and workout performance</li>
              <li>Take body measurements (arms, chest, thighs) monthly</li>
              <li>Take progress photos every 4-6 weeks in consistent lighting</li>
            </ul>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>If gaining too quickly ({'>'}1% bodyweight/week), reduce surplus</li>
              <li>If not gaining or progressing, increase calories by 5-10%</li>
              <li>Adjust your training volume with your caloric intake</li>
              <li>Plan strategic diet breaks or mini-cuts if fat gain becomes excessive</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Protein Timing and Distribution */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Protein Timing and Distribution</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Optimal Protein Intake for Muscle Growth</h3>
            <p className="text-gymmawy-gray mb-3">
              Research suggests the following protein intakes for muscle building:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Beginner lifters:</span> 1.6-1.8g per kg of bodyweight</li>
              <li><span className="font-medium">Intermediate lifters:</span> 1.8-2.2g per kg of bodyweight</li>
              <li><span className="font-medium">Advanced lifters:</span> 2.2-3.0g per kg of bodyweight</li>
              <li><span className="font-medium">During a large surplus:</span> Lower end of recommendations</li>
              <li><span className="font-medium">During a small surplus:</span> Higher end of recommendations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Anabolic Window</h3>
            <p className="text-gymmawy-gray mb-3">
              The concept of the "anabolic window" has evolved based on recent research:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Post-workout protein is important but not as time-sensitive as once thought</li>
              <li>The anabolic window extends several hours before and after training</li>
              <li>Total daily protein intake is more important than precise timing</li>
              <li>Pre-workout protein can be as effective as post-workout protein</li>
              <li>For fasted training, post-workout protein becomes more critical</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Protein Distribution Strategies</h3>
          <p className="text-gymmawy-gray mb-3">
            How you distribute your protein throughout the day impacts muscle protein synthesis:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">Pulse Feeding</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>4-6 evenly spaced protein servings</li>
                <li>20-40g protein per meal</li>
                <li>3-4 hours between feedings</li>
                <li>Maximizes 24-hour muscle protein synthesis</li>
                <li>Most research-supported approach</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">Pre/Post Training Focus</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Higher protein meals around training</li>
                <li>25-40g pre-workout (1-2 hours before)</li>
                <li>25-40g post-workout (within 2 hours)</li>
                <li>Moderate protein at other meals</li>
                <li>Good for time-restricted eating</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">Overnight Recovery</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Focus on pre-sleep protein</li>
                <li>30-40g of slow-digesting protein</li>
                <li>Casein protein or cottage cheese ideal</li>
                <li>Supports overnight recovery</li>
                <li>Particularly effective for PM training</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Optimal Protein Sources</h3>
          <p className="text-gymmawy-gray mb-3">
            Not all protein sources are equally effective for muscle building:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              {name: "Whey Protein", quality: "Very High", leucine: "High", digestion: "Fast"},
              {name: "Chicken Breast", quality: "High", leucine: "Medium", digestion: "Medium"},
              {name: "Lean Beef", quality: "High", leucine: "Medium-High", digestion: "Medium"},
              {name: "Eggs", quality: "Very High", leucine: "Medium", digestion: "Medium"},
              {name: "Greek Yogurt", quality: "High", leucine: "Medium", digestion: "Medium-Fast"},
              {name: "Casein Protein", quality: "High", leucine: "Medium", digestion: "Slow"},
              {name: "Fish", quality: "High", leucine: "Medium", digestion: "Medium-Fast"},
              {name: "Soy Protein", quality: "Medium", leucine: "Low-Medium", digestion: "Medium"}
            ].map((source, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-medium text-primary">{source.name}</p>
                <p className="text-xs text-gymmawy-gray">Quality: {source.quality}</p>
                <p className="text-xs text-gymmawy-gray">Leucine: {source.leucine}</p>
                <p className="text-xs text-gymmawy-gray">Digestion: {source.digestion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Nutrients for Recovery */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Supporting Nutrients for Recovery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Beyond Protein: Key Nutrients</h3>
            <p className="text-gymmawy-gray mb-3">
              While protein gets most of the attention, other nutrients are critical for muscle growth:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Carbohydrates:</span> Fuel workouts and support recovery</li>
              <li><span className="font-medium">Essential fatty acids:</span> Support hormone production</li>
              <li><span className="font-medium">Vitamins:</span> Act as cofactors in protein synthesis</li>
              <li><span className="font-medium">Minerals:</span> Support muscle contraction and hydration</li>
              <li><span className="font-medium">Water:</span> Essential for cellular function and recovery</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Carbohydrates and Muscle Building</h3>
            <p className="text-gymmawy-gray mb-3">
              Carbohydrates play several key roles in the muscle-building process:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Replenish muscle glycogen for high-intensity training</li>
              <li>Spare protein from being used as energy</li>
              <li>Stimulate insulin release, which is anabolic</li>
              <li>Reduce cortisol (muscle-wasting hormone) levels</li>
              <li>Recommended intake: 4-7g per kg of bodyweight</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Healthy Fats for Hormonal Health</h3>
            <p className="text-gymmawy-gray mb-3">
              Dietary fats play a crucial role in hormone production and overall health:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Maintain testosterone levels (critical for muscle growth)</li>
              <li>Support cell membrane health and function</li>
              <li>Reduce inflammation and support recovery</li>
              <li>Increase absorption of fat-soluble vitamins (A, D, E, K)</li>
              <li>Recommended intake: 0.5-1g per kg of bodyweight</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Micronutrients for Muscle Growth</h3>
            <p className="text-gymmawy-gray mb-3">
              These vitamins and minerals are particularly important for muscle building:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Vitamin D:</span> Supports testosterone, strength, and recovery</li>
              <li><span className="font-medium">Zinc:</span> Essential for testosterone production and protein synthesis</li>
              <li><span className="font-medium">Magnesium:</span> Supports muscle contraction and recovery</li>
              <li><span className="font-medium">B vitamins:</span> Critical for energy production and protein metabolism</li>
              <li><span className="font-medium">Antioxidants:</span> Help manage exercise-induced oxidative stress</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Nutrient Timing for Recovery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Pre-Workout Nutrition</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Consume 1-3 hours before training</li>
                <li>20-40g protein</li>
                <li>30-60g carbohydrates</li>
                <li>Low in fat and fiber for easier digestion</li>
                <li>200-400ml of water</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Intra-Workout Nutrition</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>For sessions {'>'}60 minutes</li>
                <li>5-10g EAAs or 20-30g whey (optional)</li>
                <li>30-60g carbohydrates (for longer sessions)</li>
                <li>500-1000ml water with electrolytes</li>
                <li>5g creatine (can be taken any time)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Post-Workout Nutrition</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Consume within 2 hours after training</li>
                <li>30-40g fast-digesting protein</li>
                <li>40-80g carbohydrates</li>
                <li>500-750ml water for rehydration</li>
                <li>Low in fat to speed digestion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bulking vs. Traditional Bulking */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Clean Bulking vs. Traditional Bulking</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Traditional Bulking</h3>
            <p className="text-gymmawy-gray mb-3">
              The "see food, eat food" approach focused on maximum weight gain:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Large caloric surplus (500-1000+ calories)</li>
              <li>Less emphasis on food quality</li>
              <li>Faster weight gain (1-2+ lbs per week)</li>
              <li>Higher ratio of fat to muscle gain</li>
              <li>Often requires lengthy cutting phases after</li>
              <li>Can negatively impact health markers</li>
              <li>May reduce insulin sensitivity over time</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Clean Bulking</h3>
            <p className="text-gymmawy-gray mb-3">
              A more measured approach focused on quality muscle gain:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Moderate caloric surplus (200-500 calories)</li>
              <li>Emphasis on nutrient-dense whole foods</li>
              <li>Slower weight gain (0.25-0.5% of bodyweight per week)</li>
              <li>Better ratio of muscle to fat gain</li>
              <li>Shorter cutting phases needed</li>
              <li>Maintains or improves health markers</li>
              <li>Better for long-term progress</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Comparison: Muscle-to-Fat Gain Ratio</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gymmawy-dark/10">
                  <th className="p-2 text-primary">Approach</th>
                  <th className="p-2 text-primary">Caloric Surplus</th>
                  <th className="p-2 text-primary">Weekly Gain</th>
                  <th className="p-2 text-primary">Muscle Gain</th>
                  <th className="p-2 text-primary">Fat Gain</th>
                  <th className="p-2 text-primary">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gymmawy-dark/10">
                  <td className="p-2 text-gymmawy-gray">Clean Bulk</td>
                  <td className="p-2 text-gymmawy-gray">200-300 cal</td>
                  <td className="p-2 text-gymmawy-gray">0.25-0.5 lb</td>
                  <td className="p-2 text-gymmawy-gray">60-70%</td>
                  <td className="p-2 text-gymmawy-gray">30-40%</td>
                  <td className="p-2 text-gymmawy-gray">Experienced lifters, aesthetic focus</td>
                </tr>
                <tr className="border-b border-gymmawy-dark/10">
                  <td className="p-2 text-gymmawy-gray">Moderate Bulk</td>
                  <td className="p-2 text-gymmawy-gray">300-500 cal</td>
                  <td className="p-2 text-gymmawy-gray">0.5-1 lb</td>
                  <td className="p-2 text-gymmawy-gray">50%</td>
                  <td className="p-2 text-gymmawy-gray">50%</td>
                  <td className="p-2 text-gymmawy-gray">Intermediate lifters, balanced approach</td>
                </tr>
                <tr>
                  <td className="p-2 text-gymmawy-gray">Traditional Bulk</td>
                  <td className="p-2 text-gymmawy-gray">500-1000+ cal</td>
                  <td className="p-2 text-gymmawy-gray">1-2+ lb</td>
                  <td className="p-2 text-gymmawy-gray">30-40%</td>
                  <td className="p-2 text-gymmawy-gray">60-70%</td>
                  <td className="p-2 text-gymmawy-gray">Beginners, hardgainers, strength athletes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Clean Bulking Food Choices</h3>
            <p className="text-gymmawy-gray mb-3">
              Focus on these nutrient-dense foods for quality muscle gain:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Proteins:</span> Lean meats, fish, eggs, Greek yogurt, quality protein powders</li>
              <li><span className="font-medium">Carbs:</span> Whole grains, oats, potatoes, sweet potatoes, fruits, rice</li>
              <li><span className="font-medium">Fats:</span> Avocados, nuts, olive oil, fatty fish, nut butters</li>
              <li><span className="font-medium">Vegetables:</span> Dark leafy greens, cruciferous vegetables, colorful produce</li>
              <li><span className="font-medium">Supplements:</span> Whey protein, creatine monohydrate, vitamin D, omega-3s</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Finding Your Personal Sweet Spot</h3>
            <p className="text-gymmawy-gray mb-3">
              The optimal approach depends on your individual factors:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Body type:</span> Ectomorphs (hardgainers) may benefit from larger surpluses</li>
              <li><span className="font-medium">Training experience:</span> Beginners can gain muscle with smaller surpluses</li>
              <li><span className="font-medium">Natural hormone status:</span> Higher testosterone allows more efficient bulking</li>
              <li><span className="font-medium">Current body fat:</span> Lower body fat (10-15%) allows for longer bulking phases</li>
              <li><span className="font-medium">Goals:</span> Strength athletes can tolerate more fat gain than physique athletes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Ready to Build Serious Muscle?</h2>
        <p className="text-gymmawy-gray mb-6">
          Combine this nutrition knowledge with our specially designed muscle building workout programs for maximum results. 
          Our science-based approach to hypertrophy training will help you efficiently build quality muscle mass.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/workout-plans">Explore Muscle Building Workouts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/nutrition/fat-loss-meal-plan">View Sample Muscle Building Meal Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MuscleBuilding; 