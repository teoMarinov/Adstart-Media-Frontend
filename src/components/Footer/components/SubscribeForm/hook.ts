import baseApi from "@/lib/axios";
import { useForm } from "react-hook-form";
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
    baseApi.post("/subscribe", data);
  };

  return {
    form,
    onSubmit,
  };
}
