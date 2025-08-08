"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds === 0) return;
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4">Countdown</h1>
        <div className="text-6xl font-mono mb-8">
          {seconds > 0 ? seconds : "Time's up!"}
        </div>
      </main>
    </div>
  );
}
