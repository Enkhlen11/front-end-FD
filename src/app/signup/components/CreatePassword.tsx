"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreatePassword({
  handleNext,
  currentStep,
  handlePrev,
}: {
  handleNext: () => void;
  currentStep: number;
  handlePrev: () => void;
}) {
  return (
    <div className=" flex justify-center items-center h-screen m-[auto] gap-[106px]">
      <div className="w-[416px] h-[376px] flex flex-col gap-5">
        <Button variant="outline" size="icon">
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
          <input
            type="text"
            placeholder="Password"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          />
          <input
            type="text"
            placeholder="Confirm"
            className=" border-[1px] rounded-md py-2 px-[12px]"
          />
          <div className="flex gap-[8px]">
            <Checkbox />
            <p className="text-[#71717A]">Show password</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Button
            variant="outline"
            className="w-[416px] bg-[#71717A] text-[#FAFAFA]"
          >
            Let's Go
          </Button>
        </div>
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
