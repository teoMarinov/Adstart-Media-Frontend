import { StepFormContainerProps } from "./type";

export default function StepFormContainer({
  heading,
  children,
  description,
}: StepFormContainerProps) {
  return (
    <div>
      <h2 className="text-xl font-extrabold mb-2">{heading}</h2>

      <p className="text-sm text-neutral-600 mb-6">{description}</p>

      <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">{children}</div>
    </div>
  );
}
