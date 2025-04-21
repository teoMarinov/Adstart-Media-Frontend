import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";
import { SecondStepModalProps } from "./type";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/CustomInput";

export default function SecondStepModal({
  open,
  onClose,
  onSubmit,
}: SecondStepModalProps) {
    
  const [customService, setCustomService] = useState<string>("");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSubmitError(null);

    setCustomService(value);
  };

  const handleSubmit = () => {
    if (!isNaN(Number(customService))) {
      setSubmitError("Customer service must be a string");
      return;
    }

    if (customService.trim() === "") {
      setSubmitError("Customer service is required");
      return;
    }

    if (customService.length > 20) {
      setSubmitError("Customer service must be less than 50 characters");
      return;
    }

    if (customService.length < 5) {
      setSubmitError("Customer service must be at least 5 characters long");
      return;
    }

    onSubmit(customService);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter your desired service</DialogTitle>

          <CustomInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value)
            }
            placeholder="Enter your email"
          >
            <Button onClick={handleSubmit} size="sm" type="submit">
              Save
            </Button>
          </CustomInput>
          {submitError && (
            <p className="text-destructive ml-1 mt-1"> {submitError}</p>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
