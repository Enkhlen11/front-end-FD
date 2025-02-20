"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
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
const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email. Use a format like example@email.com."),
  password: z.string().min(2).max(50),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("zuv ajillaa");
  }

  return (
    <div className=" flex justify-center items-center h-screen m-[auto] gap-[106px]">
      <div className="w-[416px] h-[376px] flex flex-col gap-5">
        <Button variant="outline" size="icon">
          <ChevronLeft className="text-[black]" />
        </Button>
        <div className="gap-1">
          <h3 className="text-[24px] text-[#09090B] font-semibold">Log in</h3>
          <p className="text-[16px] text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Your email</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Password</FormLabel> */}
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit">Submit</Button> */}
              <p>Forget password ?</p>
              <Button
                type="submit"
                variant="outline"
                className="w-[416px] bg-[#71717A] text-[#FAFAFA]"
              >
                Let's Go
              </Button>
            </form>
          </Form>
          {/* <input
            type="text"
            placeholder="Enter your email address"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          />
          <input
            type="text"
            placeholder="Password"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          /> */}
        </div>
        <div className="flex flex-col gap-5"></div>
        <div className="flex gap-3 justify-center">
          <p className="text-[16px] text-[#71717A]">Don't have an account?</p>
          <p className="text-[#2563EB]">Sign up</p>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://res.cloudinary.com/da2ltmfaf/image/upload/v1739929534/frame_h8teog.png"
          height={1000}
          width={1000}
          alt="Pizza boy with motorcycle"
          className="w-full"
        />
      </div>
    </div>
  );
}
