import clsx from "clsx";
import Image from "next/image";
import { SecondStepOptionInputProps } from "./type";
import { formToggleOptionContainerClassName } from "../../config";

export default function SecondStepOptionInput({
  title,
  onClick,
  iconPath,
  isSelected,
}: SecondStepOptionInputProps) {
  return (
    <div
      className={clsx(
        formToggleOptionContainerClassName,
        isSelected ? "border-primary" : "border-neutral-200"
      )}
      onClick={onClick}
    >
      <div className="bg-primary/20 p-2 rounded-full">
        <Image src={iconPath} alt="" width={25} height={25} />
      </div>
      <span className="font-bold">{title}</span>
    </div>
  );
}
