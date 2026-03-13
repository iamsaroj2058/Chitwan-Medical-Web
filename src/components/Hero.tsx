import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/image.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-background via-background to-secondary pt-8 md:pt-16 pb-6 overflow-hidden min-h-[280px] md:min-h-[520px]"
      id="home"
    >
      {/* background image with fixed size */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
        style={{ width: "100vw", height: "45vw" }}
      >
        <img
          src={heroDoctor}
          alt="Professional doctor with stethoscope"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/10" />
      </div>

      <div className="container mx-auto px-0 relative">
        <div
          className="grid grid-cols-3 md:grid-cols-2 gap-8 items-center"
          style={{ minHeight: "min(35vw, 520px)" }}
        >
          <div className="space-y-4 z-20 relative max-w-xl col-span-2 md:col-span-1 mx-auto md:mx-0 px-3 md:px-0 translate-x-2 md:translate-x-0">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">
              Caring for life
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight text-foreground">
              We care ,<br />
              Your Sight
            </h1>
            <a href="/services">
              <Button
                size="lg"
                className="bg-[#BFD2F8] text-black shadow-lg px-4 py-5 rounded-md mt-5"
              >
                Our Services
              </Button>
            </a>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
