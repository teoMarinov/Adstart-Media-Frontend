import FormFieldCustomInput from "../FormFieldCustomInput";
import StepFormContainer from "../StepFormContainer";
import { firstStepFormFields } from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FristStepForm({ form }: { form: any }) {
  return (
    <StepFormContainer
      heading="Contant details"
      description="Lorem ipsum dolor sit amet consectetur adipisc."
    >
      {firstStepFormFields.map((field) => (
        <FormFieldCustomInput
          key={field.formName}
          control={form.control}
          formName={field.formName}
          formLabel={field.formLabel}
          imageSize={field.imageSize}
          inputImagePath={field.inputImagePath}
          inputPlaceholder={field.inputPlaceholder}
        />
      ))}
    </StepFormContainer>
  );
}
