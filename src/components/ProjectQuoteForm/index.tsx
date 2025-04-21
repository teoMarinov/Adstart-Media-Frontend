"use client";

import { Card } from "../ui/card";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import useProjectQuoteForm from "./hook";
import ForthStep from "./components/ForthStep";
import ProgressMeter from "./components/ProgressMeter";
import FristStepForm from "./components/FirstStepForm";
import ThirdStepForm from "./components/ThirdStepForm";
import SecondStepForm from "./components/SecondStepForm";

export default function ProjectQuoteForm() {
  const {
    onStepBack,
    onStepSubmit,
    onFinalSubmit,
    currentStep,
    thirdStepForm,
    firstStepForm,
    secondStepForm,
    currentFormProps,
  } = useProjectQuoteForm();

  return (
    <div className="w-full h-fit max-w-2xl">
      <Form {...currentFormProps}>
        <form onSubmit={currentFormProps.handleSubmit(onStepSubmit)}>
          <Card className="p-5 sm:p-8 pb-14 mb-5 mt-4 bg-white shadow-md rounded-3xl border-solid">
            <ProgressMeter currentStep={currentStep} />

            <div className="min-h-[480px] md:min-h-[270px]">
              {currentStep === 1 && <FristStepForm form={firstStepForm} />}
              {currentStep === 2 && <SecondStepForm form={secondStepForm} />}
              {currentStep === 3 && <ThirdStepForm form={thirdStepForm} />}
              {currentStep === 4 && <ForthStep onClick={onFinalSubmit} />}
            </div>
          </Card>

          <div className="w-full max-w-2xl mt-4 flex justify-between">
            <Button
              type="button"
              variant={"secondary"}
              onClick={onStepBack}
              disabled={currentStep === 1}
            >
              Previous step
            </Button>

            {currentStep > 0 && currentStep < 4 && (
              <Button type="submit">Next Step</Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
