import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizSchema, QuizSchema } from "@/schemas/quizSchema";
import questions from "@/data/questions";

interface QuizFormProps {
  onSubmitSuccess: () => void;
  onSubmitFail: () => void;
}

const QUESTIONS_PER_PAGE = 3;

const QuizForm: React.FC<QuizFormProps> = ({
  onSubmitSuccess,
  onSubmitFail,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<QuizSchema>({
    resolver: zodResolver(quizSchema),
    defaultValues: questions.reduce((acc, _, index) => {
      acc[`question${index + 1}`] = "";
      return acc;
    }, {} as Record<string, string>),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const handleNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const currentFields = questions
      .slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE
      )
      .map(
        (_, index) =>
          `question${
            currentPage * QUESTIONS_PER_PAGE + index + 1
          }` as keyof QuizSchema
      );

    const isValid = await methods.trigger(currentFields);

    if (isValid) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const onSubmit = async (values: QuizSchema) => {
    setIsSubmitting(true);
    const correctAnswers = questions.reduce((count, question, index) => {
      const userAnswer = values[`question${index + 1}`];
      const correctAnswerIndex = question.correct - 1;
      const correctOption = `option${correctAnswerIndex + 1}`;
      return userAnswer === correctOption ? count + 1 : count;
    }, 0);

    const passPercentage = (correctAnswers / questions.length) * 100;

    if (passPercentage >= 80) {
      onSubmitSuccess();
    } else {
      onSubmitFail();
    }
    setIsSubmitting(false);
  };

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_PAGE
  );
  const isLastPage = startIndex + QUESTIONS_PER_PAGE >= questions.length;

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const progressValue = ((currentPage + 1) / totalPages) * 100;

  return (
    <>
      <Progress className="mb-6" value={progressValue} />

      <Form {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-between flex-grow h-full space-y-8"
        >
          <div className="flex-grow space-y-8">
            {currentQuestions.map((question, index) => (
              <FormField
                key={startIndex + index}
                name={`question${startIndex + index + 1}` as keyof QuizSchema}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-normal">
                      {question.label}
                    </FormLabel>
                    <FormControl>
                      {question.type === "text" ? (
                        <Input placeholder="Enter text" {...field} />
                      ) : (
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {question.options?.map((option, optionIndex) => (
                            <FormItem
                              key={optionIndex}
                              className={`p-2 flex items-center space-x-3 space-y-0 border rounded-lg border-[${
                                field.value === `option${optionIndex + 1}`
                                  ? "#A9BBC7"
                                  : "#E8E8E8"
                              }]`}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={`option${optionIndex + 1}`}
                                  className="min-w-4"
                                />
                              </FormControl>
                              <FormLabel className="font-normal leading-tight">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      )}
                    </FormControl>
                    {question.description && (
                      <FormDescription>{question.description}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="flex pt-4 space-x-4">
            {currentPage > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="rounded-full"
              >
                Previous
              </Button>
            )}
            {isLastPage ? (
              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                className="w-full rounded-full"
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default QuizForm;
