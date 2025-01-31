"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FinalPage = () => {
  const [timeLeft, setTimeLeft] = useState(null); // Start with null as initial state
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");

    if (!storedDate) {
      console.error("No target date found in localStorage!");
      return;
    }

    const date = new Date(storedDate);
    setTargetDate(date);
  }, []); // Runs only once when the component mounts

  useEffect(() => {
    if (!targetDate) return; // Don't run if targetDate is not available yet

    const calculateTimeLeft = (targetDate) => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]); // Runs when targetDate changes

  if (!timeLeft) {
    return <div>Loading...</div>; // Show loading until timeLeft is calculated
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl">No i git! 🥳</h1>
      <p className="text-lg mt-2">Kocham Cię Zuzia (ꈍ◡ꈍ)♥(❛ε❛⋆)</p>
      <Image
        src="/images/1.gif"
        alt="Description of the GIF"
        width={300}
        height={200}
        className="my-4 rounded-3xl"
      />
      <p className="text-lg mb-2">
        Tyle czasu masz na przygotowanie się do randki:
      </p>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          dni
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          godziny
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
