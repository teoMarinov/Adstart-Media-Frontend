import Image from "next/image";
import { ProjectBrandProps } from "./type";

export default function ProjectBrand({ variant = "large" }: ProjectBrandProps) {
  const imageClassName: Record<typeof variant, string> = {
    large: "size-8 mr-1.5 sm:mr-3",
    small: ":size-6 mr-1 sm:mr-2.5"
  }
  
  const labelClassName: Record<typeof variant, string> = {
    large: "font-extrabold text-3xl",
    small: "font-extrabold text-2xl"
  }

  return (
    <div className="flex items-center justify-center md:justify-start">
      <Image
        aria-hidden
        src="/ui/site-icon.svg"
        alt={"Header site icon"}
        className={imageClassName[variant]}
        width={0}
        height={0}
      />
      <h1 className={labelClassName[variant]}>
        <span className="mr-0.5 sm:mr-1.5">brix</span>
        <span className="text-primary">templates</span>
      </h1>
    </div>
  );
}
