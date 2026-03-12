import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicalTeam from "@/assets/medical-team.jpg";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import bookingQR from "@/assets/booking-qr.png";

const AppointmentPage = () => {
  const scheduleHours = [
    { day: "Monday", time: "09:00 AM - 07:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 07:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 07:00 PM" },
    { day: "Thursday", time: "09:00 AM - 07:00 PM" },
    { day: "Friday", time: "09:00 AM - 07:00 PM" },
    { day: "Saturday", time: "09:00 AM - 07:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

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
              <span>Appointment</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Book an Appointment
            </h1>
          </div>
        </div>
      </section>

      {/* Appointment Form and Schedule Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book an Appointment
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Book your appointment online with our healthcare specialists.
              Choose your preferred date and time for a convenient consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Form */}
            <div className="flex justify-start">
              <Card className="bg-primary text-primary-foreground border-0 shadow-2xl w-full rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <form className="space-y-0">
                    {/* Dark segmented input area */}
                    <div className="bg-[#1F2B6C] text-white p-6">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-white/80 text-sm"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="gender"
                            className="text-white/80 text-sm"
                          >
                            Gender
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2 focus:ring-0">
                              <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1F2B6C] border-white/20 text-white">
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-white/80 text-sm"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-white/80 text-sm"
                          >
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+977 (555) 000-0000"
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label
                            htmlFor="date"
                            className="text-white/80 text-sm"
                          >
                            Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="time"
                            className="text-white/80 text-sm"
                          >
                            Time
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2 focus:ring-0">
                              <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1F2B6C] border-white/20 text-white">
                              <SelectItem value="09:00">09:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="14:00">02:00 PM</SelectItem>
                              <SelectItem value="15:00">03:00 PM</SelectItem>
                              <SelectItem value="16:00">04:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label
                            htmlFor="doctor"
                            className="text-white/80 text-sm"
                          >
                            Doctor
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2 focus:ring-0">
                              <SelectValue placeholder="Select Doctor" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1F2B6C] border-white/20 text-white">
                              <SelectItem value="dr-smith">
                                Dr. John Smith
                              </SelectItem>
                              <SelectItem value="dr-johnson">
                                Dr. Sarah Johnson
                              </SelectItem>
                              <SelectItem value="dr-williams">
                                Dr. Michael Williams
                              </SelectItem>
                              <SelectItem value="dr-brown">
                                Dr. Emily Brown
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label
                            htmlFor="department"
                            className="text-white/80 text-sm"
                          >
                            Department
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none mt-2 focus:ring-0">
                              <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1F2B6C] border-white/20 text-white">
                              <SelectItem value="cardiology">
                                Cardiology
                              </SelectItem>
                              <SelectItem value="neurology">
                                Neurology
                              </SelectItem>
                              <SelectItem value="orthopedics">
                                Orthopedics
                              </SelectItem>
                              <SelectItem value="dermatology">
                                Dermatology
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-white/80 text-sm"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us your message..."
                          className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 min-h-32 rounded-none resize-none mt-2"
                        />
                      </div>
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#C8D8FF] text-[#1F2B6C] hover:bg-[#B8C8FF] font-semibold py-3 rounded-none"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Schedule Hours and Emergency */}
            <div className="space-y-0 flex flex-col">
              {/* Schedule Hours and Emergency Combined Card */}
              <Card className="bg-[#C8D8FF] text-text-[#1F2B6C] border-0 shadow-2xl rounded-2xl overflow-hidden flex flex-col h-full">
                <CardContent className="p-10 flex flex-col flex-1">
                  <h3 className="text-3xl font-bold mb-12">Schedule hours</h3>
                  <div className="space-y-5 flex-1">
                    {scheduleHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-8"
                      >
                        <span className="text-[#1F2B6C] font-medium flex-1">
                          {schedule.day}
                        </span>
                        <span className="text-[#1F2B6C]/40">—</span>
                        <span className="text-[#1F2B6C] font-semibold flex-1 text-right">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#1F2B6C]/20 my-10"></div>

                  {/* Emergency Section */}
                  <div className="flex items-center justify-center gap-5">
                    <div className="bg-[#1F2B6C]/20 p-4 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#1F2B6C]e" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Emergency</h3>
                      <p className="text-[#1F2B6C]/80">(+977) 56490799</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <iframe
              width="80%"
              height="400"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1759767696844!2d84.42993417614039!3d27.6809554266538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2e88bac14b%3A0x24bd6c0b4ccc3f96!2sChitwan%20Eye%20Hospital!5e0!3m2!1sen!2snp!4v1764317633011!5m2!1sen!2snp"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default AppointmentPage;
