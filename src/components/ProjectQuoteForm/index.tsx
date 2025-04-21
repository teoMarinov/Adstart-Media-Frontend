"use client";

import { z } from "zod";
import { useState } from "react";
import { Card } from "../ui/card";
import { Form } from "../ui/form";
import baseApi from "@/lib/axios";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import ForthStep from "./components/ForthStep";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressMeter from "./components/ProgressMeter";
import FristStepForm from "./components/FirstStepForm";
import ThirdStepForm from "./components/ThirdStepForm";
import SecondStepForm from "./components/SecondStepForm";

export enum QuoteRequestPriceRange {
  LOW = "$5.000-$10.000",
  MEDIUM = "$10.000-$20.000",
  HIGH = "$20.000-$50.000",
  HIGHEST = "$50.000+",
}

const quoteRequestSchema = z.object({
  fullname: z.string().nonempty("Name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  company: z.string().nonempty("Company name is required"),
  service: z.string().nonempty("Service is required"),
  priceRange: z.enum(
    [
      QuoteRequestPriceRange.LOW,
      QuoteRequestPriceRange.MEDIUM,
      QuoteRequestPriceRange.HIGH,
      QuoteRequestPriceRange.HIGHEST,
    ],
    { errorMap: () => ({ message: "Invalid price range" }) }
  ),
});

export const firstStepSchema = quoteRequestSchema.pick({
  fullname: true,
  email: true,
  phoneNumber: true,
  company: true,
});

const secondStepSchema = quoteRequestSchema.pick({
  service: true,
});

const thirdStepSchema = quoteRequestSchema.pick({
  priceRange: true,
});

type FirstStepFormValues = z.infer<typeof firstStepSchema>;
type SecondStepFormValues = z.infer<typeof secondStepSchema>;
type ThirdStepFormValues = z.infer<typeof thirdStepSchema>;

type StepFormValues =
  | FirstStepFormValues
  | SecondStepFormValues
  | ThirdStepFormValues;

export default function ProjectQuoteForm() {
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

  const onFinalSubmit = () => {
    baseApi.post("/quote-request", allFormData);
  };

  return (
    <div className="w-full h-fit max-w-2xl">
      <Form {...currentFormProps}>
        <form onSubmit={currentFormProps.handleSubmit(onStepSubmit)}>
          <Card className="p-8 pb-14 mb-5 mt-4 bg-white shadow-md rounded-3xl border-solid">
            <ProgressMeter currentStep={currentStep} />

            <div className="min-h-[480px] md:min-h-[270px]">
              {currentStep === 1 && <FristStepForm form={firstStepForm} />}
              {currentStep === 2 && <SecondStepForm form={secondStepForm} />}
              {currentStep === 3 && <ThirdStepForm form={thirdStepForm} />}
              {currentStep === 4 && <ForthStep onClick={onFinalSubmit} />}
            </div>
          </Card>

          <div className="w-full max-w-2xl mt-4 flex justify-between">
            <Button
              type="button"
              variant={"secondary"}
              onClick={onStepBack}
              disabled={currentStep === 1}
            >
              Previous step
            </Button>

            {currentStep > 0 && currentStep < 4 && (
              <Button type="submit">Next Step</Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
