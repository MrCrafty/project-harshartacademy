import React from "react";
import Image from "next/image";

const CourseItem = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="w-full md:w-4/12 lg:w-3/12 h-1/2 md:h-1/4 lg:h-1/6 overflow-hidden relative">
      <div className="">
        <Image
          src={image}
          height={1000}
          width={1000}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
        {title}
      </div>
    </div>
  );
};

export default CourseItem;
