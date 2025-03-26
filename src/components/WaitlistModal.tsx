
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

export default function WaitlistModal({ isOpen, onClose, email }: WaitlistModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [source, setSource] = useState("");
  const [isEuropeBased, setIsEuropeBased] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Send data to Google Sheets using the Apps Script web app URL
    fetch("https://script.google.com/macros/s/AKfycbzQe4ySuK0QZ8jRAUXQ4oK0GZvjE4lU2PsWGLrYq-oHR3W5KIYLq0jBT0uAVL7GOxQo/exec", {
      method: "POST",
      mode: "no-cors", // This is important for CORS issues
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
      // We can't actually read the response due to no-cors mode
      // So we just assume success
      toast.success("Thanks for requesting early access to Hush!");
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
              value={email}
              readOnly
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
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "SIGN UP"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
