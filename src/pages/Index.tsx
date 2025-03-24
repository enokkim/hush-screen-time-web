
import { Lock, Circle, Clock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmailForm from "@/components/EmailForm";
import FeatureCard from "@/components/FeatureCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const features = [
    {
      title: "Tap to Lock",
      description: "Lock distracting apps with a single tap of your Hush Key",
      icon: Lock,
    },
    {
      title: "Be Present",
      description: "Stay engaged in the real world without digital interruptions",
      icon: Circle,
    },
    {
      title: "Tap to Return",
      description: "Access your apps only when you consciously choose to",
      icon: Clock,
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Place the Hush Key",
      description: "Put your physical Hush Key on its dock or wear it as a bracelet",
      imageUrl: "https://placehold.co/100x100/22c55e/FFFFFF?text=Hush",
    },
    {
      number: 2,
      title: "Apps Lock Automatically",
      description: "Your selected distracting apps become inaccessible",
      imageUrl: "https://placehold.co/100x100/3b82f6/FFFFFF?text=Lock",
    },
    {
      number: 3,
      title: "Tap to Unlock",
      description: "When you're ready, tap the Hush Key to regain access",
      imageUrl: "https://placehold.co/100x100/22c55e/FFFFFF?text=Tap",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-8 md:pt-28 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-30" />
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-medium tracking-tight">
              Hush: Stay Present, Stay Focused
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A physical key to unlock digital distractions—only when you're ready
            </p>
          </div>

          <div className="mb-10 md:mb-16 animate-scale-in">
            <VideoPlaceholder />
          </div>

          <div className="max-w-md mx-auto text-center">
            <EmailForm />
            <p className="mt-3 text-sm text-muted-foreground">
              Join our waitlist to be the first to know when Hush launches
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-b from-white to-secondary/30">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
            Reclaim Your Attention with Hush
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-focus-green/5">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-6">
            How Hush Works
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Hush works seamlessly with your iOS devices to help you maintain focus
          </p>
          
          <HowItWorks steps={howItWorksSteps} />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-4 bg-white border-t">
        <div className="container-tight">
          <div className="max-w-md mx-auto text-center mb-10">
            <h3 className="text-2xl font-medium mb-4">
              Be the first to experience Hush
            </h3>
            <EmailForm
              buttonText="Join Waitlist"
              placeholderText="Your email address"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              We'll only email you about product updates
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm">
                <Smartphone className="w-4 h-4 text-focus-green" />
                <span className="text-sm">Hush is coming soon to iOS</span>
              </div>
            </div>
            
            <Separator className="mb-6 max-w-xs w-full" />
            
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Hush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
