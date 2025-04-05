import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  className?: string;
  vimeoId: string;
}

const VideoPlaceholder = ({ className, vimeoId }: VideoPlaceholderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden aspect-video w-full max-w-5xl mx-auto bg-gradient-to-br from-focus-blue/5 to-focus-green/10 shadow-sm",
        className
      )}
    >
      {isPlaying ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video Player"
        ></iframe>
      ) : (
        <>
          <div className="absolute inset-0 leaf-pattern opacity-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="mb-4 w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
              aria-label="Play Hush demo video"
            >
              <Play
                className="w-8 h-8 text-focus-green group-hover:scale-110 transition-transform duration-300"
                fill="rgba(34, 197, 94, 0.2)"
              />
            </button>

            <div className="flex items-center justify-center mb-3">
              <img
                src="/lovable-uploads/8e501e15-8960-4aa4-8495-7de703b7b2b1.png"
                alt="Hush Logo"
                className="w-10 h-10 mr-2"
              />
              <h3 className="text-xl md:text-2xl font-medium text-foreground/90 backdrop-blur-sm py-2 px-4 rounded-full bg-white/30">
                See how Hush works
              </h3>
            </div>

            <p className="mt-2 text-sm text-foreground/70 max-w-md backdrop-blur-sm py-1 px-3 rounded-full bg-white/20">
              Watch the Hush experience in action
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlaceholder;