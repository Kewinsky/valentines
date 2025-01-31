"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import d1 from "../../../../public/images/desserts/d1.jpg";
import d2 from "../../../../public/images/desserts/d2.jpg";
import d3 from "../../../../public/images/desserts/d3.webp";
import d4 from "../../../../public/images/desserts/d4.jpg";
import d5 from "../../../../public/images/desserts/d5.jpg";
import d6 from "../../../../public/images/desserts/d6.jpg";
import d7 from "../../../../public/images/desserts/d7.jpg";
import d8 from "../../../../public/images/desserts/d8.jpg";
import Slider from "@/app/components/Slider";

const photos = [
  {
    label: "Churros",
    src: d1,
  },
  {
    label: "Lody",
    src: d2,
  },
  {
    label: "Pączek",
    src: d3,
  },
  {
    label: "Kołacz",
    src: d4,
  },
  {
    label: "Więcej Sushi!",
    src: d5,
  },
  {
    label: "Szarlotka",
    src: d6,
  },
  {
    label: "Cynamonka",
    src: d7,
  },
  {
    label: "Pomarańcze",
    src: d8,
  },
];

const DessertPage = () => {
  const [dessert, setDessert] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!dessert) return alert("cmon, wybierz deser plis...");
    localStorage.setItem("selectedDessert", dessert);
    router.push("/entertainment");
  };

  const handleBack = () => {
    router.push("/food");
  };

  useEffect(() => {
    const savedDessert = localStorage.getItem("selectedDessert");
    if (savedDessert) setDessert(savedDessert);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Znajdzie się jeszcze miejsce na deserek? 🍰
      </h1>
      <p className="text-lg mt-2 mb-6">Mam tez cos specialnego (≖ ͜ʖ≖)</p>

      <Slider photos={photos} getter={dessert} setter={setDessert} />

      <div className="flex gap-4 mt-6">
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

export default DessertPage;
