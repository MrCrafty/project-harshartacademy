import React from "react";
import CourseItem from "./CourseItem";

type Data = {
  id: number;
  attributes: Attributes;
};
type Attributes = {
  Title: string;
  Description: string;
  Fees: number;
  AgeGroup: string;
  DayOfClasses: string;
};

const index = ({ data }: { data: Data }) => {
  return (
    <div className="container mx-auto text-stone-200 mt-20">
      <div className="grid lg:grid-cols-3 gap-5 ">
        <CourseItem
          image={"https://www.dummyimage.com/250x150?text=%20"}
          title={data?.attributes?.Title}
          link={`/courses/${data?.id}`}
        />
        <CourseItem
          image={"https://www.dummyimage.com/250x150?text=%20"}
          title={data?.attributes?.Title}
          link={`/courses/${data?.id}`}
        />
        <CourseItem
          image={"https://www.dummyimage.com/250x150?text=%20"}
          title={data?.attributes?.Title}
          link={`/courses/${data?.id}`}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(process.env.API_URL + "/api/courses");
  const data = await res.json();
  return {
    props: {
      data: data.data[0],
    },
  };
};

export default index;
