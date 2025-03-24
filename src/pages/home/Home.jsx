import { Link } from "react-router-dom";
import { FaDumbbell, FaAppleAlt, FaUsers, FaShoppingCart } from "react-icons/fa";
import { MdFitnessCenter, MdRestaurant, MdPerson } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  // Mock data
  const features = [
    {
      icon: <FaDumbbell className="h-12 w-12 text-primary" />,
      title: "Workout Plans",
      description: "Tailored workout routines designed by professional trainers to help you achieve your fitness goals.",
      link: "/workout-plans",
    },
    {
      icon: <FaAppleAlt className="h-12 w-12 text-primary" />,
      title: "Nutrition Guides",
      description: "Expert nutrition advice and personalized diet plans to complement your fitness journey.",
      link: "/nutrition",
    },
    {
      icon: <FaUsers className="h-12 w-12 text-primary" />,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers to maximize your fitness potential.",
      link: "/trainers",
    },
    {
      icon: <FaShoppingCart className="h-12 w-12 text-primary" />,
      title: "Supplements Shop",
      description: "Quality supplements and fitness products to enhance your workout results.",
      link: "/shop",
    },
  ];

  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=300&h=400&auto=format&fit=crop",
      description: "10+ years experience in strength training and athletic conditioning.",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      specialization: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Specializes in high-intensity interval training and cardio workouts.",
    },
    {
      id: 3,
      name: "Emily Chen",
      specialization: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Certified yoga instructor with focus on flexibility and mind-body connection.",
    },
    {
      id: 4,
      name: "David Wilson",
      specialization: "Nutrition & Weight Loss",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Nutrition expert specializing in weight management and metabolic health.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jessica M.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
      quote: "TAGHYEER transformed my fitness journey! I've lost 30 pounds and gained so much confidence. The trainers are amazing!",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert K.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
      quote: "The nutrition plans are game-changers. I've completely revamped my diet and feel better than ever before.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aisha T.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop",
      quote: "The personal training sessions are worth every penny. My trainer understands exactly what I need and pushes me just the right amount.",
      rating: 5,
    },
    {
      id: 4,
      name: "Marcus D.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&h=150&auto=format&fit=crop",
      quote: "From beginner to advanced, TAGHYEER has programs for everyone. I've been a member for 2 years and still loving it!",
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pb-20 pt-20">
        <div className="absolute inset-0 bg-gymmawy-purple"></div>
        <div className="absolute inset-0 dots-bg opacity-20"></div>
        <div className="absolute right-0 top-0 h-full w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
            alt="Fitness"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gymmawy-purple via-gymmawy-purple/80 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-start space-y-10 py-20 md:w-3/5">
            <h1 className="text-5xl font-extrabold uppercase tracking-wide text-gymmawy-white md:text-6xl">
              Transform Your Body, <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="max-w-xl text-lg text-gymmawy-gray">
              Join TAGHYEER and embark on a fitness journey tailored to your goals.
              Access premium workout plans, nutrition guides, and personal training from certified professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link to="/memberships">Join Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-gymmawy-white hover:border-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/workout-plans">Explore Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-primary">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gymmawy-gray">
              Everything you need to achieve your fitness goals in one place
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-gymmawy-gray/10 bg-gymmawy-purple/50 transition-all hover:shadow-lg">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gymmawy-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-24 text-gymmawy-gray">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white">
                    <Link to={feature.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join TAGHYEER Banner */}
      <section className="py-20 bg-gradient-to-r from-gymmawy-purple to-gymmawy-purple/90 relative overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-10"></div>
        <div className="container relative">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-gymmawy-white">Ready to Start Your Fitness Journey?</h2>
            <p className="mx-auto mb-12 max-w-2xl text-gymmawy-gray">
              Choose from our flexible membership options and get access to world-class facilities,
              expert trainers, and a supportive community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-gymmawy-gray/10 bg-gymmawy-purple/80 transition-all hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-gymmawy-white">Basic</CardTitle>
                <div className="mt-2 text-4xl font-bold text-primary">$49<span className="text-lg font-normal text-gymmawy-gray">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdFitnessCenter className="text-primary" /> Gym access (6am-8pm)
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdRestaurant className="text-primary" /> Basic nutrition guide
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdPerson className="text-primary" /> 1 trainer consultation
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/memberships?plan=basic">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary bg-gymmawy-purple/80 shadow-lg transition-all hover:shadow-xl relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-primary"></div>
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">Popular</div>
              <CardHeader>
                <CardTitle className="text-gymmawy-white">Premium</CardTitle>
                <div className="mt-2 text-4xl font-bold text-primary">$79<span className="text-lg font-normal text-gymmawy-gray">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdFitnessCenter className="text-primary" /> 24/7 gym access
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdRestaurant className="text-primary" /> Personalized nutrition plan
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdPerson className="text-primary" /> 2 trainer sessions monthly
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/memberships?plan=premium">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-gymmawy-gray/10 bg-gymmawy-purple/80 transition-all hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-gymmawy-white">Elite</CardTitle>
                <div className="mt-2 text-4xl font-bold text-primary">$129<span className="text-lg font-normal text-gymmawy-gray">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdFitnessCenter className="text-primary" /> 24/7 gym access + classes
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdRestaurant className="text-primary" /> Advanced nutrition coaching
                  </li>
                  <li className="flex items-center gap-2 text-gymmawy-white">
                    <MdPerson className="text-primary" /> 4 trainer sessions monthly
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/memberships?plan=elite">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-primary">Meet Our Expert Trainers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gymmawy-gray">
              Our certified professionals are here to guide you through your fitness journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="trainer-card rounded-lg overflow-hidden border border-gymmawy-gray/10">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gymmawy-purple to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-primary font-semibold">{trainer.specialization}</p>
                  </div>
                </div>
                <div className="p-6 bg-gymmawy-purple/50">
                  <p className="mb-4 text-gymmawy-gray">{trainer.description}</p>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white"
                  >
                    <Link to={`/trainers/${trainer.id}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              asChild
              className="border-primary/30 text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/trainers">Meet All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gymmawy-purple/30 py-20 relative">
        <div className="absolute inset-0 dots-bg opacity-10"></div>
        <div className="container relative">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-gymmawy-white">What Our Members Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gymmawy-gray">
              Real stories from real people who transformed their lives with TAGHYEER
            </p>
          </div>

          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="border-gymmawy-gray/10 bg-gymmawy-purple/80">
                      <CardContent className="flex flex-col items-center gap-4 p-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-20 w-20 rounded-full border-2 border-primary object-cover"
                        />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                              stroke="currentColor"
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-primary" : "text-gymmawy-gray/30"}`}
                            >
                              <path fillRule="evenodd" d="M10.788 3.21c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-center text-gymmawy-white">"{testimonial.quote}"</p>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 pt-4">
              <CarouselPrevious className="relative bg-primary/10 text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="relative bg-primary/10 text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center rounded-xl bg-primary p-12 text-center md:p-16">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">Start Your Fitness Journey Today</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Join the TAGHYEER community and transform your body, mind, and life with our comprehensive
              fitness programs, expert trainers, and supportive environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/memberships">Join Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
