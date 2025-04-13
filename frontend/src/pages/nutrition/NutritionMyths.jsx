import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NutritionMyths = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Nutrition Myths Debunked</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          The fitness and nutrition world is full of misconceptions and half-truths. Learn to separate evidence-based 
          facts from persistent myths to make more informed decisions about your nutrition.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/nutrition-consultation.jpg"
          alt="Nutrition Myths"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Why Myths Persist</h2>
          <p className="text-gymmawy-gray mb-4">
            Nutrition myths persist for many reasons: oversimplification of complex science, misinterpretation of research, 
            marketing strategies, and the human tendency to seek simple solutions to complex problems. Even when debunked, 
            these myths can remain deeply ingrained in popular culture.
          </p>
          <p className="text-gymmawy-gray">
            This guide examines common nutrition myths through the lens of current scientific evidence. By understanding 
            what the research actually shows, you can make more informed decisions about your nutrition and avoid falling 
            for misleading claims that might hinder your progress.
          </p>
        </div>
      </div>

      {/* Meal Frequency and Metabolism */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Meal Frequency and Metabolism</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: Eating Small, Frequent Meals "Stokes the Metabolic Fire"</h3>
            <p className="text-gymmawy-gray mb-3">
              One of the most persistent nutrition myths is that eating 5-6 small meals throughout the day increases your metabolism 
              compared to eating fewer, larger meals.
            </p>
            <p className="text-gymmawy-gray">
              The theory suggests that digestion requires energy (thermic effect of food or TEF), so frequent eating keeps your 
              metabolism consistently elevated.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              Research has consistently shown that meal frequency does not significantly impact metabolic rate or fat loss when 
              calories and macronutrients are held constant:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Total calories consumed matters more than how they're distributed</li>
              <li>TEF is proportional to total calories and macronutrient composition, not meal frequency</li>
              <li>Multiple studies comparing varying meal frequencies show no metabolic advantage</li>
              <li>Some intermittent fasting studies even show metabolic benefits from reduced meal frequency</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">What Actually Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Meal Timing Flexibility</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Choose a meal frequency that works for your lifestyle and preferences</li>
                <li>Focus on total daily/weekly calorie intake for weight management</li>
                <li>Prioritize protein distribution throughout the day for muscle preservation/growth</li>
                <li>Some people function better with fewer larger meals, others with more frequent eating</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Individual Factors to Consider</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Hunger management (some people control hunger better with fewer larger meals)</li>
                <li>Training schedule (nutrient timing around workouts can be beneficial)</li>
                <li>Blood sugar regulation (may influence optimal meal frequency for some individuals)</li>
                <li>Lifestyle constraints (work schedule, family meals, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Related Myth: Skipping Breakfast Slows Metabolism</h3>
          <p className="text-gymmawy-gray mb-3">
            The idea that breakfast is the "most important meal" and that skipping it slows metabolism is another common myth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">The Myth</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Breakfast "jumpstarts" your metabolism</li>
                <li>Skipping breakfast puts your body in "starvation mode"</li>
                <li>Breakfast skippers tend to gain more weight</li>
                <li>Morning eating is essential for optimal health</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">The Evidence</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Controlled studies show no metabolic disadvantage to skipping breakfast</li>
                <li>Time-restricted eating/intermittent fasting can be as effective for weight management</li>
                <li>Correlation studies failing to account for lifestyle factors created this myth</li>
                <li>Individual preference is key—some perform better with breakfast, others without</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Carbs at Night Myths */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Carbs at Night Myths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: Eating Carbs at Night Makes You Fat</h3>
            <p className="text-gymmawy-gray mb-3">
              A widespread belief is that consuming carbohydrates in the evening or before bed will lead to fat gain, based on the 
              theory that:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Metabolism slows down at night</li>
              <li>Carbs aren't "burned off" during sleep</li>
              <li>Insulin sensitivity decreases in the evening</li>
              <li>The body preferentially stores carbs as fat at night</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              Research paints a very different picture about carbohydrate timing:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Total caloric intake over time determines weight gain/loss, not carb timing</li>
              <li>Several studies show carb intake at night doesn't impair fat loss when calories are controlled</li>
              <li>Some research shows improved body composition with evening carb intake</li>
              <li>A 6-month study comparing morning vs. evening carb intake found evening consumption led to better weight loss and satiety</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Potential Benefits of Evening Carbs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Performance Considerations</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Improved glycogen replenishment after evening workouts</li>
                <li>Can enhance recovery from intense training</li>
                <li>May support next-day morning performance</li>
                <li>Better adherence to diet plan (enjoying carbs when most people socialize)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Sleep & Recovery Benefits</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Carbs can increase tryptophan availability and serotonin production</li>
                <li>May increase melatonin production, improving sleep quality</li>
                <li>Moderate carb intake at night may reduce cortisol (stress hormone)</li>
                <li>Can reduce midnight hunger and improve sleep continuity</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">A Balanced Approach to Carb Timing</h3>
          <p className="text-gymmawy-gray mb-3">
            Rather than eliminating evening carbs, consider these evidence-based approaches:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>Time larger carb meals around your training sessions when possible</li>
              <li>Distribute protein intake throughout the day regardless of carb timing</li>
              <li>Consider your individual sleep response to evening carbs</li>
              <li>Focus on total daily carb intake to align with your goals</li>
            </ul>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
              <li>If evening carbs help you sleep, include them in your plan</li>
              <li>For those with insulin resistance, earlier carb intake may be beneficial</li>
              <li>Experiment to find what works best for your body and lifestyle</li>
              <li>Remember that adherence to your overall plan is more important than timing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fat Burning Foods and Supplements */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Fat Burning Foods and Supplements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: Certain Foods Have "Negative Calories"</h3>
            <p className="text-gymmawy-gray mb-3">
              A persistent myth is that certain foods like celery, cucumber, or grapefruit require more energy to digest than they provide, 
              resulting in "negative calories" and automatic fat loss.
            </p>
            <p className="text-gymmawy-gray">
              Similarly, foods like chili peppers, green tea, or apple cider vinegar are often promoted as having magical fat-burning properties 
              that significantly increase metabolism and melt away fat.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              Scientific research on these claims shows:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>No food has "negative calories" - even very low-calorie foods provide more energy than they take to digest</li>
              <li>The thermic effect of food (TEF) is typically only 10-20% of the food's caloric content</li>
              <li>Foods with alleged "fat-burning" properties have minimal effects on metabolism (typically 50-100 calories per day at most)</li>
              <li>These small effects are usually not significant enough to meaningfully impact weight loss</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: Fat Burning Supplements Significantly Boost Metabolism</h3>
            <p className="text-gymmawy-gray mb-3">
              The supplement industry promotes various products claiming to:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>"Torch fat" or "melt away pounds"</li>
              <li>"Boost metabolism by 25% or more"</li>
              <li>"Target stubborn fat areas"</li>
              <li>"Work while you sleep" to burn calories</li>
              <li>Allow weight loss "without diet or exercise"</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              Research on fat-burning supplements shows:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Most have minimal effects on metabolism (typically less than 5%)</li>
              <li>None can target specific fat areas (spot reduction isn't physiologically possible)</li>
              <li>Effects are usually temporary and diminish with continued use</li>
              <li>Benefits are often too small to be noticeable without caloric restriction</li>
              <li>Many contain stimulants that primarily reduce appetite rather than increasing fat oxidation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">What Actually Helps with Fat Loss</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Dietary Approaches</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Consistent caloric deficit (10-20% below maintenance)</li>
                <li>Adequate protein intake (1.6-2.2g/kg of bodyweight)</li>
                <li>High volume, nutrient-dense foods for satiety</li>
                <li>Sufficient fiber intake (25-35g daily)</li>
                <li>Proper hydration (often mistaken for hunger)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Effective Strategies</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Strength training to preserve/build muscle</li>
                <li>Sufficient protein for muscle preservation</li>
                <li>Adequate sleep (7-9 hours) for hormonal balance</li>
                <li>Stress management (cortisol impacts fat storage)</li>
                <li>Consistency over perfection in your approach</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Supplements with Modest Evidence</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Caffeine (temporary metabolic increase and appetite suppression)</li>
                <li>Protein supplements (support satiety and muscle preservation)</li>
                <li>Green tea extract (minimal thermogenic effects)</li>
                <li>Fiber supplements (increased fullness, reduced calorie absorption)</li>
                <li>Still rely on caloric deficit for effectiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence-Based Nutrition Practices */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Evidence-Based Nutrition Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: "Clean Eating" Is Required for Health and Fitness</h3>
            <p className="text-gymmawy-gray mb-3">
              A common belief is that only "clean" or "natural" foods should be consumed, while processed foods are entirely unhealthy 
              and should be completely avoided:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>All processed foods are "toxic" or harmful</li>
              <li>Only organic, non-GMO foods are healthy</li>
              <li>You must eliminate entire food groups (sugar, dairy, gluten) even without medical need</li>
              <li>Fitness results require strict "clean eating" with no flexibility</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              Research shows a more balanced perspective:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Food quality matters, but not all processed foods are equal or harmful</li>
              <li>Total diet composition is more important than individual foods</li>
              <li>Flexible dieting approaches with 80-90% nutrient-dense foods can be as effective as rigid "clean eating"</li>
              <li>Unnecessary restriction often leads to poorer adherence and potentially disordered eating</li>
              <li>Studies show similar results for body composition when macronutrients and calories are equated, regardless of food choices</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Myth: All Calories Are Created Equal</h3>
            <p className="text-gymmawy-gray mb-3">
              On the opposite extreme is the myth that food quality doesn't matter at all—that "a calorie is a calorie" regardless of source:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Only total calories determine weight changes</li>
              <li>Macronutrient composition is irrelevant</li>
              <li>Food quality doesn't impact body composition</li>
              <li>Health and weight management are the same thing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">The Evidence</h3>
            <p className="text-gymmawy-gray mb-3">
              A more nuanced perspective is supported by research:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Calories are the primary determinant of weight changes, but not the only factor</li>
              <li>Protein has a higher thermic effect and supports lean mass better than other macronutrients</li>
              <li>Highly processed foods often lead to overconsumption due to palatability and lower satiety</li>
              <li>Food quality impacts hormone regulation, nutrient absorption, and gut health</li>
              <li>Health markers can improve or worsen independent of weight changes based on food choices</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Evidence-Based Nutrition Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Foundational Principles</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Energy balance is fundamental for weight management</li>
                <li>Protein needs increase with activity level (1.6-2.2g/kg for most active people)</li>
                <li>Carbohydrate and fat distribution can be flexible based on preference</li>
                <li>80-90% of calories from minimally processed, nutrient-dense foods</li>
                <li>10-20% discretionary calories for enjoyment and sustainability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Sustainable Practices</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Focus on consistency rather than perfection</li>
                <li>Consider personal preference and cultural factors in food choices</li>
                <li>Avoid unnecessary restrictions not based on medical needs</li>
                <li>Develop a healthy relationship with all foods</li>
                <li>Make evidence-based decisions rather than following trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Critical Thinking in Nutrition</h2>
        <p className="text-gymmawy-gray mb-6">
          When evaluating nutrition claims, apply these critical thinking principles:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
            <li>Consider the source—look for credentials and potential conflicts of interest</li>
            <li>Evaluate the evidence—anecdotes aren't as reliable as controlled studies</li>
            <li>Check for consensus—does the claim align with most research or is it an outlier?</li>
            <li>Be wary of absolutist claims—nutrition science rarely deals in absolutes</li>
          </ul>
          <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
            <li>Understand the context—research findings may apply to specific populations</li>
            <li>Consider magnitude—statistical significance doesn't always mean practical importance</li>
            <li>Watch for logical fallacies—correlation doesn't prove causation</li>
            <li>Be skeptical of quick fixes—sustainable results typically require consistent habits</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/nutrition">Explore More Nutrition Topics</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/nutrition/macronutrients-101">Learn About Macronutrients</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NutritionMyths; 