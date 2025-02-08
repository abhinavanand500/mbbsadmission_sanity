"use client"; // Mark as a Client Component
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

interface ExamResults {
  score: number;
  userAnswers: { question: string; answer: string; isCorrect: boolean }[];
}

export default function Result() {
  const router = useRouter();
  const [results, setResults] = useState<ExamResults | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const examResults = localStorage.getItem("examResults");
    if (!examResults) {
      router.push("/");
    } else {
      setResults(JSON.parse(examResults) as ExamResults);
    }

    // Set window size for Confetti
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, [router]);

  if (!results) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">
          Your Score: {results.score} / 30
        </h1>
        <button
          onClick={() => router.push("/review")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Review Answers
        </button>
      </div>
    </div>
  );
}
