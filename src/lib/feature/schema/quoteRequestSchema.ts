import { QuoteRequestPriceRange } from "@/components/ProjectQuoteForm/config";
import { z } from "zod";

export const quoteRequestSchema = z.object({
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

export const secondStepSchema = quoteRequestSchema.pick({
  service: true,
});

export const thirdStepSchema = quoteRequestSchema.pick({
  priceRange: true,
});

export type FirstStepFormValues = z.infer<typeof firstStepSchema>;
export type SecondStepFormValues = z.infer<typeof secondStepSchema>;
export type ThirdStepFormValues = z.infer<typeof thirdStepSchema>;

export type StepFormValues =
  | FirstStepFormValues
  | SecondStepFormValues
  | ThirdStepFormValues;