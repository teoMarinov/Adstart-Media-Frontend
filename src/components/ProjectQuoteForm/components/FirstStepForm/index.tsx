import FormFieldCustomInput from "../FormFieldCustomInput";
import { firstStepFormFields } from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FristStepForm({ form }: { form: any }) {
  return (
    <div>
      <h2 className="text-xl font-extrabold mb-2">Contant details</h2>

      <p className="text-sm text-neutral-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisc.
      </p>

      <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">
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
    </div>
  );
}
