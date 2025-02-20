"use client";
import { useState } from "react";
import CreateAccount from "./components/CreateAccount";
import CreatePassword from "./components/CreatePassword";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [CreateAccount, CreatePassword][currentStep];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      <FormSteps
        handleNext={handleNext}
        currentStep={currentStep}
        handlePrev={handlePrev}
      />
    </div>
  );
}
