import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaDumbbell, FaCalendarAlt, FaGraduationCap, FaUsers, FaTrophy } from "react-icons/fa";

const TrainerProfile = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock trainers data - in a real app this would come from an API
  const trainersData = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=600&h=700&auto=format&fit=crop",
      description: "10+ years experience in strength training and athletic conditioning.",
      bio: "Sarah Johnson is one of our most experienced trainers, specializing in strength training and athletic conditioning. With over a decade of experience, she has helped hundreds of clients achieve their fitness goals through personalized training programs.",
      education: [
        "Bachelor's degree in Exercise Science, University of California",
        "Certified Strength and Conditioning Specialist (CSCS)",
        "National Academy of Sports Medicine (NASM) Certified Personal Trainer",
        "CrossFit Level 2 Trainer"
      ],
      specialties: [
        "Strength Training",
        "Olympic Weightlifting",
        "Athletic Performance Enhancement",
        "Functional Fitness",
        "Resistance Training"
      ],
      experience: [
        "Head Strength Coach at Elite Athletics (2018-Present)",
        "Personal Trainer at FitLife Gym (2015-2018)",
        "Strength and Conditioning Coach for University Track Team (2013-2015)"
      ],
      achievements: [
        "Helped 3 clients qualify for national weightlifting competitions",
        "Developed conditioning programs for professional athletes",
        "Featured in 'Fitness Today' magazine for innovative training methods",
        "Regional Powerlifting Champion (2016)"
      ],
      clientCounts: 250,
      transformations: 120,
      testimonials: [
        {
          id: 1,
          name: "Jason M.",
          image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "Sarah completely transformed my approach to strength training. I've gained 15 pounds of muscle and my lifts have improved dramatically.",
          rating: 5,
        },
        {
          id: 2,
          name: "Emma R.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "I never thought I could enjoy weightlifting as a woman until I trained with Sarah. She made me feel confident and strong!",
          rating: 5,
        },
      ],
      classes: [
        {
          id: 1,
          name: "Power Lifting Fundamentals",
          description: "Learn proper form and technique for the big three lifts: squat, bench press, and deadlift.",
          schedule: "Tuesdays & Thursdays, 6:00 PM - 7:30 PM",
          level: "Beginner to Intermediate"
        },
        {
          id: 2,
          name: "Athletic Conditioning",
          description: "High-intensity training focused on improving speed, agility, and explosive power.",
          schedule: "Mondays & Wednesdays, 5:30 PM - 7:00 PM",
          level: "Intermediate to Advanced"
        },
        {
          id: 3,
          name: "Olympic Weightlifting",
          description: "Master the snatch and clean & jerk with proper technique and programming.",
          schedule: "Saturdays, 10:00 AM - 12:00 PM",
          level: "All Levels"
        }
      ]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      specialization: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&h=700&auto=format&fit=crop",
      description: "Specializes in high-intensity interval training and cardio workouts.",
      bio: "Michael Rodriguez is a high-energy trainer who specializes in cardio and HIIT workouts. With a background in competitive athletics, he brings intensity and passion to every session, helping clients push their limits and achieve maximum results.",
      education: [
        "Master's in Exercise Physiology, Stanford University",
        "HIIT Specialist Certification, International Sports Sciences Association",
        "TRX Suspension Training Certification",
        "CPR/AED Certified"
      ],
      specialties: [
        "High-Intensity Interval Training",
        "Cardiovascular Conditioning",
        "Circuit Training",
        "Metabolic Training",
        "Sports Performance"
      ],
      experience: [
        "HIIT Program Director at TAGHYEER (2019-Present)",
        "Cardio Specialist at Urban Fitness Club (2016-2019)",
        "NCAA Track & Field Athlete (2012-2016)"
      ],
      achievements: [
        "Developed the popular 'HIIT45' program implemented in 5 major gym chains",
        "Helped clients lose a combined 2,000+ pounds through his HIIT programs",
        "Featured in Men's Health for innovative cardio techniques",
        "Former collegiate track star with multiple conference championships"
      ],
      clientCounts: 320,
      transformations: 180,
      testimonials: [
        {
          id: 1,
          name: "Tyler K.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "Michael's HIIT classes are brutal but effective. I've lost 35 pounds and my cardio endurance has never been better!",
          rating: 5,
        },
        {
          id: 2,
          name: "Lisa M.",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "I was stuck in a fitness plateau until I started training with Michael. His approach to HIIT has completely transformed my workouts.",
          rating: 5,
        }
      ],
      classes: [
        {
          id: 1,
          name: "HIIT45",
          description: "45 minutes of high-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness.",
          schedule: "Monday, Wednesday, Friday, 6:00 AM - 6:45 AM",
          level: "All Levels"
        },
        {
          id: 2,
          name: "MetCon Circuit",
          description: "Metabolic conditioning circuit that combines cardio and strength for complete fitness development.",
          schedule: "Tuesday & Thursday, 7:00 PM - 8:00 PM",
          level: "Intermediate to Advanced"
        },
        {
          id: 3,
          name: "Sprint Training",
          description: "Improve your speed, agility, and explosive power with focused sprint and interval work.",
          schedule: "Saturdays, 8:00 AM - 9:00 AM",
          level: "Intermediate to Advanced"
        }
      ]
    },
    {
      id: 3,
      name: "Emily Chen",
      specialization: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&h=700&auto=format&fit=crop",
      description: "Certified yoga instructor with focus on flexibility and mind-body connection.",
      bio: "Emily Chen brings tranquility and mindfulness to TAGHYEER with her extensive yoga expertise. A registered yoga teacher with over 500 hours of training, Emily helps clients improve flexibility, reduce stress, and create harmony between mind and body.",
      education: [
        "RYT-500 Certification, Yoga Alliance",
        "Bachelor's in Kinesiology, University of Washington",
        "Meditation and Mindfulness Certification",
        "Specialized training in Yin Yoga and Restorative practices"
      ],
      specialties: [
        "Vinyasa Flow",
        "Yin Yoga",
        "Flexibility Training",
        "Meditation Practices",
        "Injury Recovery Yoga"
      ],
      experience: [
        "Lead Yoga Instructor at TAGHYEER (2017-Present)",
        "Founder of Mindful Movement Yoga Studio (2015-2017)",
        "Wellness Retreat Leader, International (2013-Present)"
      ],
      achievements: [
        "Developed yoga therapy program helping 150+ clients recover from injuries",
        "Led yoga retreats in Bali, Costa Rica, and Thailand",
        "Author of 'Everyday Flexibility' e-book with 10,000+ downloads",
        "Featured in Yoga Journal for innovative flexibility techniques"
      ],
      clientCounts: 400,
      transformations: 200,
      testimonials: [
        {
          id: 1,
          name: "Sarah T.",
          image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "Emily's yoga classes have completely transformed my approach to fitness. I've gained flexibility I never thought possible and found mental calm in the process.",
          rating: 5,
        },
        {
          id: 2,
          name: "Mark J.",
          image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "As a former athlete with numerous injuries, Emily's restorative yoga has been a lifesaver. I move better and feel younger at 45 than I did at 35.",
          rating: 5,
        }
      ],
      classes: [
        {
          id: 1,
          name: "Morning Flow",
          description: "Start your day with energizing vinyasa sequences that awaken the body and focus the mind.",
          schedule: "Monday, Wednesday, Friday, 7:00 AM - 8:00 AM",
          level: "All Levels"
        },
        {
          id: 2,
          name: "Restorative Yoga",
          description: "Gentle, supportive poses held for longer periods to promote deep relaxation and healing.",
          schedule: "Tuesday & Thursday, 8:00 PM - 9:00 PM",
          level: "All Levels"
        },
        {
          id: 3,
          name: "Flexibility Fundamentals",
          description: "Focused practice to improve range of motion, address tight muscles, and prevent injuries.",
          schedule: "Saturdays, 9:00 AM - 10:15 AM",
          level: "All Levels"
        }
      ]
    },
    {
      id: 4,
      name: "David Wilson",
      specialization: "Nutrition & Weight Loss",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&h=700&auto=format&fit=crop",
      description: "Nutrition expert specializing in weight management and metabolic health.",
      bio: "David Wilson combines evidence-based nutrition science with practical coaching to help clients transform their relationship with food. With a specialty in sustainable weight management, David has helped hundreds of clients achieve their body composition goals without extreme diets.",
      education: [
        "Master's in Nutritional Science, Cornell University",
        "Certified Sports Nutritionist, International Society of Sports Nutrition",
        "Precision Nutrition Level 2 Coach",
        "Certified Diabetes Educator"
      ],
      specialties: [
        "Weight Management",
        "Metabolic Optimization",
        "Sports Nutrition",
        "Meal Planning",
        "Habit-Based Coaching"
      ],
      experience: [
        "Head of Nutrition at TAGHYEER (2018-Present)",
        "Clinical Nutritionist, University Hospital (2015-2018)",
        "Sports Team Nutritionist, Professional Soccer (2012-2015)"
      ],
      achievements: [
        "Helped clients lose a combined total of 5,000+ pounds with 85% maintaining their results",
        "Developed the 'Metabolic Reset' program used in our nutrition department",
        "Author of 'Eat for Performance' with foreword by Olympic athletes",
        "Regular contributor to Nutrition Science Review"
      ],
      clientCounts: 450,
      transformations: 320,
      testimonials: [
        {
          id: 1,
          name: "Jennifer L.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "David's approach to nutrition changed my life. No more crash diets or extreme restrictions. I've lost 55 pounds and kept it off for 2 years!",
          rating: 5,
        },
        {
          id: 2,
          name: "Carlos R.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
          quote: "As an athlete, I needed nutrition that would support performance without cutting weight too aggressively. David's plan was exactly what I needed.",
          rating: 5,
        }
      ],
      classes: [
        {
          id: 1,
          name: "Nutrition Fundamentals",
          description: "Learn the basics of balanced nutrition, macro tracking, and meal planning for optimal health and body composition.",
          schedule: "Mondays, 6:00 PM - 7:30 PM",
          level: "Beginner"
        },
        {
          id: 2,
          name: "Metabolic Reset Workshop",
          description: "Comprehensive 4-week program to optimize metabolism, hormone balance, and sustainable fat loss.",
          schedule: "Thursdays, 7:00 PM - 8:30 PM",
          level: "All Levels"
        },
        {
          id: 3,
          name: "Performance Nutrition",
          description: "Specialized nutrition planning for athletes and active individuals to maximize training results.",
          schedule: "Saturdays, 1:00 PM - 2:30 PM",
          level: "Intermediate to Advanced"
        }
      ]
    }
  ];

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchTrainer = () => {
      setLoading(true);
      try {
        console.log("Trainer ID from URL:", id);
        console.log("Trainer ID type:", typeof id);
        
        const numericId = parseInt(id, 10); // Convert ID to a number
        console.log("Numeric ID:", numericId);
        console.log("Numeric ID type:", typeof numericId);
        
        console.log("Available trainers:", trainersData);
        const foundTrainer = trainersData.find(t => {
          console.log("Comparing:", t.id, numericId, t.id === numericId);
          return t.id === numericId;
        });
        
        console.log("Found trainer:", foundTrainer);
        setTrainer(foundTrainer);
      } catch (error) {
        console.error("Error fetching trainer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainer();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-12">
        <div className="flex justify-center">
          <div className="animate-pulse text-gymmawy-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">Trainer Not Found</h2>
          <p className="mt-4 text-gymmawy-gray">The trainer you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-6">
            <Link to="/trainers">Back to Trainers</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-gymmawy-purple py-16">
        <div className="absolute inset-0 dots-bg opacity-20"></div>
        <div className="container relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="mb-4 text-4xl font-extrabold text-gymmawy-white">
                {trainer.name}
              </h1>
              <p className="mb-6 text-xl text-primary font-semibold">{trainer.specialization}</p>
              <p className="text-gymmawy-gray text-lg max-w-2xl">
                {trainer.bio}
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Book a Session
                </Button>
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gymmawy-purple/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-primary mb-2">{trainer.clientCounts}+</div>
              <div className="text-sm text-gymmawy-gray">Clients Trained</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-primary mb-2">{trainer.transformations}+</div>
              <div className="text-sm text-gymmawy-gray">Transformations</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-primary mb-2">{trainer.experience.length}+</div>
              <div className="text-sm text-gymmawy-gray">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-primary mb-2">{trainer.classes.length}</div>
              <div className="text-sm text-gymmawy-gray">Classes Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    <FaDumbbell className="mr-2" /> Specialties
                  </h3>
                  <ul className="space-y-2 text-gymmawy-gray">
                    {trainer.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 mt-2 mr-2 rounded-full bg-primary"></span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    <FaGraduationCap className="mr-2" /> Education & Certifications
                  </h3>
                  <ul className="space-y-2 text-gymmawy-gray">
                    {trainer.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 mt-2 mr-2 rounded-full bg-primary"></span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <FaTrophy className="mr-2" /> Achievements
                </h3>
                <ul className="space-y-2 text-gymmawy-gray">
                  {trainer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 mt-2 mr-2 rounded-full bg-primary"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="classes" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainer.classes.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{cls.name}</h3>
                      <div className="mb-4 flex items-center text-gymmawy-gray text-sm">
                        <FaCalendarAlt className="mr-2 text-primary" />
                        {cls.schedule}
                      </div>
                      <p className="text-gymmawy-gray mb-4">{cls.description}</p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                          {cls.level}
                        </span>
                      </div>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        Join Class
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="mt-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <FaUsers className="mr-2" /> Professional Experience
                </h3>
                <div className="space-y-6">
                  {trainer.experience.map((exp, index) => (
                    <div key={index} className="relative border-l-2 border-primary pl-6 pb-6">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                      <div className="text-lg font-semibold text-gymmawy-white">{exp.split(' at ')[0]}</div>
                      <div className="text-primary">{exp.split(' at ')[1].split(' (')[0]}</div>
                      <div className="text-sm text-gymmawy-gray">
                        {exp.includes('(') ? exp.split('(')[1].replace(')', '') : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {trainer.testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="border-gymmawy-gray/10 bg-gymmawy-purple/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-14 w-14 rounded-full border-2 border-primary object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gymmawy-white">{testimonial.name}</h4>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < testimonial.rating ? "currentColor" : "none"}
                                stroke="currentColor"
                                className={`h-4 w-4 ${i < testimonial.rating ? "text-primary" : "text-gymmawy-gray/30"}`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gymmawy-gray">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-xl bg-primary p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Train with {trainer.name}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Take your fitness journey to the next level with personalized training sessions.
              Book now and start your transformation!
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerProfile; 