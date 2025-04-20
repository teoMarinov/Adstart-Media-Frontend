import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { headerHeight } from "./layout";

export default function Home() {
  return (
    <div className={`min-h-[calc(100vh-${headerHeight}px)] md:min-h-0 h-full grid place-items-center`}>
      <div className="flex flex-col items-center justify-between gap-4 p-4">
        <div>
          <h1 className="text-2xl font-bold text-center">
            Get a project quote
          </h1>

          <p className="text-gray-600 mt-2 text-center text-xs sm:text-sm">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>

        <Card className="w-full h-fit max-w-2xl p-6 mt-4 bg-white shadow-md rounded-lg">
          <Button>Next Step</Button>
          <Button>Next Step</Button>
          <Button>Next Step</Button>
          <Button>Next Step</Button>
        </Card>

        <div className="w-full max-w-2xl mt-4 flex justify-end">
          <Button>Next Step</Button>
        </div>
      </div>
    </div>
  );
}
