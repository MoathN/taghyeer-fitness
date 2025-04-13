import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SupplementsGuide = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link to="/nutrition" className="text-primary hover:underline flex items-center gap-1 mb-4">
          ← Back to Nutrition
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-primary">Supplements Guide</h1>
        <p className="text-gymmawy-gray max-w-3xl">
          Navigate the complex world of fitness supplements with evidence-based information. Learn which supplements 
          are effective, how to use them safely, and how to incorporate them into your fitness regimen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <img
          src="/img/nutrition/protein-meal.jpg"
          alt="Fitness Supplements"
          className="rounded-lg w-full h-64 object-cover lg:col-span-1"
        />
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Understanding Supplements</h2>
          <p className="text-gymmawy-gray mb-4">
            Dietary supplements are products intended to supplement the diet by providing nutrients that may otherwise 
            not be consumed in sufficient quantities. In the fitness world, supplements are often used to enhance 
            performance, aid recovery, and support specific goals like muscle gain or fat loss.
          </p>
          <p className="text-gymmawy-gray">
            While no supplement can replace a balanced diet and proper training, certain products have solid 
            scientific evidence supporting their efficacy. This guide will help you understand which supplements are 
            worth considering, how to use them effectively, and how to avoid wasting money on products with limited benefits.
          </p>
        </div>
      </div>

      {/* Essential Supplements for Beginners */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Essential Supplements for Beginners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Protein Powder</h3>
            <p className="text-gymmawy-gray mb-3">
              Protein powder is perhaps the most common and useful supplement for most fitness enthusiasts:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Convenient source of high-quality protein</li>
              <li>Helps meet daily protein requirements (1.6-2.2g per kg of bodyweight)</li>
              <li>Useful for post-workout recovery</li>
              <li>Available in various forms (whey, casein, plant-based)</li>
              <li>Effective for muscle building and preservation during fat loss</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Types of Protein Powder</h3>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Whey Protein:</span> Fast-digesting, high in BCAAs, ideal post-workout</li>
              <li><span className="font-medium">Casein Protein:</span> Slow-digesting, good before bed or between meals</li>
              <li><span className="font-medium">Plant Proteins:</span> Suitable for vegetarians/vegans (pea, rice, hemp)</li>
              <li><span className="font-medium">Whey Isolate:</span> Higher protein percentage, less lactose, better for those with sensitivities</li>
              <li><span className="font-medium">Protein Blends:</span> Combination of fast and slow proteins for sustained release</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Creatine Monohydrate</h3>
            <p className="text-gymmawy-gray mb-3">
              One of the most well-researched and effective supplements available:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Increases phosphocreatine stores in muscles</li>
              <li>Improves strength and power output</li>
              <li>Enhances muscle cell volumization</li>
              <li>Supports increased work capacity during training</li>
              <li>May provide cognitive benefits</li>
              <li>Extremely safe with extensive research backing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">How to Use Creatine</h3>
            <p className="text-gymmawy-gray mb-3">
              Simple and effective supplementation protocol:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Standard dosage:</span> 3-5g daily</li>
              <li><span className="font-medium">Loading phase (optional):</span> 20g daily for 5-7 days, then 3-5g maintenance</li>
              <li><span className="font-medium">Timing:</span> Any time of day is effective</li>
              <li><span className="font-medium">Consistency:</span> Daily supplementation for best results</li>
              <li>Can be mixed with water, juice, or protein shakes</li>
              <li>Monohydrate form has the most research and is cost-effective</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Multivitamins & Minerals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gymmawy-gray mb-3">
                While whole foods should be your primary source of micronutrients, a multivitamin can help fill potential gaps:
              </p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Insurance policy against nutritional deficiencies</li>
                <li>Supports overall health and immune function</li>
                <li>May help with recovery from intense training</li>
                <li>Particularly useful during caloric restriction</li>
                <li>Look for products with appropriate doses (not megadoses)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Key Vitamins & Minerals for Athletes</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li><span className="font-medium">Vitamin D:</span> Bone health, immune function, hormone production</li>
                <li><span className="font-medium">Magnesium:</span> Muscle function, energy production, recovery</li>
                <li><span className="font-medium">Zinc:</span> Immune health, hormone production, protein synthesis</li>
                <li><span className="font-medium">B vitamins:</span> Energy metabolism, red blood cell production</li>
                <li><span className="font-medium">Iron:</span> Oxygen transport, energy production (especially for women)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-Workout and Performance Enhancers */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Pre-Workout and Performance Enhancers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Pre-Workout Supplements</h3>
            <p className="text-gymmawy-gray mb-3">
              These products aim to enhance energy, focus, and performance during training:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Typically contain a blend of ingredients</li>
              <li>Can increase training intensity and focus</li>
              <li>May enhance muscular endurance</li>
              <li>Effects vary widely between products and individuals</li>
              <li>Not necessary but can be helpful for demanding sessions</li>
              <li>Best used strategically, not as a daily necessity</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Key Pre-Workout Ingredients</h3>
            <p className="text-gymmawy-gray mb-3">
              Look for products with these evidence-based ingredients:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li><span className="font-medium">Caffeine:</span> 150-300mg for increased alertness and performance</li>
              <li><span className="font-medium">Citrulline Malate:</span> 6-8g for improved blood flow and endurance</li>
              <li><span className="font-medium">Beta-Alanine:</span> 3-5g for enhanced muscular endurance (causes tingling)</li>
              <li><span className="font-medium">Creatine:</span> 3-5g for strength and power (as covered above)</li>
              <li><span className="font-medium">L-Theanine:</span> Often paired with caffeine for smooth energy without jitters</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Caffeine</h3>
            <p className="text-gymmawy-gray mb-3">
              One of the most effective performance enhancers available:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Increases alertness and focus</li>
              <li>Reduces perception of effort during exercise</li>
              <li>Improves endurance performance</li>
              <li>Can enhance strength and power output</li>
              <li>Effective dosage: 3-6mg per kg of bodyweight</li>
              <li>Timing: 30-60 minutes before exercise</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Beta-Alanine</h3>
            <p className="text-gymmawy-gray mb-3">
              Effective for activities lasting 1-4 minutes:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Buffers acid in muscles during high-intensity exercise</li>
              <li>Reduces fatigue during repeated high-intensity efforts</li>
              <li>Particularly effective for activities in the 60-240 second range</li>
              <li>Loading phase: 3-5g daily for 2-4 weeks</li>
              <li>Maintenance: 3-5g daily</li>
              <li>Harmless tingling sensation (paresthesia) is common</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">BCAAs and EAAs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Branched-Chain Amino Acids (BCAAs)</h4>
              <p className="text-gymmawy-gray mb-3">
                A common but somewhat overrated supplement:
              </p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Includes leucine, isoleucine, and valine</li>
                <li>Limited benefits if protein intake is adequate</li>
                <li>May help during fasted training</li>
                <li>Leucine is the primary driver of muscle protein synthesis</li>
                <li>Generally unnecessary if consuming sufficient protein</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Essential Amino Acids (EAAs)</h4>
              <p className="text-gymmawy-gray mb-3">
                More comprehensive amino acid supplement:
              </p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Contains all nine essential amino acids</li>
                <li>Superior to BCAAs for muscle protein synthesis</li>
                <li>Useful during fasted training or caloric restriction</li>
                <li>Can support recovery between sessions</li>
                <li>Still secondary to whole food protein and protein powder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery and Health Supplements */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Recovery and Health Supplements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Omega-3 Fatty Acids</h3>
            <p className="text-gymmawy-gray mb-3">
              Important for overall health and recovery:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Reduces inflammation and joint pain</li>
              <li>Supports cardiovascular health</li>
              <li>May improve muscle recovery after exercise</li>
              <li>Promotes healthy hormone production</li>
              <li>Dosage: 1-3g of combined EPA and DHA daily</li>
              <li>Sources: Fish oil, algae oil (vegetarian option)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Vitamin D</h3>
            <p className="text-gymmawy-gray mb-3">
              Often deficient in many people, especially in winter months:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Supports bone health and calcium absorption</li>
              <li>Important for immune function</li>
              <li>Plays a role in hormone production</li>
              <li>May improve strength and athletic performance</li>
              <li>Recommended dosage: 1000-5000 IU daily (based on needs)</li>
              <li>Best paired with vitamin K2 for optimal calcium utilization</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Magnesium</h3>
            <p className="text-gymmawy-gray mb-3">
              Critical mineral often depleted through exercise:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Involved in over 300 enzymatic reactions in the body</li>
              <li>Supports muscle function and prevents cramping</li>
              <li>Important for energy production</li>
              <li>May improve sleep quality</li>
              <li>Recommended dosage: 200-400mg daily</li>
              <li>Forms: Citrate, glycinate, and malate are well-absorbed</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">ZMA (Zinc Monomethionine Aspartate)</h3>
            <p className="text-gymmawy-gray mb-3">
              Combination supplement popular with athletes:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Contains zinc, magnesium, and vitamin B6</li>
              <li>May support testosterone levels in those deficient in zinc</li>
              <li>Can improve recovery and immune function</li>
              <li>May enhance sleep quality when taken before bed</li>
              <li>Primarily effective if deficient in these nutrients</li>
              <li>Take on an empty stomach before bed for best absorption</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Probiotics & Digestive Enzymes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Probiotics</h4>
              <p className="text-gymmawy-gray mb-3">
                Support gut health and immune function:
              </p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Promote healthy gut microbiome</li>
                <li>May improve nutrient absorption</li>
                <li>Support immune system function</li>
                <li>Can reduce GI distress from high-protein diets</li>
                <li>Look for multi-strain products with at least 10 billion CFUs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Digestive Enzymes</h4>
              <p className="text-gymmawy-gray mb-3">
                Help break down food for better digestion:
              </p>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Support digestion of protein, carbs, and fats</li>
                <li>May reduce bloating and digestive discomfort</li>
                <li>Particularly useful for those with digestive issues</li>
                <li>Can help with absorption of nutrients from large meals</li>
                <li>Look for broad-spectrum products with multiple enzymes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What Supplements Are Worth Your Money */}
      <div className="bg-gymmawy-dark/5 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">What Supplements Are Worth Your Money</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Tier 1: Essential</h3>
            <p className="text-gymmawy-gray mb-3">
              Highest value supplements with strong evidence:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Protein powder (whey, casein, or plant-based)</li>
              <li>Creatine monohydrate</li>
              <li>Vitamin D (if deficient)</li>
              <li>Omega-3 fatty acids</li>
              <li>Multivitamin (basic insurance policy)</li>
            </ul>
            <p className="text-gymmawy-gray mt-3">
              These provide the most bang for your buck and have the strongest research backing their efficacy.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Tier 2: Situational</h3>
            <p className="text-gymmawy-gray mb-3">
              Effective for specific goals or circumstances:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Caffeine or pre-workout supplements</li>
              <li>Beta-alanine (for high-intensity activities)</li>
              <li>Citrulline malate (for pumps and endurance)</li>
              <li>Magnesium (especially if deficient)</li>
              <li>Zinc (for immune function and hormonal health)</li>
              <li>EAAs (during fasted training or severe caloric restriction)</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Tier 3: Specialized</h3>
            <p className="text-gymmawy-gray mb-3">
              May provide benefits in specific contexts:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>Probiotics (for gut health and immune function)</li>
              <li>L-theanine (paired with caffeine for focus without jitters)</li>
              <li>HMB (during caloric restriction to preserve muscle)</li>
              <li>Ashwagandha (for stress management and recovery)</li>
              <li>Digestive enzymes (for those with digestive issues)</li>
              <li>Melatonin (for sleep support when needed)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Generally Overhyped</h3>
            <p className="text-gymmawy-gray mb-3">
              Limited evidence or poor cost-to-benefit ratio:
            </p>
            <ul className="list-disc list-inside text-gymmawy-gray space-y-2">
              <li>BCAAs (unnecessary with adequate protein intake)</li>
              <li>Glutamine (minimal benefits for most people)</li>
              <li>Mass gainers (expensive; whole foods are better)</li>
              <li>Testosterone boosters (most have minimal effects)</li>
              <li>Fat burners (modest effects at best)</li>
              <li>Most proprietary blends with "secret formulas"</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Supplement Safety & Quality</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Finding Quality Products</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Look for third-party testing (NSF Certified for Sport, Informed Choice)</li>
                <li>Research the company's reputation and manufacturing practices</li>
                <li>Avoid proprietary blends that don't disclose exact amounts</li>
                <li>Be skeptical of extreme claims and "breakthrough" ingredients</li>
                <li>Check reviews from reliable sources, not just testimonials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Safety Considerations</h4>
              <ul className="list-disc list-inside text-gymmawy-gray space-y-1">
                <li>Consult healthcare provider if you have medical conditions</li>
                <li>Start with lower doses to assess tolerance</li>
                <li>Be aware of stimulant content and timing (avoid late in day)</li>
                <li>Check for banned substances if you're a competitive athlete</li>
                <li>More is not always better—follow recommended dosages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Smart Supplementation</h2>
        <p className="text-gymmawy-gray mb-6">
          Remember that supplements are meant to complement a solid foundation of good nutrition and training—not 
          replace them. Focus on the fundamentals first: consistent training, adequate protein, sufficient calories, 
          and quality sleep. Once those are in place, selective supplementation can help optimize your results.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/nutrition">Explore Nutrition Guides</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/workout-plans">View Workout Programs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupplementsGuide; 