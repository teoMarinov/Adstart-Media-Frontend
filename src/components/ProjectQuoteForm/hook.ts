import { useState } from "react";
import baseApi from "@/lib/axios";
import { useForm } from "react-hook-form";
import {
  FirstStepFormValues,
  firstStepSchema,
  SecondStepFormValues,
  secondStepSchema,
  StepFormValues,
  ThirdStepFormValues,
  thirdStepSchema,
} from "@/lib/feature/schema/quoteRequestSchema";
import { QuoteRequestPriceRange } from "./config";
import { zodResolver } from "@hookform/resolvers/zod";
import { openToast } from "@/utils/toast";

export default function useProjectQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [allFormData, setAllFormData] = useState({});

  const firstStepForm = useForm<FirstStepFormValues>({
    resolver: zodResolver(firstStepSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
      company: "",
    },
  });

  const secondStepForm = useForm<SecondStepFormValues>({
    resolver: zodResolver(secondStepSchema),
    defaultValues: {
      service: "Development",
    },
  });

  const thirdStepForm = useForm<ThirdStepFormValues>({
    resolver: zodResolver(thirdStepSchema),
    defaultValues: {
      priceRange: QuoteRequestPriceRange.LOW,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFormProps = (): any => {
    switch (currentStep) {
      case 1:
        return firstStepForm;
      case 2:
        return secondStepForm;
      case 3:
        return thirdStepForm;
      default:
        return firstStepForm;
    }
  };

  const onStepSubmit = (values: StepFormValues) => {
    setAllFormData((prev) => ({ ...prev, ...values }));
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onStepBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentFormProps = getFormProps();

  const resetForm = () => {
    firstStepForm.reset();
    secondStepForm.reset();
    thirdStepForm.reset();
    setCurrentStep(1);
  };

  const onFinalSubmit = () => {
    baseApi.post("/quote-request", allFormData).then(() => {
      openToast("Quote request sent successfully!", "Great!", resetForm);
    });
  };

  return {
    onStepBack,
    onStepSubmit,
    onFinalSubmit,
    currentStep,
    thirdStepForm,
    firstStepForm,
    secondStepForm,
    currentFormProps,
  };
}
