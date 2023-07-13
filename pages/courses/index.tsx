import React from "react";
import dynamic from "next/dynamic";

const Courses = () => {
  const ListCourse = dynamic(() => import("../../components/CourseList"), {
    loading: () => (
      <p className="text-center text-white text-5xl">Loading...</p>
    ),
  });
  return (
    <div className="container mx-auto text-stone-200 mt-20">
      <h1 className="text-3xl text-center">Courses</h1>
      <ListCourse />
    </div>
  );
};

export default Courses;
