import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Contact info
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 text-primary" />,
      title: "Address",
      details: ["123 Fitness Street", "Gym City, Workout 12345"],
    },
    {
      icon: <FaPhone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-primary" />,
      title: "Email",
      details: ["info@taghyeer.com", "support@taghyeer.com"],
    },
    {
      icon: <FaClock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: ["Monday-Friday: 6AM-10PM", "Saturday-Sunday: 8AM-8PM"],
    },
  ];

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Submit form data to backend API
  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      console.log("Submitting form with values:", values);
      
      // Try with http://localhost:8080/api/contact
      const response = await axios.post('http://localhost:8080/api/contact', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log("API response:", response.data);
      
      toast.success("Message sent successfully! Our team will contact you soon.");
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        toast.error(`Failed to send message: ${error.response.status} ${error.response.statusText}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        toast.error("No response from server. Please check your internet connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Have questions or need assistance? Reach out to our team and we'll be happy to help.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">{detail}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Map Image Placeholder */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Our Location</h3>
            <div className="aspect-video overflow-hidden rounded-md bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1618421549170-3bc7524e168b?q=80&w=800&auto=format&fit=crop"
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-center">Map view of our main facility</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <FaEnvelope className="mb-4 h-16 w-16 text-primary" />
                  <h3 className="text-xl font-semibold">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been received. We will respond to your inquiry as soon as possible.
                  </p>
                  <Button 
                    className="mt-6" 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="membership">Membership Inquiry</SelectItem>
                                <SelectItem value="training">Personal Training</SelectItem>
                                <SelectItem value="nutrition">Nutrition Consultation</SelectItem>
                                <SelectItem value="support">Customer Support</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">What are your membership cancellation terms?</h3>
              <p className="text-muted-foreground">Memberships can be cancelled with 30 days notice. There are no cancellation fees for memberships that have been active for at least 3 months.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Do you offer trial memberships?</h3>
              <p className="text-muted-foreground">Yes, we offer a 7-day trial for new members to experience our facilities and services before committing to a membership.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Can I freeze my membership temporarily?</h3>
              <p className="text-muted-foreground">Yes, memberships can be frozen for up to 3 months per year due to travel, medical reasons, or other circumstances.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">What qualifications do your trainers have?</h3>
              <p className="text-muted-foreground">All our trainers are certified by recognized fitness organizations and have at least 3 years of professional experience.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Do you offer nutrition plans for specific dietary needs?</h3>
              <p className="text-muted-foreground">Yes, our nutritionists can create custom meal plans for various dietary requirements including vegetarian, vegan, gluten-free, and more.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards, bank transfers, and mobile payment options for both membership fees and in-store purchases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
