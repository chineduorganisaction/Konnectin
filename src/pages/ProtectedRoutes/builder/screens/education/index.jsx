import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import College from "./college";
import HighSchool from "./high-school";

const EducationOption = ({ title, toggleEducation }) => (
  <button
    onClick={toggleEducation}
    className=" w-[247px] h-[200px] mx-8 border-2 border-gray-400 rounded-lg bg-[#353535] text-[#d1d1d2] flex flex-col justify-center items-center"
  >
    <div className=" ">
      <h3 className=" font-bold text-2xl mb-2 text-[#f5f5f5]">{title}</h3>
    </div>
  </button>
);

const SelectEducation = ({ next, previous, data }) => {
  const [education, setEducation] = useState(false);
  let view;
  const [view_control, setViewControl] = useState(null);

  const toggleEducation = (type) => {
    setViewControl(type);
    setEducation(!education);
  };

  if (view_control === "college") {
    view = <College next={next} previous={previous} data={data} />;
  }
  if (view_control === "high-school") {
    view = <HighSchool next={next} previous={previous} data={data} />;
  }
  return (
    <main className="-mt-8 max-w-5xl mx-auto flex flex-col justify-between">
      {education ? (
        view
      ) : (
        <>
          <div className="flex">
            <h2 className="-mt-6 text-3xl leading-tight font-semibold md:leading-snug">
              Add school
            </h2>
          </div>
          <div className="flex mx-auto mt-20">
            <EducationOption
              title="College/University"
              toggleEducation={() => toggleEducation("college")}
            />
            <EducationOption
              title="High School"
              toggleEducation={() => toggleEducation("high-school")}
            />
            <EducationOption title="Others" />
          </div>{" "}
        </>
      )}
    </main>
  );
};

const Education = ({ data, next, previous }) => {
  const [select_education, setSelectEducation] = useState(true);

  const toggleEducation = () => {
    setSelectEducation(!select_education);
  };
  return (
    <>
      {select_education ? (
        <main className="-mt-8 flex flex-col justify-between items-start mx-16">
          <div className="flex flex-col">
            <h2 className="-mt-6 text-3xl leading-tight font-semibold md:leading-snug">
              Education
            </h2>
            <p className=" text-[#66666a] text-sm tracking-wider mt-3 mb-5 max-w-2xl">
              If you've graduated from, or are currently enrolled in a college
              or university, you should NOT include your high school.
            </p>
          </div>
          <div className=" bg-[#f7f7f7] flex items-center justify-center border border-dashed border-[#b2b3b48a] rounded-lg w-full h-[270px] mb-14 mt-6">
            <button
              onClick={toggleEducation}
              className="flex items-center border-none outline-none"
            >
              <div className=" bg-[#665d99] p-2 border rounded-full">
                <FaPlus color="#f5f5f5" size="0.8rem" />{" "}
              </div>
              <span className=" ml-3 font-extrabold text-lg text-[#8c8c8f]">
                Add Education
              </span>
            </button>
          </div>
          <div className="w-8/12 mx-auto flex items-center justify-center">
            <button
              onClick={previous}
              className="border w-10/12 border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-8"
            >
              Back
            </button>
            <button
              onClick={next}
              className="w-10/12 border border-[#b2b3b48a] rounded-lg text-sm text-[#f5f5f5] py-5 px-6 ml-8 bg-[#332A66]"
            >
              Continue
            </button>
          </div>
        </main>
      ) : (
        <SelectEducation next={next} previous={previous} data={data} />
      )}
    </>
  );
};

export default Education;
