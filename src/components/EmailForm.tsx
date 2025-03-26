
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import WaitlistModal from "./WaitlistModal";

interface EmailFormProps {
  buttonText?: string;
  className?: string;
  placeholderText?: string;
}

const EmailForm = ({
  buttonText = "Join Waitlist",
  className = "",
  placeholderText = "Enter your email address"
}: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open modal immediately without validating email
    setIsSubmitting(true);
    
    // Show modal instead of success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(true);
    }, 500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col sm:flex-row gap-2 max-w-md w-full mx-auto",
          className
        )}
      >
        <Input
          type="email"
          placeholder={placeholderText}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/80 backdrop-blur-sm border-focus-green/20 focus:border-focus-green"
          aria-label="Email address"
        />
        <Button
          type="submit"
          className="h-12 px-6 bg-focus-green hover:bg-focus-green-dark transition-all duration-300 shadow-sm hover:shadow"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing
            </span>
          ) : (
            buttonText
          )}
        </Button>
      </form>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        email={email} 
      />
    </>
  );
};

export default EmailForm;
