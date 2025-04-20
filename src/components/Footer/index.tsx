import ProjectBrand from "../ProjectBrand";
import SubscribeForm from "./components/SubscribeForm";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-10 lg:px-20 py-4 sm:py-6 lg:py-10 border-solid border-t border-neutral-400">
      <div className="block md:flex flex-row-reverse justify-between">
        <SubscribeForm />

        <div className="mt-4 md:mt-0">
          <ProjectBrand variant="small" />
          
          <p className="text-neutral-600 text-xs sm:text-sm pt-2 text-center md:text-start">
            Copyright © 2025 BRIX Templates | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
