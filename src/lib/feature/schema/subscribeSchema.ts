import { z } from "zod";

export const subscribeSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

export type SubscribeSchemaValues = z.infer<typeof subscribeSchema>;
