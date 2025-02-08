"use client"; // Mark as a Client Component
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import questions from "@/public/questions.json";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface UserAnswer {
  question: string;
  answer: string;
  isCorrect: boolean;
}

export default function Exam() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("examStarted")) {
      router.push("/auth");
    }
  }, [router]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        answer: option,
        isCorrect,
      },
    ]);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setTimeLeft(30);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      localStorage.removeItem("examStarted");
      localStorage.setItem(
        "examResults",
        JSON.stringify({ score, userAnswers })
      );
      router.push("/result");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Question {currentQuestion + 1}</h1>
          <div className="bg-gray-200 px-4 py-2 rounded-full">
            <span className="font-bold">{timeLeft}</span> seconds left
          </div>
        </div>
        <p className="mb-6 text-lg">{questions[currentQuestion].question}</p>
        <div className="space-y-4">
          {questions[currentQuestion].options.map(
            (option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedOption === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? "bg-blue-500 text-white"
                      : "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>
        {selectedOption && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
