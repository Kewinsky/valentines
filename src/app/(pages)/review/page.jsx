"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ReviewPage = () => {
  const router = useRouter();
  const [rating, setRating] = useState(5);

  const handleSubmit = async () => {
    router.push("/final");
    await handleSendData();
  };

  const handleSendData = async () => {
    const selectedDate = localStorage.getItem("selectedDate");
    const selectedFood = localStorage.getItem("selectedFood");
    const selectedDessert = localStorage.getItem("selectedDessert");
    const selectedEntertainment = localStorage.getItem("selectedEntertainment");

    const data = {
      date: selectedDate,
      food: selectedFood,
      dessert: selectedDessert,
      entertainment: selectedEntertainment,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Dane zostały wysłane!");
      } else {
        alert("Wystąpił błąd podczas wysyłania danych.");
      }
    } catch (error) {
      console.error("Błąd:", error);
      alert("Wystąpił błąd podczas łączenia z serwerem.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Oceń tą walentynke w skali od 1- 10? ( ͡^ ͜ʖ ͡^ )
      </h1>
      <p className="text-lg mt-2">
        Ocena: {rating} {rating >= 10 ? "🦭" : "💢"}
      </p>
      <div className="w-80 my-6">
        <input
          type="range"
          min={1}
          max="11"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="range"
          step="1"
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
        </div>
      </div>

      <button
        className="btn btn-secondary"
        onClick={handleSubmit}
        disabled={rating < 10}
      >
        Wyslij formularz
      </button>
    </div>
  );
};

export default ReviewPage;
