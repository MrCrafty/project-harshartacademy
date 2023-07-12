import React from "react";

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

const index = ({ data }: { data: Data[] }) => {
  console.log(data[0]);
  return (
    <div className="container mx-auto bg-white text-stone-800 ">
      <h1 className="text-center text-3xl ">{data[0]?.attributes?.Title}</h1>
      <p className="text-left text-lg">{data[0]?.attributes?.Description}</p>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URL + "/api/courses");
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
};

export default index;
