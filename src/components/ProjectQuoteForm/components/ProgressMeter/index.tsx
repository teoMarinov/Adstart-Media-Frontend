import { Progress } from "@/components/ui/progress";
import StepCounter from "../StepCounter";

export default function ProgressMeter({
  currentStep,
}: {
  currentStep: number;
}) {
  const generateProgressValue = (step: number) => {
    if (currentStep < step) return 0;
    if (currentStep === step) return 50;
    if (currentStep > step) return 100;
  };

  return (
    <div className="flex w-full items-center mb-4 gap-2 sm:gap-4 pb-8 border-solid border-b border-neutral-400 px-2 sm:px-6">
      <StepCounter step={1} isReached={currentStep >= 1} />

      <Progress value={generateProgressValue(1)} />

      <StepCounter step={2} isReached={currentStep >= 2} />

      <Progress value={generateProgressValue(2)} />

      <StepCounter step={3} isReached={currentStep >= 3} />

      <Progress value={generateProgressValue(3)} />

      <StepCounter step={4} isReached={currentStep >= 4} />
    </div>
  );
}
