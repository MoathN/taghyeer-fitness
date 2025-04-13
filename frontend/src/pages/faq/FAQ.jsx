import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const FAQ = () => {
  return (
    <div className="bg-background py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-center mb-12">
            Find answers to the most common questions about TAGHYEER Fitness memberships, workouts, and services.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Membership Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Membership</h2>
              
              <AccordionItem value="membership-1" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">What membership plans do you offer?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  TAGHYEER Fitness offers several membership tiers: Basic (access to gym facilities), Standard (includes group classes), and Premium (includes personal training sessions). We also offer special rates for students, seniors, and corporate partnerships. Visit our Memberships page for current pricing and promotions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="membership-2" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">How do I cancel or pause my membership?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can cancel or pause your membership through your account dashboard or by contacting our customer service team. Cancellations require a 30-day notice period. Membership pauses are available for 1-3 months for medical reasons or extended travel with proper documentation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="membership-3" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">Are there any joining fees?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, there is a one-time registration fee of $50 for new members. However, we frequently run promotions that waive this fee. Check our current offers on the Memberships page or sign up for our newsletter to be notified of upcoming promotions.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Workout Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Workouts & Training</h2>
              
              <AccordionItem value="workout-1" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">How do I get started with a workout plan?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  New members receive a complimentary fitness assessment and workout plan consultation. Our certified trainers will help you create a personalized plan based on your goals, fitness level, and any health considerations. You can also browse our pre-designed workout plans in the Workout Plans section of our website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="workout-2" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">What types of group classes do you offer?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a wide variety of group classes including HIIT, yoga, pilates, spinning, Zumba, strength training, and more. Classes are scheduled throughout the day to accommodate different schedules. Standard and Premium members have unlimited access to group classes, while Basic members can purchase class passes separately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="workout-3" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">Do you offer personal training?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we have a team of certified personal trainers available for one-on-one sessions. Premium memberships include weekly personal training sessions. Other members can purchase personal training packages separately. Our trainers specialize in various areas including weight loss, muscle building, sports performance, and rehabilitation.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Facility Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Facilities & Services</h2>
              
              <AccordionItem value="facility-1" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">What are your operating hours?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our main facilities are open Monday-Friday from 5:00 AM to 11:00 PM, and weekends from 7:00 AM to 9:00 PM. Hours may vary during holidays, so please check our website or app for current hours. Premium members have 24/7 access to select locations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="facility-2" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">Do you have shower facilities and lockers?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, all our locations have clean shower facilities with complimentary towel service. We provide day-use lockers free of charge (bring your own lock or rent one from the front desk). Premium members can rent dedicated lockers for monthly storage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="facility-3" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">Is there parking available?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most of our locations offer free parking for members. Our downtown locations have partnerships with nearby parking garages for discounted rates. Please check the specific location details on our website for parking information.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Nutrition Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Nutrition & Supplements</h2>
              
              <AccordionItem value="nutrition-1" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">Do you offer nutrition counseling?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we have registered dietitians on staff who provide nutrition counseling services. Premium members receive quarterly nutrition consultations. Other members can book consultations for an additional fee. We also offer nutrition workshops and meal planning resources through our app and website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="nutrition-2" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">What supplements do you recommend?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our approach to supplements is personalized based on individual needs and goals. We generally recommend starting with the basics: a quality protein powder, multivitamin, and possibly creatine for strength training. Our nutrition experts can provide personalized recommendations during a consultation. We carry a curated selection of high-quality supplements in our shop.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Account Questions */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Account & Technical Support</h2>
              
              <AccordionItem value="account-1" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">How do I reset my password?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can reset your password by clicking the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email, please check your spam folder or contact our support team for assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-2" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">How do I update my billing information?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can update your billing information through your account dashboard. Go to Settings  Billing Information to make changes to your payment method or billing address. If you encounter any issues, please contact our customer service team for assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-3" className="border rounded-lg p-2 bg-card">
                <AccordionTrigger className="text-lg font-medium">How can I contact customer support?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our customer support team is available via email at support@taghyeerfitness.com, by phone at (555) 123-4567 during business hours (9 AM - 6 PM, Monday-Friday), or through the live chat feature on our website and app. Premium members have access to a dedicated support line with extended hours.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <a href="/contact" className="text-primary hover:underline font-medium">Contact our support team</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;