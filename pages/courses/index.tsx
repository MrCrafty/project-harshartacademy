import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Courses = () => {
  const ListCourse = dynamic(() => import("../../components/CourseList"), {
    // loading: <Loading />,
    ssr: false,
  });
  return (
    <div className="container mx-auto text-stone-200 mt-20">
      <h1 className="text-3xl text-center">Courses</h1>
      {/* <Suspense fallback={<Loading />}> */}
      <ListCourse />
      {/* </Suspense> */}
    </div>
  );
};

const Loading = () => {
  return <p className="text-center text-white text-5xl">Loading...</p>;
};

export default Courses;
