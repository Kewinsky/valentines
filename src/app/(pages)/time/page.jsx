"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TimePage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!selectedDate) return alert("Please select a date!");
    localStorage.setItem("selectedDate", selectedDate);
    router.push("/shrek");
  };

  useEffect(() => {
    const savedDate = localStorage.getItem("selectedDate");
    if (savedDate) setSelectedDate(savedDate);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">
        Wybierz datę i czas naszej randki 💕
      </h1>
      <p className="text-lg mt-2 mb-6">wiem, kozacka walentynka (▀̿Ĺ̯▀̿ ̿)</p>

      <input
        type="datetime-local"
        className="input input-bordered"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button className="btn btn-primary w-24 mt-6" onClick={handleSubmit}>
        {`8===>`}
      </button>
    </div>
  );
};

export default TimePage;
