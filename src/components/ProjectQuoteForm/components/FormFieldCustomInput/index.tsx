import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import CustomInput from "@/components/ui/CustomInput";

export interface FormFieldCustomInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  formName: string;
  formLabel: string;
  imageSize: number;
  inputImagePath: string;
  inputPlaceholder: string;
}

export default function FormFieldCustomInput({
  control,
  formName,
  formLabel,
  imageSize,
  inputImagePath,
  inputPlaceholder,
}: FormFieldCustomInputProps) {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>

          <FormControl>
            <CustomInput placeholder={inputPlaceholder} {...field}>
              <Image
                src={inputImagePath}
                alt="Input icon"
                width={imageSize}
                height={imageSize}
                className="-translate-x-2"
              />
            </CustomInput>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
