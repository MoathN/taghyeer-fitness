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
      id: "basic",
      title: "Basic",
      price: 49,
      features: [
        "Gym access (6am-8pm)",
        "Basic nutrition guide",
        "1 trainer consultation",
      ],
    },
    {
      id: "premium",
      title: "Premium",
      price: 79,
      popular: true,
      features: [
        "24/7 gym access",
        "Personalized nutrition plan",
        "2 trainer sessions monthly",
      ],
    },
    {
      id: "elite",
      title: "Elite",
      price: 129,
      features: [
        "24/7 gym access + classes",
        "Advanced nutrition coaching",
        "4 trainer sessions monthly",
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

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`border-gymmawy-gray/10 bg-gymmawy-purple/80 transition-all hover:shadow-xl relative ${
              plan.id === selectedPlan ? "border-primary" : ""
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-primary"></div>
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
                <Link to={`/auth/register?plan=${plan.id}`}>Get Started</Link>
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
