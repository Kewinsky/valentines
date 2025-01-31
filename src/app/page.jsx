"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Siema, zostaniesz moją Walentynką? ( ͡~ ͜ʖ ͡°)
      </h1>
      <Image
        src="/images/3.gif"
        alt="Description of the GIF"
        width={300}
        height={200}
        className="my-4 rounded-3xl"
      />
      <div className="flex gap-4">
        <button
          className="btn btn-outline btn-primary w-24"
          onClick={() => router.push("/again")}
        >
          Nie, dziękuję
        </button>
        <button
          className="btn btn-primary w-24"
          onClick={() => router.push("/thanks")}
        >
          O tak!
        </button>
      </div>
    </div>
  );
};

export default Home;
