import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  className?: string;
  isHushed?: boolean;
}

const VideoPlaceholder = ({ className, isHushed }: VideoPlaceholderProps) => {
  const vimeoUrl =
    "https://player.vimeo.com/video/1072827238?h=34827e902e&autoplay=1&muted=1&title=0&byline=0&portrait=0";

  return (
    <div className={cn("w-full px-4 py-12 text-center", className)}>
      <div className="space-y-4 mb-10">
        <p className={cn(
          "text-xl md:text-2xl font-semibold max-w-2xl mx-auto transition-colors duration-700",
          isHushed ? "text-hush-text-light" : "text-hush-text-dark"
        )}>
          See Hush in Action
        </p>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Watch how easy it is to use Hush<br />
          - block distractions and reclaim your focus.
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