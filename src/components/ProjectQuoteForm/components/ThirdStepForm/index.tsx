import useThirdStepForm from "./hook";
import StepFormContainer from "../StepFormContainer";
import { FormField, FormItem } from "@/components/ui/form";
import ThirdStepOptionInput from "../ThirdStepOptionInput";
import { formLayoutClassName, QuoteRequestPriceRange } from "../../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThirdStepForm({ form }: { form: any }) {
  const { selectedPriceRange, handlePriceRangeChange } = useThirdStepForm(form);
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
