import Image from "next/image";

export default function Header() {
  return (
    <header className="flex ml-5 sm:ml-10 my-3 ms:my-5 gap-1.5 sm:gap-3 items-center">
      <Image
        aria-hidden
        src="/ui/site-icon.svg"
        alt={"Header site icon"}
        className="size-6 sm:size-8"
        width={0}
        height={0}
      />
      <h1 className="text-[22px] font-extrabold sm:text-3xl">
        <span className="mr-0.5 sm:mr-1.5">brix</span>
        <span className="text-primary">templates</span>
      </h1>
    </header>
  );
}
