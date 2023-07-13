import React from "react";
import { Data } from "../../utils/types";
import CourseList from "@/components/CourseList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const Courses = ({ data }: { data: Data[] }) => {
  return (
    <div className="container mx-auto text-stone-200 mt-20">
      <Suspense fallback={<Loading />}>
        <CourseList />
      </Suspense>
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
