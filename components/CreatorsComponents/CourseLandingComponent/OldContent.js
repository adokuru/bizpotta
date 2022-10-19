import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CourseLanding from "./CourseLanding";
import InstructorProfile from "./InstructorProfileComponent/InstructorProfile";
import CourseStructure from "./CourseStructureComponent/CourseStructure";
import VideoRequest from "./VideoRequest";

const OldContent = ({ data }) => {
  const [select, setSelect] = useState("landing");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(showUploadModal(true));
  };

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-16 py-10 text-darkGray'>
      <div className='flex flex-row gap-x-6 text-[13px] md:text-[15px] font-bold justify-center'>
        <p
          className={` ${select === "landing" ? "bg-[#94F236] rounded-md bg-opacity-[0.06] text-[#5CAC0D]" : "bg-transparent"}  px-3 py-2`}
          onClick={() => setSelect("landing")}
        >
          Course Landing Page
        </p>
        <p
          className={`${select === "structure" ? "bg-[#94F236] rounded-md bg-opacity-[0.06] text-[#5CAC0D]" : "bg-transparent"}  px-3 py-2`}
          onClick={() => setSelect("structure")}
        >
          Course Structure
        </p>
        <p
          className={`${select === "project" ? "bg-[#94F236] rounded-md bg-opacity-[0.06] text-[#5CAC0D]" : "bg-transparent"}  px-3 py-2`}
          onClick={() => setSelect("project")}
        >
          project
        </p>
      </div>

      {select === "landing" && <CourseLanding data={data} />}

      {select === "structure" && <CourseStructure />}

      {select === "project" && <h1>Project</h1>}
    </div>
  );
};

export default OldContent;
