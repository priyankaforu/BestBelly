"use client";
import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validationSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Emailcard() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      gmailId: "",
    },
  });

  async function onSubmit(data: z.infer<typeof validationSchema>) {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/users", {
        gmail_id: data.gmailId,
      });
      if (response.data.success) {
        toast("✅ Thanks for subscribing", {
          description: "We will notify you when the product is launched.",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error || "Failed to submit, Please try again";
        toast(errorMessage);
      } else {
        toast("Something went wrong, please try again");
      }
    } finally {
      form.reset();
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="min-w-full md:min-w-[700px] md:max-w-1/2 p-4 border-2 border-gray-600">
      <CardHeader>
        <CardTitle className="tracking-normal leading-1.5 md:leading-relaxed text-lg md:text-xl">
          This product is free for first 500 users. Grab the Early Bird seat to
          safe guard your health
        </CardTitle>
        <CardDescription>Enter your email below to get access</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent>
            <FormField
              control={form.control}
              name="gmailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your name@email.com"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormDescription>
                    We will send you early bird access after at the product
                    launch
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer hover:bg-chart-2 transition-all duration-500 text-lg h-[40px]"
            >
              {isSubmitting ? "submitting..." : "submit"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
