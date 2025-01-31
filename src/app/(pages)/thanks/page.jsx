"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ThanksPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/time");
    localStorage.clear();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Dobry wybór! ❤️</h1>
      <p className="text-lg mt-2">
        ..., a teraz zaplanuj naszą randkę! ᕙ( ͡° ͜ʖ ͡°)ᕗ
      </p>
      <Image
        src="/images/6.gif"
        alt="Description of the GIF"
        width={300}
        height={200}
        className="my-4 rounded-3xl"
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Skibidi
      </button>
    </div>
  );
};

export default ThanksPage;
