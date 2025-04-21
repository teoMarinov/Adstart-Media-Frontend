import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useSecondStepForm(form: any) {
  const [selectgedService, setSelectedOption] = useState(
    form.getValues("service") || "Development"
  );
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

  const isOtherSelected =
    selectgedService !== "Development" &&
    selectgedService !== "Web Design" &&
    selectgedService !== "Marketing";

  return {
    isModalOpen,
    isOtherSelected,
    selectgedService,
    handleModalClose,
    handleModalSubmit,
    handleOtherServiceSelect,
    handleChangeSelectedService,
  };
}
