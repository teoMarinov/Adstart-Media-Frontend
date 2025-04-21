import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ForthStep({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-full text-center px-18 flex justify-center flex-col items-center">
      <Image
        src="/ui/form-completed-icon.svg"
        alt="Submition form completed"
        width={120}
        height={120}
        className="mx-auto mb-4"
      />

      <h2 className="text-xl font-extrabold mb-2">Submit your quote request</h2>

      <p className="text-sm text-neutral-600 mb-6">
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your message to receive a project
        quote in 24 - 48 hours.
      </p>

      <Button onClick={onClick}>Submit</Button>
    </div>
  );
}
