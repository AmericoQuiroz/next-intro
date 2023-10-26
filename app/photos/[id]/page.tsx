import { getPhoto } from "@/lib/pexels";
import {} from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params: { id } }: Props) {
  return {
    title: id,
  };
}

// ON DEMAND BASED ON THE ROUTE PARAMS
export const dynamicParams = false;

export default async function Photo(props: Props) {
  const { params } = props;
  const photo = await getPhoto(params.id);

  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mx-4">
            {photo?.alt}
          </span>
        </h1>
        <Link href="/photos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#3b82f6"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
      </div>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        alt={photo?.alt || ""}
        src={photo?.src.original || ""}
        className="rounded-xl w-full max-h-[600px]"
      />
      <div className="flex justify-between">
        <h4 className="font-bold text-lg">{photo?.photographer}</h4>
        <a href={photo?.url} className="text-lg text-blue-500" target="_blank">
          {photo?.url}
        </a>
      </div>
    </main>
  );
}
