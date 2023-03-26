import React, { useState } from "react";

const Preview = ({ next, previous }) => {
  return (
    <main className="-mt-8 flex flex-col justify-between items-start mx-36">
      <h2 className="-mt-6 max-w-[30ch] text-3xl leading-tight font-semibold md:leading-snug">
        Preview Resume
      </h2>
      <div className="w-full flex justify-around items-center">
        <div className=" w-[300px] h-[400px] border border-[#b2b3b4] shadow-lg rounded-lg mt-16"></div>
        <div>
          <p className="max-w-[43ch] font-bold text-[#66666a] text-sm tracking-[-0.01rem] mt-3 mb-5">
            Before downloading your resume, we recommend previewing it to ensure
            it meets your expectations. If you would like to try a different
            resume template, you can easily make changes before finalizing your
            download. Thank you for using our resume builder!
          </p>
          <button className="bg-[#FC670B] font-bold text-lg border border-[#665d99] rounded-lg p-4 mt-7">
            Change resume template
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between mt-16">
        <button
          onClick={previous}
          className="border w-1/3 font-extrabold border-[#b2b3b48a] rounded-lg text-sm py-5 px-6 mr-4"
        >
          Back
        </button>
        <button
          onClick={next}
          className=" w-1/3 border border-[#b2b3b48a] rounded-lg text-sm font-extrabold text-[#f5f5f5] py-5 px-6 bg-[#332A66]"
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default Preview;
