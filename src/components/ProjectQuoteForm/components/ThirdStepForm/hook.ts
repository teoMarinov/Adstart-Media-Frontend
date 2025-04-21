/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { QuoteRequestPriceRange } from "../../config";

export default function useThirdStepForm(form: any) {
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    form.getValues("priceRange") || QuoteRequestPriceRange.LOW
  );

  const handlePriceRangeChange = (value: QuoteRequestPriceRange) => {
    setSelectedPriceRange(value);

    form.setValue("priceRange", value);
  };

  return {
    selectedPriceRange,
    handlePriceRangeChange,
  };
}
