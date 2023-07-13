import React from "react";
import { Data } from "../../utils/types";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const Courses = ({ data }: { data: Data[] }) => {
  const ListCourse = dynamic(() => import("../../components/CourseList"), {
    loading: () => (
      <p className="text-center text-white text-5xl">Loading...</p>
    ),
  });
  return (
    <div className="container mx-auto text-stone-200 mt-20">
      <ListCourse />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://strapi-harsh.onrender.com/api/courses");
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
};

export default Courses;
