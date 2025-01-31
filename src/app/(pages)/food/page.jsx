"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import f1 from "../../../../public/images/foods/f1.jpg";
import f2 from "../../../../public/images/foods/f2.jpg";
import f3 from "../../../../public/images/foods/f3.jpg";
import f4 from "../../../../public/images/foods/f4.jpg";
import f5 from "../../../../public/images/foods/f5.jpg";
import f6 from "../../../../public/images/foods/f6.jpg";
import f7 from "../../../../public/images/foods/f7.webp";
import f8 from "../../../../public/images/foods/f8.jpg";
import f9 from "../../../../public/images/foods/f9.jpg";
import f10 from "../../../../public/images/foods/f10.jpg";
import Slider from "@/app/components/Slider";

const photos = [
  {
    label: "Pizzunia",
    src: f1,
  },
  {
    label: "Makaroooni",
    src: f2,
  },
  {
    label: "Siakimaki",
    src: f3,
  },
  {
    label: "Kebaba",
    src: f4,
  },
  {
    label: "Ramen",
    src: f5,
  },
  {
    label: "Hot Dog",
    src: f6,
  },
  {
    label: "Schabowy",
    src: f7,
  },
  {
    label: "Sałatka",
    src: f8,
  },
  {
    label: "Żeberka",
    src: f9,
  },
  {
    label: "Tika Masala",
    src: f10,
  },
];

const FoodPage = () => {
  const STEP = "selectedFood";
  const [food, setFood] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!food) return alert("Musisz wybrać szamke!");
    localStorage.setItem(STEP, food);
    router.push("/dessert");
  };

  const handleBack = () => {
    router.push("/time");
  };

  useEffect(() => {
    const savedFood = localStorage.getItem("selectedFood");
    if (savedFood) setFood(savedFood);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">Wybierz szamke... 🍝</h1>
      <p className="text-lg mt-2 mb-6">, ale chyba znam odpowiedź ( ͡°ω ͡°)</p>

      <div
        className="tooltip tooltip-open tooltip-bottom"
        data-tip={
          food === "Siakimaki"
            ? "ez, wiedziałem że to wybierzesz"
            : "to se można przesuwać palcem 😁"
        }
      >
        <Slider photos={photos} getter={food} setter={setFood} />
      </div>

      <div className="flex gap-4 mt-10">
        <button
          className="btn btn-primary btn-outline w-24"
          onClick={handleBack}
        >
          {`<===8`}
        </button>
        <button className="btn btn-primary w-24" onClick={handleSubmit}>
          {`8===>`}
        </button>
      </div>
    </div>
  );
};

export default FoodPage;
