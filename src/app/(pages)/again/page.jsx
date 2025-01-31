"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AgainPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">e?! 🤨</h1>
      <p className="text-lg mt-2">lepiej się dobrze zastanów... ༼ಠ ل ಠ༽</p>
      <Image
        src="/images/5.gif"
        alt="Description of the GIF"
        width={300}
        height={200}
        className="my-4 rounded-3xl"
      />
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/reflect")}
      >
        Sprobuj jeszcze raz
      </button>
    </div>
  );
};

export default AgainPage;
