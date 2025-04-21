import { useState } from "react";

export default function useSecondStepModal(onSubmit: (value: string) => void) {
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

  return {
    submitError,
    handleChange,
    handleSubmit,
  };
}
