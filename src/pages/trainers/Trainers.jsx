import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Trainers = () => {
  // Mock trainers data
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=300&h=400&auto=format&fit=crop",
      description: "10+ years experience in strength training and athletic conditioning.",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      specialization: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Specializes in high-intensity interval training and cardio workouts.",
      featured: false,
    },
    {
      id: 3,
      name: "Emily Chen",
      specialization: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Certified yoga instructor with focus on flexibility and mind-body connection.",
      featured: false,
    },
    {
      id: 4,
      name: "David Wilson",
      specialization: "Nutrition & Weight Loss",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Nutrition expert specializing in weight management and metabolic health.",
      featured: true,
    },
    {
      id: 5,
      name: "Jasmine Ali",
      specialization: "Functional Training",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Expert in functional fitness and movement patterns for everyday health.",
      featured: false,
    },
    {
      id: 6,
      name: "Chris Thompson",
      specialization: "Bodybuilding",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&h=400&auto=format&fit=crop",
      description: "Professional bodybuilder with extensive experience in muscle development.",
      featured: true,
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-gymmawy-purple py-16">
        <div className="absolute inset-0 dots-bg opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-wider text-gymmawy-white md:text-5xl">
              Our Expert <span className="text-primary">Trainers</span>
            </h1>
            <p className="text-lg text-gymmawy-gray">
              Meet our certified professionals who will guide you on your fitness journey.
              Our trainers are dedicated to helping you achieve your personal health and fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-primary">Featured Trainers</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trainers
              .filter(trainer => trainer.featured)
              .map(trainer => (
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
                  <div className="p-6">
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
        </div>
      </section>

      {/* All Trainers Section */}
      <section className="bg-gymmawy-purple/30 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-gymmawy-white">All Trainers</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trainers.map(trainer => (
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
                <div className="p-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-xl bg-primary p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Ready to Start Your Fitness Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Our expert trainers are ready to help you achieve your fitness goals.
              Join TAGHYEER today and transform your life.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/memberships">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
