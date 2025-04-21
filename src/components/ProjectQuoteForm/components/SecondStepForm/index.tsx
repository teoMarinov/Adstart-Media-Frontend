import { FormField, FormItem } from "@/components/ui/form";
import StepFormContainer from "../StepFormContainer";
import SecondStepOptionInput from "../SecondStepOptionInput";
import { useState } from "react";
import { secondStepFormOptions } from "./config";
import { formLayoutClassName } from "../../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SecondStepForm({ form }: { form: any }) {
  const [selectgedService, setSelectedOption] = useState("Development");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeSelectedService = (option: string) => {
    setSelectedOption(option);

    form.setValue("service", option);
  };

  const handleOtherServiceSelect = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOtherServiceSubmit = (value: string) => {
    setIsModalOpen(false);

    setSelectedOption("Other");

    form.setValue("service", value);
  };

  return (
    <StepFormContainer
      heading="Our services"
      description="Please select which service you are interested in."
    >
        <FormField
          control={form.control}
          name="service"
          render={() => (
            <FormItem className={formLayoutClassName}>
              {secondStepFormOptions.map((option) => (
                <SecondStepOptionInput
                  key={option.title}
                  title={option.title}
                  iconPath={option.iconPath}
                  isSelected={selectgedService === option.title}
                  onClick={() => handleChangeSelectedService(option.title)}
                />
              ))}
              <SecondStepOptionInput
                title={"Other"}
                iconPath={"/ui/other-service-icon.svg"}
                isSelected={selectgedService === "Other"}
                onClick={handleOtherServiceSelect}
              />
            </FormItem>
          )}
        />
    </StepFormContainer>
  );
}
