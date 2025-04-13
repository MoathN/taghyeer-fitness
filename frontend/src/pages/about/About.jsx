import { Link } from "react-router-dom";
import { FaDumbbell, FaUsers, FaAward, FaHeartbeat } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const About = () => {
  // Mock team data
  const teamMembers = [
    {
      name: "Mohammad Abdo",
      role: "Front-end developer",
      image: "/src/Photos/9z.jpeg",
      bio: ""
    },
    {
      name: "Ammar Al-saadi",
      role: "Full-stack developer",
      image: "/src/Photos/Ammar pp.jpeg",
      bio: ""
    },
    {
      name: "Moath Nofal",
      role: "Back-end developer",
      image: "/src/Photos/Nofal.jpeg",
      bio: ""
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: <FaDumbbell className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our training programs to our customer service."
    },
    {
      icon: <FaUsers className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Building a supportive community that motivates and empowers each member on their fitness journey."
    },
    {
      icon: <FaAward className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "Operating with honesty, transparency, and the highest ethical standards in all our interactions."
    },
    {
      icon: <FaHeartbeat className="h-8 w-8 text-primary" />,
      title: "Wellness",
      description: "Promoting overall wellness that encompasses physical, mental, and emotional health."
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
    {/* Hero Section */}
    <section className="relative bg-gymmawy-purple py-20 text-white">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="container relative mx-auto text-center">
    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About TAGHYEER</h1>
    <p className="mx-auto max-w-3xl text-lg text-zinc-300">
    Our mission is to transform lives through fitness, nutrition, and wellness education.
    We believe in empowering individuals to take control of their health and achieve their full potential.
    </p>
    </div>
    </section>

    {/* Our Story */}
    <section className="container mx-auto">
    <div className="grid gap-12 md:grid-cols-2">
    <div className="flex flex-col justify-center">
    <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
    <div className="space-y-4 text-muted-foreground">
    <p>
    Founded in 2025, TAGHYEER began with a simple vision: to make fitness accessible, enjoyable,
    and transformative for everyone. The name "TAGHYEER," meaning "change" in Arabic, embodies
    our core belief that positive transformation starts with small, consistent changes.
    </p>
    <p>
    Our founder, Ammar Al-saadi, recognized that many people struggled with traditional gym
    environments - feeling intimidated, unsupported, or lacking the knowledge to make meaningful
    progress. This realization sparked the creation of TAGHYEER, a comprehensive fitness platform
    that combines personalized workout plans, nutrition guidance, and a supportive community.
    </p>
    <p>
    What started as a small personal training studio has grown into a nationwide brand with
    multiple locations and an innovative online platform. Throughout our growth, we've remained
    committed to our founding principle: that everyone deserves access to high-quality fitness
    resources and support on their journey to better health.
    </p>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div className="overflow-hidden rounded-lg">
    <img
    src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=600&auto=format&fit=crop"
    alt="Man Running"
    className="h-full w-full object-cover"
    />
    </div>
    <div className="overflow-hidden rounded-lg">
    <img
    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
    alt="Man Weight Training"
    className="h-full w-full object-cover"
    />
    </div>
    <div className="overflow-hidden rounded-lg">
    <img
    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop"
    alt="Man Nutrition Coaching"
    className="h-full w-full object-cover"
    />
    </div>
    <div className="overflow-hidden rounded-lg">
    <img
    src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=600&auto=format&fit=crop"
    alt="Men Training"
    className="h-full w-full object-cover"
    />
    </div>
    </div>
    </div>
    </section>

    {/* Core Values */}
    <section className="bg-gymmawy-purple py-16">
    <div className="container mx-auto">
    <h2 className="mb-12 text-center text-3xl font-bold">Our Core Values</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {coreValues.map((value, index) => (
      <div key={index} className="rounded-lg bg-[#2a1f46] p-6 shadow-md">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
      {value.icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
      <p className="text-gymmawy-lightGray">{value.description}</p>
      </div>
    ))}
    </div>
    </div>
    </section>

    {/* Meet the Team */}
    <section className="container mx-auto">
    <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
    <div className="grid gap-12 md:grid-cols-3 justify-items-center px-8">
    {teamMembers.map((member, index) => (
      <div key={index} className="text-center w-full max-w-xs">
      <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
      <img
      src={member.image}
      alt={member.name}
      className="h-full w-full object-cover"
      />
      </div>
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="mb-2 text-primary">{member.role}</p>
      <p className="text-muted-foreground">{member.bio}</p>
      </div>
    ))}
    </div>
    </section>

    {/* CTA Section */}
    <section className="container mx-auto">
    <div className="flex flex-col items-center rounded-xl bg-primary/10 p-12 text-center md:p-16">
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join Our Community</h2>
    <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
    Experience the TAGHYEER difference and become part of our growing community of fitness enthusiasts.
    Start your transformation journey today.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
    <Button size="lg" asChild>
    <Link to="/memberships">Join Now</Link>
    </Button>
    <Button size="lg" variant="outline" asChild>
    <Link to="/contact">Contact Us</Link>
    </Button>
    </div>
    </div>
    </section>
    </div>
  );
};

export default About;
