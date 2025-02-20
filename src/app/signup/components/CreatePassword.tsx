"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });
// formSchema.parse({ password: "asdf", confirm: "qwer" });

export default function CreatePassword({
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
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" flex justify-center items-center h-screen m-[auto] gap-[106px]">
      <div className="w-[416px] h-[376px] flex flex-col gap-5">
        <Button variant="outline" size="icon" onClick={handlePrev}>
          <ChevronLeft className="text-[black]" />
        </Button>
        <div className="gap-1">
          <h3 className="text-[24px] text-[#09090B] font-semibold">
            Create a strong password
          </h3>
          <p className="text-[16px] text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Confirm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-[8px]">
                <Checkbox />
                <p className="text-[#71717A]">Show password</p>
              </div>
              <Button
                variant="outline"
                className="w-[416px] bg-[#71717A] text-[#FAFAFA]"
              >
                Let's Go
              </Button>
            </form>
          </Form>
          {/* <input
            type="text"
            placeholder="Password"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          />
          <input
            type="text"
            placeholder="Confirm"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          /> */}
        </div>
        <div className="flex flex-col gap-5"></div>
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
