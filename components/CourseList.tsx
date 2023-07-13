import React, { useEffect, useState } from "react";
import { Data } from "../utils/types";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const [Data, setData] = useState<Data[]>([]);
  const fetchData = async () => {
    const res = await fetch("https://strapi-harsh.onrender.com/api/courses");
    const data = await res.json();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <h1 className="text-3xl text-center">Courses</h1>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {Data?.map((course) => (
          <CourseItem
            image={"https://www.dummyimage.com/250x150?text=%20"}
            title={course?.attributes?.Title}
            link={`/courses/${course?.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
