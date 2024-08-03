"use client";
// Assets
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function NewsletterForm() {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    //set loading state 
    
    const result = await fetch("/api/email-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!result.ok) {
      toast({
        description: "Something went wrong, please try again later.",
        className: "bg-red-500 text-white border-red-500",
      });
      return;
    }

    form.reset();
    const data = await result.json();
    const { message, error } = data;
    if (error) {
      //error toaster
      toast({
        description: message,
        className: "bg-red-500 text-white border-red-500",
      });
    } else {
      toast({
        description: message,
        className: "bg-green-500 text-white border-green-500",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 text-left mb-6 max-w-xs overflow-hidden"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Sign me up!
        </Button>
      </form>
    </Form>
  );
}
