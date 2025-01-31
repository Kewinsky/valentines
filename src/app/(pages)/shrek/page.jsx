"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ShrekPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Gdzie mnie dotykasz? ༼ಠ ل ಠ༽</h1>
      <Image
        src="/images/7.gif"
        alt="Description of the GIF"
        width={500}
        height={300}
        className="my-4 rounded-3xl"
      />
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/food")}
      >
        Przepraszam, to nie chcący 👉👈
      </button>
    </div>
  );
};

export default ShrekPage;
