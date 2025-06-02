import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdLock, MdCreditCard, MdSecurity } from "react-icons/md";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import axiosInstance from "@/utils/axios";

const PaymentGateway = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const selectedPlan = searchParams.get("plan") || "";
  const [loading, setLoading] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/auth/login?redirect=/payment?plan=" + selectedPlan);
    }
  }, [user, selectedPlan, navigate]);

  const plans = {
    plus: {
      title: "Plus",
      price: 20,
      features: [
        "Full gym access",
        "Personalized nutrition plan",
        "2 trainer sessions monthly",
      ],
    },
    pro: {
      title: "Pro",
      price: 100,
      features: [
        "Unlimited gym access + premium classes",
        "Advanced nutrition coaching",
        "Unlimited personal training sessions",
      ],
    },
  };

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const validateCard = (cardNumber) => {
    const cleanNumber = cardNumber.replace(/\D/g, "");
    return cleanNumber.length >= 13 && cleanNumber.length <= 19;
  };

  const validateExpiryDate = (expiryDate) => {
    const [month, year] = expiryDate.split("/");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = parseInt(month, 10);
    const expYear = parseInt(year, 10);

    if (!expMonth || !expYear) return false;
    if (expMonth < 1 || expMonth > 12) return false;
    
    if (expYear < currentYear) return false;
    if (expYear === currentYear && expMonth < currentMonth) return false;

    return true;
  };

  const validateCVV = (cvv) => {
    return /^\d{3,4}$/.test(cvv);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ") || "";
      if (formattedValue.length > 19) return;
    }

    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").match(/.{1,2}/g)?.join("/") || "";
      if (formattedValue.length > 5) return;
    }

    if (name === "cvv" && value.length > 4) return;

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.cardHolder.trim()) {
      toast.error("Please enter the card holder name");
      return;
    }

    if (!validateCard(formData.cardNumber)) {
      toast.error("Please enter a valid card number");
      return;
    }

    if (!validateExpiryDate(formData.expiryDate)) {
      toast.error("Please enter a valid expiry date");
      return;
    }

    if (!validateCVV(formData.cvv)) {
      toast.error("Please enter a valid CVV");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/payments/process", {
        userId: user.id,
        planType: selectedPlan,
        amount: plans[selectedPlan].price,
        cardNumber: formData.cardNumber.replace(/\s/g, ""),
        cardHolderName: formData.cardHolder,
      });

      if (response.data) {
        toast.success("Payment successful!");
        navigate(`/auth/register?plan=${selectedPlan}&payment=success`);
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error(error.response?.data?.error || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedPlan || !plans[selectedPlan]) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Invalid Plan Selected</h1>
        <p className="mt-4 text-gymmawy-gray">Please select a valid membership plan.</p>
        <Button className="mt-6" onClick={() => navigate("/memberships")}>
          View Plans
        </Button>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  const plan = plans[selectedPlan];

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">Complete Your Purchase</h1>
        <p className="mt-2 text-gymmawy-gray">Secure Payment Gateway</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Plan Summary */}
        <Card className="border-gymmawy-gray/10 bg-gymmawy-purple/80">
          <CardHeader>
            <CardTitle className="text-gymmawy-white">{plan.title} Plan</CardTitle>
            <div className="mt-2 text-4xl font-bold text-primary">
              ${plan.price}<span className="text-lg font-normal text-gymmawy-gray">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="font-semibold text-gymmawy-white">Plan Features:</h3>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gymmawy-gray">
                    <span className="text-primary">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Payment Form */}
        <Card className="border-gymmawy-gray/10 bg-gymmawy-purple/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gymmawy-white">
              <MdLock className="text-primary" />
              Payment
            </CardTitle>
            <CardDescription className="text-gymmawy-gray">
              Enter your card details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-gymmawy-white">Card Number</Label>
                <div className="relative">
                  <MdCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter card number"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardHolder" className="text-gymmawy-white">Card Holder Name</Label>
                <Input
                  id="cardHolder"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  placeholder="Enter card holder name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate" className="text-gymmawy-white">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-gymmawy-white">CVV</Label>
                  <div className="relative">
                    <MdSecurity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      type="number"
                      placeholder="123"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay $${plan.price}`
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="flex items-center gap-2 text-sm text-gymmawy-gray">
              <MdLock className="text-primary" />
              Secured by SSL encryption
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PaymentGateway; 