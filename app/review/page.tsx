"use client"; // Mark as a Client Component
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Answer {
  question: string;
  answer: string;
  isCorrect: boolean;
}

interface ExamResults {
  score: number;
  userAnswers: Answer[];
}

export default function Review() {
  const router = useRouter();
  const [results, setResults] = useState<ExamResults | null>(null);

  useEffect(() => {
    const examResults = localStorage.getItem("examResults");
    if (!examResults) {
      router.push("/auth");
    } else {
      setResults(JSON.parse(examResults) as ExamResults);
    }
  }, [router]);

  const handleExit = () => {
    localStorage.removeItem("examResults");
    router.push("/");
  };

  const handleRetakeExam = () => {
    localStorage.removeItem("examResults");
    router.push("/exam");
  };

  if (!results) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Review Your Answers
        </h1>
        <div className="space-y-4">
          {results.userAnswers.map((answer, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-bold">Question: {answer.question}</p>
              <p
                className={answer.isCorrect ? "text-green-500" : "text-red-500"}
              >
                Your Answer: {answer.answer} (
                {answer.isCorrect ? "Correct" : "Incorrect"})
              </p>
            </div>
          ))}
        </div>
        {/* Buttons for Exit and Retake Exam */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleExit}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Close
          </button>
          <button
            onClick={handleRetakeExam}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Retake Exam
          </button>
        </div>
      </div>
    </div>
  );
}
