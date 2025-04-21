import { firstStepFormFields } from "./config";
import { formLayoutClassName } from "../../config";
import StepFormContainer from "../StepFormContainer";
import FormFieldCustomInput from "../FormFieldCustomInput";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FristStepForm({ form }: { form: any }) {
  return (
    <StepFormContainer
      heading="Contant details"
      description="Lorem ipsum dolor sit amet consectetur adipisc."
    >
      <div className={formLayoutClassName}>
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
      </div>
    </StepFormContainer>
  );
}
