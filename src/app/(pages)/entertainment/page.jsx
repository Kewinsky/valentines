"use client";

import e1 from "../../../../public/images/fun/e1.jpg";
import e2 from "../../../../public/images/fun/e2.jpg";
import e3 from "../../../../public/images/fun/e3.jpg";
import e4 from "../../../../public/images/fun/e4.jpg";
import e5 from "../../../../public/images/fun/e5.jpg";
import e6 from "../../../../public/images/fun/e6.jpg";
import e7 from "../../../../public/images/fun/e7.jpg";
import e8 from "../../../../public/images/fun/e8.jpg";
import e9 from "../../../../public/images/fun/e9.jpg";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/app/components/Slider";

const photos = [
  {
    label: "Spacerek",
    src: e1,
  },
  {
    label: "Salon Gier",
    src: e2,
  },
  {
    label: "Muzeum",
    src: e3,
  },
  {
    label: "Gokarty",
    src: e4,
  },
  {
    label: "Escape Room",
    src: e5,
  },
  {
    label: "Wspólny Night Ride",
    src: e6,
  },
  {
    label: "hehe...",
    src: e7,
  },
  {
    label: "Pixel XL",
    src: e8,
  },
  {
    label: "Majnkroft?",
    src: e9,
  },
];

const EntertainmentPage = () => {
  const [entertainment, setEntertainment] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!entertainment) return alert("kochanie, wybierz coś...");
    localStorage.setItem("selectedEntertainment", entertainment);
    router.push("/summary");
  };

  const handleBack = () => {
    router.push("/dessert");
  };

  useEffect(() => {
    const savedEntertainment = localStorage.getItem("selectedEntertainment");
    if (savedEntertainment) setEntertainment(savedEntertainment);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Co robimy później? 🎬</h1>
      <p className="text-lg mt-2 mb-6">(‿!‿) ԅ(≖‿≖ԅ)</p>

      <Slider
        photos={photos}
        getter={entertainment}
        setter={setEntertainment}
      />

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

export default EntertainmentPage;
