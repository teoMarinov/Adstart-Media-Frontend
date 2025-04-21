import clsx from "clsx";
import { ThirdStepOptionInputmProps } from "./type";
import { formToggleOptionContainerClassName } from "../../config";

export default function ThirdStepOptionInput({
  value,
  onClick,
  isSelected,
}: ThirdStepOptionInputmProps) {
  return (
    <div
      className={clsx(
        formToggleOptionContainerClassName,
        "relative flex items-center",
        isSelected ? "border-primary" : "border-neutral-200"
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          "absolute left-3 w-4 h-4 rounded-full border border-neutral-400",
          isSelected ? "bg-primary border-primary" : "bg-white"
        )}
      >
        {isSelected && (
          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
      
      <span className="font-bold ml-8">{value}</span>{" "}
    </div>
  );
}
