import { Course } from "@/utils/types";
import { useRouter } from "next/router";
import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";

const AddCourseForm = () => {
  const router = useRouter();
  const [CourseData, setCourseData] = useState<Course>({
    Title: "",
    Description: "",
    Fees: 0,
    DaysOfClasses: "",
    AgeGroup: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseData({ ...CourseData, [name]: value });
  };

  const handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = fetch(process.env.STRAPI_API_URL as string, {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ data: CourseData }),
    })
      .then(() => {
        router.push("/courses").then(() => {
          window.alert("Courses added Successfully");
        });
      })
      .catch((err) => {
        window.alert(err);
      });
  };
  return (
    <form
      name="add-course-form"
      className="text-black"
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      <input
        type="text"
        name="Title"
        id="Title"
        placeholder="Enter Title"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="Description"
        id="Description"
        placeholder="Enter Description"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="number"
        name="Fees"
        id="Fees"
        placeholder="Enter Fees"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        name="AgeGroup"
        id="age-group"
        placeholder="Enter Age Group"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <select
        name="DaysOfClasses"
        id="days-of-classes"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="" hidden selected>
          Choose the Days
        </option>
        <option value="(three months/four days a week)">
          3 Months / 4 Days a week
        </option>
        <option value="(three months/two days a week)">
          3 Months / 2 Days a week
        </option>
      </select>
      <input
        type="submit"
        value="Submit"
        className="bg-slate-50 px-5 cursor-pointer"
      />
    </form>
  );
};

export default AddCourseForm;
