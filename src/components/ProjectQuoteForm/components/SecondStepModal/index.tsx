import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import useSecondStepModal from "./hook";
import { SecondStepModalProps } from "./type";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/CustomInput";

export default function SecondStepModal({
  open,
  onClose,
  onSubmit,
}: SecondStepModalProps) {
  const { handleChange, handleSubmit, submitError } =
    useSecondStepModal(onSubmit);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter your desired service</DialogTitle>

          <CustomInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value)
            }
            placeholder="Enter your email"
          >
            <Button onClick={handleSubmit} size="sm" type="submit">
              Save
            </Button>
          </CustomInput>
          {submitError && (
            <p className="text-destructive ml-1 mt-1"> {submitError}</p>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
