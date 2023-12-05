import React from "react";

const Tests = () => {
  const handleContinueClick = () => {
    window.location.href = "/your-next-page"; // Thay '/your-next-page' bằng đường dẫn thích hợp
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col items-center w-[999px] h-[450px] pt-12 bg-white rounded-[14px] shadow gap-2.5">
        <div className="text-black text-5xl font-normal font-['Dela Gothic One'] leading-[48px]">
          Bạn hợp với tính cách{" "}
        </div>
        <div className="h-64"></div>
        <button
          className="w-[117px] h-11 px-[22px] py-3.5 bg-black rounded-[100px] justify-start items-start gap-2.5 inline-flex  hover:bg-blue-700 duration-200"
          onClick={handleContinueClick}
        >
          <div className="text-white text-base font-bold font-['Montserrat'] leading-none">
            Continue
          </div>
        </button>
      </div>
    </div>
  );
};

export default Tests;
