import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  gradient?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className = "",
  iconClassName = "",
  gradient = "from-green-500 to-emerald-600"
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md transform hover:-translate-y-1",
        className
      )}
    >
      <div className={cn(
        `w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${gradient} text-white mb-4`,
        iconClassName
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
