"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  email: z.string().email("Invalid email. Use a format like example@email.com"),
});

export default function CreateAccount({
  handleNext,
  currentStep,
  handlePrev,
}: {
  handleNext: () => void;
  currentStep: number;
  handlePrev: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("zuv ajillaa");
    handleNext();
  }

  return (
    <div className=" flex justify-center items-center h-screen m-[auto] gap-[106px]">
      <div className="w-[416px] h-[376px] flex flex-col gap-5">
        <Button variant="outline" size="icon">
          <ChevronLeft className="text-[black]" />
        </Button>
        <div className="gap-1">
          <h3 className="text-[24px] text-[#09090B] font-semibold">
            Create your account
          </h3>
          <p className="text-[16px] text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>your email</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // onClick={handleNext}
              variant="outline"
              type="submit"
              className="w-[416px] bg-[#71717A] text-[#FAFAFA]"
            >
              Let's Go
            </Button>
          </form>
        </Form>

        <div className="flex gap-3 justify-center">
          <p className="text-[16px] text-[#71717A]">Already have an account?</p>
          <p className="text-[#2563EB]">Log in</p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dpy6izfnd/image/upload/v1739930229/delivery_ajw2s0.jpg"
          height="1000"
          width="1000"
          alt="Pizza boy with motorcycle"
          className="rounded-2xl w-[1000px] h-[1000px] object-cover"
        />
      </div>
    </div>
  );
}
