import { z } from "zod";
import questions from "../data/questions";

const createQuizSchema = () => {
  const schemaShape: Record<string, z.ZodString> = {};
  questions.forEach((question, index) => {
    schemaShape[`question${index + 1}`] = z.string().min(1, {
      message:
        question.type === "text"
          ? "Please enter text"
          : "Please select an option",
    });
  });
  return z.object(schemaShape);
};

export const quizSchema = createQuizSchema();

export type QuizSchema = z.infer<typeof quizSchema>;
