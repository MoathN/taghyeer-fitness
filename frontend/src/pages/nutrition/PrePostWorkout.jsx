import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrePostWorkout = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Pre & Post Workout Nutrition</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Strategic nutrition timing around your workouts can significantly enhance performance, recovery, and results.
          Learn how to fuel your body before, during, and after exercise for optimal fitness gains.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/pre-workout-nutrition.jpg"
          alt="Pre and Post Workout Nutrition"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Why Timing Matters</h2>
          <p className="text-gymmawy-gray mb-4">
            Nutrition timing isn't just about what you eat, but when you eat it. Your body's needs and nutrient utilization 
            change before, during, and after exercise. Strategic nutrient timing can:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2 mb-4">
            <li>Enhance energy availability and performance during workouts</li>
            <li>Minimize muscle protein breakdown during exercise</li>
            <li>Accelerate recovery and muscle protein synthesis post-workout</li>
            <li>Replenish glycogen stores more efficiently</li>
            <li>Optimize hormonal environment for muscle growth and fat loss</li>
          </ul>
          <p className="text-gymmawy-gray">
            While total daily nutrient intake remains the most important factor for long-term progress, strategic 
            nutrient timing can provide an additional edge, especially for serious athletes and those looking to 
            maximize their results.
          </p>
        </div>
      </div>

      {/* Pre-Workout Nutrition Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Pre-Workout Nutrition</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Timing Guidelines</h3>
            <p className="text-gymmawy-gray mb-3">
              The ideal pre-workout meal timing depends on the size of the meal and your individual digestion:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Large meal (400-600 calories):</span> 2-3 hours before training</li>
              <li><span className="font-medium">Medium meal (200-300 calories):</span> 1-2 hours before training</li>
              <li><span className="font-medium">Small snack (100-200 calories):</span> 30-60 minutes before training</li>
              <li><span className="font-medium">Liquid nutrition:</span> 15-30 minutes before training</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Key Nutrients</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Carbohydrates</h4>
                <p className="text-gymmawy-gray">Primary energy source for high-intensity exercise. Aim for 15-60g depending on workout intensity and duration.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: rice, oats, potatoes, fruit, sports drinks</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Protein</h4>
                <p className="text-gymmawy-gray">Helps prevent muscle protein breakdown during training. Aim for 15-30g.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: chicken, whey protein, Greek yogurt, eggs</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Fats</h4>
                <p className="text-gymmawy-gray">Minimal close to training as they slow digestion, but beneficial in earlier pre-workout meals.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: avocado, nuts, olive oil (in moderation)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Sample Pre-Workout Meals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">2-3 Hours Before (Large Meal)</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Chicken breast with rice and vegetables</li>
                <li>Salmon with sweet potato and salad</li>
                <li>Turkey sandwich on whole grain bread</li>
                <li>Oatmeal with protein powder and fruit</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">1-2 Hours Before (Medium Meal)</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Greek yogurt with berries and granola</li>
                <li>Protein smoothie with banana and oats</li>
                <li>Tuna on rice cakes</li>
                <li>Apple with protein shake</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">30-60 Minutes Before (Small Snack)</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Banana</li>
                <li>Rice cake with honey</li>
                <li>Sports drink</li>
                <li>Fruit smoothie</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Fasted Training Considerations</h3>
          <p className="text-gymmawy-gray mb-3">
            Some people prefer training in a fasted state (typically morning workouts before eating). While this can be effective 
            for some individuals, especially for low to moderate intensity activities, be aware that:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li>High-intensity or long-duration exercise performance may be compromised</li>
            <li>Muscle protein breakdown may be increased</li>
            <li>Recovery can be delayed if post-workout nutrition is also delayed</li>
          </ul>
          <p className="text-gymmawy-gray mt-3">
            If you prefer fasted training, consider taking 5-10g of BCAAs before training to help minimize muscle protein breakdown.
          </p>
        </div>
      </div>

      {/* Post-Workout Nutrition Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Post-Workout Nutrition</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Recovery Window</h3>
            <p className="text-gymmawy-gray mb-3">
              While the "anabolic window" is more flexible than once thought, consuming nutrients relatively soon after training offers several benefits:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Accelerated glycogen replenishment</li>
              <li>Enhanced muscle protein synthesis</li>
              <li>Reduced muscle protein breakdown</li>
              <li>Improved overall recovery</li>
            </ul>
            <p className="text-gymmawy-gray mt-3">
              Aim to consume a post-workout meal within 2 hours after training, with sooner being better, especially if training in a fasted state or if it's been several hours since your last meal.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Key Nutrients</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary">Protein</h4>
                <p className="text-gymmawy-gray">Critical for muscle repair and growth. Aim for 20-40g of high-quality protein.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: whey protein, chicken breast, lean beef, eggs, Greek yogurt</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Carbohydrates</h4>
                <p className="text-gymmawy-gray">Replenish glycogen stores. Aim for 0.5-1.0g per kg of bodyweight, higher end for intense training.</p>
                <p className="text-gymmawy-gray text-sm italic">Examples: rice, potatoes, fruit, oats, whole grains</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Fluids & Electrolytes</h4>
                <p className="text-gymmawy-gray">Replace what was lost during exercise. Drink approximately 16-24 oz (500-700ml) per pound lost during training.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">Sample Post-Workout Meals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">Quick Options (Within 30 min)</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Whey protein shake with banana</li>
                <li>Greek yogurt with berries and honey</li>
                <li>Chocolate milk (16-20 oz)</li>
                <li>Protein bar with fruit</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">Complete Meals (Within 2 hours)</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Chicken or turkey with rice and vegetables</li>
                <li>Salmon with sweet potatoes and salad</li>
                <li>Lean beef stir fry with rice noodles</li>
                <li>Egg white omelet with potatoes and spinach</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-1">For Muscle Gain</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Protein shake with oats, banana, and peanut butter</li>
                <li>Chicken and rice bowl with avocado</li>
                <li>Turkey and cheese sandwich with fruit</li>
                <li>Mass gainer shake with whole milk</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Recovery Supplements</h3>
          <p className="text-gymmawy-gray mb-3">
            While whole foods should form the foundation of your post-workout nutrition, these supplements may provide additional benefits:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>
                <span className="font-medium">Whey Protein:</span> Rapidly absorbed, high in leucine, convenient for immediate post-workout consumption
              </li>
              <li>
                <span className="font-medium">Creatine Monohydrate:</span> 3-5g post-workout can help with recovery and strength gains
              </li>
              <li>
                <span className="font-medium">L-Glutamine:</span> May help with immune function and gut health, especially during intense training periods
              </li>
            </ul>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>
                <span className="font-medium">Tart Cherry Juice:</span> Can reduce inflammation and muscle soreness
              </li>
              <li>
                <span className="font-medium">Electrolyte Supplements:</span> Replace minerals lost through sweat, particularly sodium and potassium
              </li>
              <li>
                <span className="font-medium">HMB:</span> May help reduce muscle protein breakdown, especially when training fasted or in a caloric deficit
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hydration Section */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Hydration Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Before Exercise</h3>
            <p className="text-gymmawy-gray mb-3">
              Proper pre-exercise hydration helps ensure optimal performance from the start:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Drink 16-20 oz (500-600ml) of water 2-3 hours before exercise</li>
              <li>Consume another 8-10 oz (240-300ml) 10-20 minutes before starting</li>
              <li>For morning workouts, drink 8-16 oz of water immediately upon waking</li>
              <li>For longer or more intense sessions, consider adding electrolytes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">During Exercise</h3>
            <p className="text-gymmawy-gray mb-3">
              Staying hydrated throughout your workout is essential for maintaining performance:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Aim for 7-10 oz (200-300ml) every 10-20 minutes</li>
              <li>For sessions under 60 minutes, water is usually sufficient</li>
              <li>For longer sessions, include electrolytes and possibly carbohydrates (30-60g per hour)</li>
              <li>In hot environments, increase fluid intake by 30-50%</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">After Exercise</h3>
            <p className="text-gymmawy-gray mb-3">
              Rehydration is a critical component of recovery:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Weigh yourself before and after exercise to determine fluid loss</li>
              <li>Drink 16-24 oz (500-700ml) for every pound (0.5kg) lost during exercise</li>
              <li>Include sodium and other electrolytes to improve fluid retention</li>
              <li>Continue hydrating throughout the day, aiming for clear or pale yellow urine</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Signs of Dehydration</h3>
            <p className="text-gymmawy-gray mb-3">
              Watch for these warning signs that you need to increase fluid intake:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Thirst (you're already dehydrated when you feel thirsty)</li>
              <li>Dark yellow urine</li>
              <li>Fatigue or dizziness</li>
              <li>Dry mouth</li>
              <li>Decreased performance</li>
              <li>Headache</li>
              <li>Muscle cramps</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Electrolytes: Beyond Water</h3>
          <p className="text-gymmawy-gray mb-3">
            Electrolytes are minerals that carry an electric charge and are essential for muscle function, 
            nerve signaling, and fluid balance. The key electrolytes lost in sweat include:
          </p>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
            <li><span className="font-medium">Sodium:</span> The primary electrolyte lost in sweat. Critical for fluid balance and nerve function.</li>
            <li><span className="font-medium">Potassium:</span> Important for muscle contractions and heart function.</li>
            <li><span className="font-medium">Magnesium:</span> Essential for muscle relaxation and preventing cramps.</li>
            <li><span className="font-medium">Calcium:</span> Required for muscle contractions and bone health.</li>
          </ul>
          <p className="text-gymmawy-gray mt-3">
            For most workouts under 60 minutes, water is sufficient. For longer or more intense sessions, 
            especially in hot environments, consider sports drinks, electrolyte tablets, or making your own 
            electrolyte drink with water, a pinch of salt, and natural fruit juice.
          </p>
        </div>
      </div>

      {/* Practical Guidelines Section */}
      <div className="bg-primary/10 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Practical Guidelines for Different Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Strength & Muscle Gain</h3>
            <div className="mb-3">
              <p className="font-medium text-primary">Pre-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Higher carbs (30-60g)</li>
                <li>Moderate protein (20-30g)</li>
                <li>Low fat (5-10g)</li>
                <li>Consider caffeine for performance</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">Post-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>High protein (30-40g)</li>
                <li>High carbs (50-80g)</li>
                <li>Creatine (3-5g)</li>
                <li>Focus on overall calorie surplus</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Fat Loss</h3>
            <div className="mb-3">
              <p className="font-medium text-primary">Pre-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Moderate protein (20-30g)</li>
                <li>Lower carbs (15-30g)</li>
                <li>Minimal fat</li>
                <li>Consider caffeine for metabolism boost</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">Post-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>High protein (30-40g)</li>
                <li>Moderate carbs (20-40g)</li>
                <li>Stay within daily calorie deficit</li>
                <li>Prioritize protein over carbs</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">Endurance Performance</h3>
            <div className="mb-3">
              <p className="font-medium text-primary">Pre-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Higher carbs (60-100g)</li>
                <li>Lower protein (10-20g)</li>
                <li>Focus on easily digestible carbs</li>
                <li>Begin well-hydrated with electrolytes</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-primary">During/Post-Workout:</p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Carbs during (30-60g per hour)</li>
                <li>Post: 3:1 or 4:1 carb to protein ratio</li>
                <li>Aggressive rehydration with electrolytes</li>
                <li>Focus on glycogen replenishment</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gymmawy-gray mb-4">
            Looking to optimize your workout nutrition for better performance and results?
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 mr-4">
            <Link to="/nutrition?tab=calculators">Calculate Your Nutrition Needs</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/30 text-gymmawy-white hover:border-primary hover:bg-primary/10 hover:text-primary">
            <Link to="/contact">Speak with a Nutrition Coach</Link>
          </Button>
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Related Nutrition Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/nutrition/macronutrients-101" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Macronutrients 101</h3>
            <p className="text-gymmawy-gray">Learn the basics of proteins, carbohydrates, and fats and how they fuel your fitness goals.</p>
          </Link>
          
          <Link to="/nutrition" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Supplements Guide</h3>
            <p className="text-gymmawy-gray">Navigate the world of fitness supplements and learn what's worth your money.</p>
          </Link>
          
          <Link to="/nutrition" className="bg-gymmawy-dark/5 p-6 rounded-lg hover:bg-gymmawy-dark/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">Muscle Building Nutrition</h3>
            <p className="text-gymmawy-gray">Nutritional strategies to maximize muscle growth and strength gains.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrePostWorkout; 