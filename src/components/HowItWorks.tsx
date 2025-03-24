
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface HowItWorksProps {
  className?: string;
  steps: Step[];
}

const HowItWorks = ({ className, steps }: HowItWorksProps) => {
  return (
    <div className={cn("py-8", className)}>
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* The connecting line between steps */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-focus-green/0 via-focus-green/50 to-focus-green/0 z-0" />
          
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <div className="relative mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-2 mx-auto relative z-10 border-2 border-focus-green/20">
                    <span className="text-2xl font-medium text-focus-green">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-sm border border-focus-green/10">
                    {step.imageUrl ? (
                      <div className="w-20 h-20 mx-auto mb-4 animate-float">
                        <img src={step.imageUrl} alt={step.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-focus-green/10 flex items-center justify-center animate-float">
                        <span className="text-4xl text-focus-green/80">{step.number}</span>
                      </div>
                    )}
                    
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
