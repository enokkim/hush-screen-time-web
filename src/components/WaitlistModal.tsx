import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function WaitlistModal({ isOpen, onClose, email: initialEmail }: WaitlistModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(initialEmail || "");
  const [source, setSource] = useState("");
  const [isEuropeBased, setIsEuropeBased] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use useEffect instead of useState to update email when initialEmail changes
  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the form data
    const formData = {
      firstName,
      lastName,
      email,
      source,
      isEuropeBased,
      timestamp: new Date().toISOString()
    };

    console.log("Submitting waitlist data:", formData);
    
    // For FormSubmit.co to work properly, the first submission to a new email address
    // will send an activation email rather than forwarding the form submission
    // After activation, submissions will be forwarded to your email
    const formUrl = "https://formsubmit.co/ajax/contact@hushscreentime.com";
    
    fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: `Hush Waitlist - New Signup: ${email}`, // Makes the email subject clearer
        _captcha: "false", // Disable captcha for better UX
        _template: "table", // Use table format for better email readability
        _replyto: email, // Allow replying to the submitter
      }),
    })
    .then((response) => {
      // Handle success regardless of response format
      console.log("Form submission response status:", response.status);
      toast.success("Thanks for requesting early access to Hush!");
      
      // Show an additional informational toast about email activation if needed
      if (response.status === 200) {
        toast.info("If this is your first submission, please check your inbox for an activation email from FormSubmit.", {
          duration: 8000,
        });
      }
      
      setIsSubmitting(false);
      resetForm();
      onClose();
    })
    .catch((error) => {
      console.error("Error submitting waitlist data:", error);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    });
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail(initialEmail || "");
    setSource("");
    setIsEuropeBased(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            REQUEST EARLY ACCESS
          </DialogTitle>
          <DialogDescription className="text-gray-500 mt-2">
            Fill out this form to join our waitlist for early access.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                placeholder="FIRST NAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="LAST NAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="h-12"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-600 text-md mb-2">HOW DID YOU HEAR ABOUT US?</p>
            <Select value={source} onValueChange={setSource} required>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="reddit">Reddit</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="friend">Friend / Word of Mouth</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="europe" 
              checked={isEuropeBased} 
              onCheckedChange={(checked) => setIsEuropeBased(checked === true)} 
            />
            <label
              htmlFor="europe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Are you based in Europe?
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-focus-green hover:bg-focus-green-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "SIGN UP"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
