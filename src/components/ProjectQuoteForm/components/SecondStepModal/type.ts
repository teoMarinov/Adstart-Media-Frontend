export interface SecondStepModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
}
