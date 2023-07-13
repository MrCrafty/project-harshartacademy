import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseItem = ({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) => {
  return (
    <Link href={`${link}`}>
      <div className="relative transition-all duration-200 overflow-hidden">
        <Image
          src={image}
          height={1000}
          width={1000}
          alt=""
          className="w-full hover:grayscale hover:scale-150 transition-all duration-500 delay-200"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-slate-100 bg-slate-800 p-3 bg-opacity-50 backdrop-blur-lg">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
