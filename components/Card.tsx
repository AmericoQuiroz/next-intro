import { CustomPhoto } from "@/lib/pexels";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  photo: CustomPhoto;
}

export const Card: FC<CardProps> = ({ photo }) => {
  return (
    <div className="max-h-[320px] bg-gray-800 border border-gray-200 rounded-lg shadow">
      <Link href={`/photos/${photo.id}`}>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt={photo.alt}
          src={photo.src.original}
          className="p-2 rounded-t-lg w-[100%] max-h-[250px] min-h-[250px]"
        />
      </Link>
      <div className="px-5 pb-5">
        {/* <a href="#"> */}
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          By {photo.photographer}
        </h5>
        {/* </a> */}
      </div>
    </div>
  );
};
