import { z } from "zod";
import baseApi from "@/lib/axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function UseSubscribeForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    baseApi.post("/subscribe", data);
  };

  return {
    form,
    onSubmit,
  };
}
