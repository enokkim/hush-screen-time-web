import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  className?: string;
}

const VideoPlaceholder = ({ className }: VideoPlaceholderProps) => {
  const vimeoUrl =
    "https://player.vimeo.com/video/1072827238?h=34827e902e&autoplay=1&title=0&byline=0&portrait=0";

  return (
    <div className={cn("w-full px-4 py-12 text-center", className)}>
      <div className="space-y-4 mb-10">
        <p className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-2xl mx-auto">
          Quick one-time setup.
        </p>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Watch how to set up Hush – you'll only need to do this once.
        </p>
      </div>

      <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-sm">
        <iframe
          src={vimeoUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hush Demo Video"
        />
      </div>
    </div>
  );
};

export default VideoPlaceholder;