import React, { useEffect, useState } from "react";
import { Data } from "../utils/types";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const [Data, setData] = useState<Data[]>([]);
  const fetchData = async () => {
    const res = await fetch(process.env.STRAPI_API_URL as string);
    const data = await res.json();
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {Data?.map((course, index) => (
          <CourseItem
            image={"https://www.dummyimage.com/250x150?text=%20"}
            title={course?.attributes?.Title}
            link={`/courses/${course?.id}`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
