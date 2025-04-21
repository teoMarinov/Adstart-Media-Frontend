import clsx from "clsx";
import Image from "next/image";
import { SecondStepOptionItemProps } from "./type";

export default function SecondStepOptionInput({
  title,
  onClick,
  iconPath,
  isSelected,
}: SecondStepOptionItemProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-5 cursor-pointer p-3 rounded-2xl border-2 shadow-sm",
        isSelected ? "border-primary" : "border-neutral-200"
      )}
      onClick={onClick}
    >
      <div className="bg-primary/20 p-2 rounded-full" >
        <Image
          src={iconPath}
          alt=""
          width={25}
          height={25}
          
        />
      </div>
      <span className="font-bold">{title}</span>
    </div>
  );
}
