import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MdFitnessCenter, MdRestaurant, MdPerson } from "react-icons/md";

const Memberships = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "";

  const plans = [
    {
      id: "plus",
      title: "Plus",
      price: 20,
      popular: true,
      features: [
        "Full gym access",
        "Personalized nutrition plan",
        "2 trainer sessions monthly",
      ],
    },
    {
      id: "pro",
      title: "Pro",
      price: 100,
      features: [
        "Unlimited gym access + premium classes",
        "Advanced nutrition coaching",
        "Unlimited personal training sessions",
      ],
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-primary mb-4">Membership Plans</h1>
        <p className="text-gymmawy-gray max-w-2xl mx-auto">
          Choose the membership plan that fits your fitness goals and lifestyle. All plans include access to our state-of-the-art facilities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`border-gymmawy-gray/10 bg-gymmawy-purple/80 transition-all hover:shadow-xl relative ${
              plan.id === selectedPlan ? "border-primary" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-gymmawy-white">{plan.title}</CardTitle>
              <div className="mt-2 text-4xl font-bold text-primary">
                ${plan.price}<span className="text-lg font-normal text-gymmawy-gray">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gymmawy-white">
                    {i === 0 && <MdFitnessCenter className="text-primary" />}
                    {i === 1 && <MdRestaurant className="text-primary" />}
                    {i === 2 && <MdPerson className="text-primary" />}
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to={`/payment?plan=${plan.id}`}>Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gymmawy-white mb-4">Need a Custom Plan?</h2>
        <p className="text-gymmawy-gray max-w-2xl mx-auto mb-6">
          Contact our team for corporate memberships or custom plans tailored to your specific needs.
        </p>
        <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Memberships;
