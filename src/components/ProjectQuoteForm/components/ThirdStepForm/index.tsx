import { FormField, FormItem } from "@/components/ui/form";
import { formLayoutClassName } from "../../config";
import StepFormContainer from "../StepFormContainer";
import ThirdStepOptionInput from "../ThirdStepOptionInput";
import { QuoteRequestPriceRange } from "../..";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThirdStepForm({ form }: { form: any }) {
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    form.getValues("priceRange") || QuoteRequestPriceRange.LOW
  );

  const handlePriceRangeChange = (value: QuoteRequestPriceRange) => {
    setSelectedPriceRange(value);
    
    form.setValue("priceRange", value);
  };

  return (
    <StepFormContainer
      heading="Our services"
      description="Please select which service you are interested in."
    >
      <FormField
        control={form.control}
        name="priceRange"
        render={() => (
          <FormItem className={formLayoutClassName}>
            {Object.values(QuoteRequestPriceRange).map((option) => (
              <ThirdStepOptionInput
                key={option}
                value={option}
                isSelected={selectedPriceRange === option}
                onClick={() => handlePriceRangeChange(option)}
              />
            ))}
          </FormItem>
        )}
      />
    </StepFormContainer>
  );
}
