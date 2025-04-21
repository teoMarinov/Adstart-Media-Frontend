import { Card } from "../ui/card";
import ProgressMeter from "./components/ProgressMeter";

export default function ProjectQuoteForm() {
    return (
        <Card className="w-full h-fit max-w-2xl p-6 mb-5 mt-4 bg-white shadow-md rounded-lg border-solid">
            <ProgressMeter currentStep={1} />
        </Card>
    )
}