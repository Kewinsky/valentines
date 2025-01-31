"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ReflectPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        Przemyślałaś już swoje zachowanie? ( ͡ಠ ʖ̯ ͡ಠ )
      </h1>
      <Image
        src="/images/4.gif"
        alt="Description of the GIF"
        width={500}
        height={300}
        className="my-4 rounded-3xl"
      />
      <button className="btn btn-secondary" onClick={() => router.push("/")}>
        Ostatnia szansa
      </button>
    </div>
  );
};

export default ReflectPage;
