"use client";

import {
  Form,
  FormItem,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/CustomInput";
import UseSubscribeForm from "./hook";

export default function SubscribeForm() {
  const {form, onSubmit} = UseSubscribeForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <CustomInput placeholder="Enter your email" {...field}>
                  <Button size="sm" type="submit">Subscribe</Button>
                </CustomInput>
              </FormControl>

              <FormMessage className="pl-3 sm:absolute sm:-bottom-5.5" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
