
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  className?: string;
}

const VideoPlaceholder = ({ className }: VideoPlaceholderProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-2xl overflow-hidden aspect-video w-full max-w-5xl mx-auto bg-gradient-to-br from-focus-blue/5 to-focus-green/10 shadow-sm",
        className
      )}
    >
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <button 
          className="mb-4 w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
          aria-label="Play demo video"
        >
          <Play className="w-8 h-8 text-focus-green group-hover:scale-110 transition-transform duration-300" fill="rgba(34, 197, 94, 0.2)" />
        </button>
        
        <h3 className="text-xl md:text-2xl font-medium text-foreground/90 backdrop-blur-sm py-2 px-4 rounded-full bg-white/30">
          See how it works
        </h3>
        
        <p className="mt-2 text-sm text-foreground/70 max-w-md backdrop-blur-sm py-1 px-3 rounded-full bg-white/20">
          Your demo video will appear here
        </p>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
