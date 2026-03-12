import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicalTeam from "@/assets/image1.jpeg";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    { text: "A Passion for Healing" },
    { text: "5-Star Care" },
    { text: "All our best" },
    { text: "Believe in Us" },
    { text: "Always Caring" },
    { text: "A Legacy of Excellence" },
  ];

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      author: "John Doe",
    },
    {
      quote:
        "Exceptional care and professional staff. The team is dedicated to patient satisfaction and provides outstanding medical services with compassion.",
      author: "Jane Smith",
    },
    {
      quote:
        "Amazing experience at this hospital. The doctors are highly skilled and the facilities are top-notch. Highly recommended!",
      author: "Michael Johnson",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with background image and breadcrumb */}
      <section
        className="relative h-80 md:h-96 bg-cover bg-center bg-fixed flex items-end"
        style={{ backgroundImage: `url(${medicalTeam})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full pb-8 md:pb-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="text-white mb-4 text-sm">
              <a href="/" className="hover:text-accent">
                Home
              </a>
              <span className="mx-2">/</span>
              <span>About</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <div
                className="rounded-2xl shadow-2xl w-full bg-cover bg-center h-80 md:h-96"
                style={{ backgroundImage: `url(${medicalTeam})` }}
                role="img"
                aria-label="Medical team professionals"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-7">
              <div>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                  Welcome to Chitwan Eye Hospital (CEH)
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Best Care for Your Good Health
                </h2>
              </div>

              {/* Features Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-0">●</span>
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  A premier healthcare institution dedicated to preserving and
                  restoring vision for the community of Bharatpur and beyond.
                  Located in the heart of Bharatpur-10, Chitwan, we are
                  committed to providing high-quality, comprehensive eye care
                  services using state-of-the-art technology and a patient-first
                  approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-28">
          {/* 1. Mission & Vision — Image LEFT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div
              className="h-80 md:h-96 rounded-2xl shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${medicalTeam})` }}
            />

            <div>
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                Our Purpose
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mission & Vision
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Chitwan Eye Hospital was founded with a clear purpose — to
                protect, preserve, and restore vision for individuals and
                families across our community.
                <br />
                <br />
                Our mission is to eliminate avoidable blindness by delivering
                accessible, affordable, and world-class eye care services using
                modern medical practices and advanced technology.
                <br />
                <br />
                We envision a future where every person, regardless of location
                or economic background, has access to safe, ethical, and
                high-quality ophthalmic care.
              </p>
            </div>
          </div>

          {/* 2. Why Choose Us — Image RIGHT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                Why Patients Trust Us
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Chitwan Eye Hospital
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Choosing the right eye care provider is a critical decision. At
                Chitwan Eye Hospital, we combine clinical expertise with
                compassion, transparency, and personalized care to deliver
                outcomes you can rely on.
              </p>

              <ul className="space-y-4 text-foreground/80 text-lg">
                <li>
                  • Highly experienced ophthalmologists and trained support
                  staff
                </li>
                <li>• Advanced diagnostic and surgical equipment</li>
                <li>• Patient-centered care with ethical medical practices</li>
                <li>
                  • Strong reputation built on trust and successful outcomes
                </li>
              </ul>
            </div>

            <div
              className="h-80 md:h-96 rounded-2xl shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${medicalTeam})` }}
            />
          </div>

          {/* 3. Services — Image LEFT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div
              className="h-80 md:h-96 rounded-2xl shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${medicalTeam})` }}
            />

            <div>
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                What We Offer
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Eye Care Services
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Our hospital offers a complete range of ophthalmic services,
                ensuring that patients receive accurate diagnosis, effective
                treatment, and long-term care under one roof.
              </p>

              <ul className="space-y-4 text-foreground/80 text-lg">
                <li>• Preventive eye check-ups and vision assessments</li>
                <li>• Cataract surgery using safe and modern techniques</li>
                <li>• Optical services with quality lenses and frames</li>
                <li>• Specialized treatment for complex eye conditions</li>
              </ul>
            </div>
          </div>

          {/* 4. Commitment — Image RIGHT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                Our Promise
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Commitment to Excellence
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg">
                Excellence is not just a goal at Chitwan Eye Hospital — it is a
                continuous process. From maintaining strict hygiene standards to
                adopting the latest medical innovations, we constantly strive to
                improve every aspect of patient care.
                <br />
                <br />
                We are committed to creating a safe, professional, and welcoming
                environment where patients feel confident, respected, and
                supported throughout their treatment journey.
              </p>
            </div>

            <div
              className="h-80 md:h-96 rounded-2xl shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${medicalTeam})` }}
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section - Slider */}
      <section
        className="relative py-24 text-white flex items-center justify-center min-h-96"
        style={{
          backgroundImage: "url(/src/assets/consultation.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full">
          <div className="text-center space-y-8">
            {/* Quote icon */}
            <div className="text-6xl text-white/30">„</div>

            {/* Testimonial text */}
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              {testimonials[currentTestimonial].quote}
            </p>

            {/* Divider line */}
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-white/40"></div>
            </div>

            {/* Author name */}
            <p className="text-lg font-semibold">
              {testimonials[currentTestimonial].author}
            </p>

            {/* Slide Indicators - Clickable dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all ${
                    index === currentTestimonial
                      ? "bg-white w-8 h-2 rounded-full"
                      : "bg-white/50 w-2 h-2 rounded-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <Doctors />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default AboutPage;
