import clsx from "clsx";
import { StepCounterProps } from "./type";

export default function StepCounter({ step, isReached }: StepCounterProps) {
  return (
    <div
      className={clsx(
        "bg-primary size-8 rounded-full min-w-8 grid place-items-center",
        isReached ? "bg-primary text-white" : "bg-secondary text-neutral-600"
      )}
    >
      <span className="font-semibold">{step}</span>
    </div>
  );
}
