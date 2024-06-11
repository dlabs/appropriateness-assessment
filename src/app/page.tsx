"use client";

import { useState } from "react";
import InitialMessage from "@/components/InitialMessage";
import QuizForm from "@/components/QuizForm";
import SuccessMessage from "@/components/SuccessMessage";
import FailMessage from "@/components/FailMessage";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Logo from "@/components/Logo";

const QuizPage: React.FC = () => {
  const [stage, setStage] = useState<"initial" | "quiz" | "success" | "fail">(
    "initial"
  );

  const handleStart = () => {
    setStage("quiz");
  };

  const handleSubmitSuccess = () => {
    setStage("success");
  };

  const handleSubmitFail = () => {
    setStage("fail");
  };

  const handleRestart = () => {
    setStage("initial");
  };

  return (
    <main className="flex flex-col items-center min-h-screen py-6 bg-white sm:bg-[#F3F4F6]">
      <div className="w-full sm:w-[640px] flex flex-col bg-white sm:border sm:border-[#EEE] sm:rounded-2xl sm:shadow-custom">
        {stage === "initial" && <InitialMessage onStart={handleStart} />}
        {stage === "quiz" && (
          <div className="p-6">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-xl">Assessment</h1>
              <Button variant="outline" size="icon" onClick={handleRestart}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <QuizForm
              onSubmitSuccess={handleSubmitSuccess}
              onSubmitFail={handleSubmitFail}
            />
          </div>
        )}
        {stage === "success" && <SuccessMessage onRestart={handleRestart} />}
        {stage === "fail" && <FailMessage onRestart={handleRestart} />}
        <div className="pb-6 flex justify-center items-center space-x-1.5">
          <p className="text-xs text-gray-400">Powered by</p>
          <Logo width={78} height={16} />
        </div>
      </div>
    </main>
  );
};

export default QuizPage;
