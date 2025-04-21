import baseApi from "@/lib/axios";
import { useForm } from "react-hook-form";
import { openToast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  subscribeSchema,
  SubscribeSchemaValues,
} from "@/lib/feature/schema/subscribeSchema";

export default function UseSubscribeForm() {
  const form = useForm<SubscribeSchemaValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: SubscribeSchemaValues) => {
    baseApi
      .post("/subscribe", data)
      .then(() => openToast("Thank you for subscribing!", "Great!"))
      .catch((error) => {
        if (error.response.status === 409) {
          openToast("Already subscribed with this email!", "Close");
        }
      });
  };

  return {
    form,
    onSubmit,
  };
}
