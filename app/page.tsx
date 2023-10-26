import { getPhoto } from "@/lib/pexels";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {};
  searchParams: { [key: string]: string | undefined };
};

// export const dynamic = "force-dynamic";

// export const revalidate = 3000 //seconds

export default async function Home(props: Props) {
  const photo = await getPhoto();

  console.log("[HOME] Rendering");
  return (
    <main className="flex flex-col gap-4">
      <Image
        alt="default"
        width={0}
        height={0}
        sizes="100vw"
        src={photo?.src.original || ""}
        className="w-full max-h-[500px] rounded-xl"
      />
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center">
        Welcome to
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mx-4">
          Pexels
        </span>
      </h1>
      <p className="lg:w-[60%] w-full text-gray-600 m-auto text-center text-lg">
        A popular online platform that provides high-quality, free stock photos
        and videos for personal and commercial use The platform offers a vast
        library of professionally shot and curated visual content, including
        photographs and video clips, which can be used by individuals,
        businesses, designers, and content creators in a wide range of projects
      </p>

      <div className="w-full flex justify-center ">
        <Link
          href="/photos"
          className="w-[120px] text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none text-center"
        >
          See Photos
        </Link>
      </div>
    </main>
  );
}
