import { toast } from "sonner";

export const openToast = (
  message: string,
  label: string,
  onClose: () => void = () => {}
) => {
  toast(message, {
    action: {
      label,
      onClick: () => {
        toast.dismiss();
        onClose();
      },
    },
    onAutoClose() {
      onClose();
    },
  });
};
