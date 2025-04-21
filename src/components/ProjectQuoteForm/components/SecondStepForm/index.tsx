import { useState } from "react";
import { secondStepFormOptions } from "./config";
import SecondStepModal from "../SecondStepModal";
import { formLayoutClassName } from "../../config";
import StepFormContainer from "../StepFormContainer";
import { FormField, FormItem } from "@/components/ui/form";
import SecondStepOptionInput from "../SecondStepOptionInput";

export default function SecondStepForm({
  form,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}) {
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

  const handleModalSubmit = (value: string) => {
    setIsModalOpen(false);

    setSelectedOption("Other");

    form.setValue("service", value);
  };

  return (
    <>
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
        <SecondStepModal
          open={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      </StepFormContainer>
    </>
  );
}
