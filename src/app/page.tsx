import ProjectQuoteForm from "@/components/ProjectQuoteForm";
import { headerHeight } from "@/constants";

export default function Home() {
  return (
    <div
      className={`min-h-[calc(100vh-${headerHeight}px)] md:min-h-0 h-full grid place-items-center `}
    >
      <div className="flex flex-col items-center p-4 max-w-screen">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-center">
            Get a project quote
          </h1>

          <p className="text-gray-600 mt-2 text-center text-xs sm:text-sm">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>

        <ProjectQuoteForm />
      </div>
    </div>
  );
}
