import React from "react";
import linkedinIcon from "../../assets/landing/linkedinIcon.png";

import pcIcon from "../../assets/landing/code_icon.svg";
import scrollDownAnimatedIcon from "../../assets/landing/scroll-down.gif";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="h-screen  bg-[url('../src/assets/landing/landing_bg.jpg')]  bg-cover bg-right relative">
      <div className="w-0 h-0 border-t-[150px] border-t-white-500 border-r-[150px] border-r-transparent z-[30] absolute top-0  left-0"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-[7px] bg-[#00000091] z-[20]"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-[30]">
        <div className=" ">
          <img src={pcIcon} alt="pc icon" className="w-[100px] mx-auto" />
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
              Amrit Singh
            </h1>
            <TypeAnimation
              sequence={[
                "BACKEND DEVELOPER", // Types 'One'
                1500, // Waits 1.5s
                "PYTHON DEVELOPER", // Deletes 'One' and types 'Two'
                1500, // Waits 1.5s
                "DATABASE MANAGEMENT",
                1500, // Waits 1.5s// Types 'Three' without deleting 'Two'
                () => {
                  // console.log("Done typing!");  Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              repeat={Infinity}
              cursor={false}
              speed={2} // Must be in range between 1 and 99!
              className="text-[#00ac69] mt-5 h-[50px] text-xl sm:text-2xl md:text-3xl"
              // style={{ fontSize: "2em", color: "#00ac69" }}
            />
          </div>
        </div>
      </div>
      <a href="#aboutMeSection">
        <div className="absolute bottom-5 right-0 left-0 z-[30]">
          <img
            src={scrollDownAnimatedIcon}
            alt="scroll down"
            className="w-[80px] mx-auto "
          />
        </div>
      </a>

      <div className="absolute top-0  w-[150px] aspect-square flex justify-center items-center  left-0 z-[30]">
        <a href="#">
          <img
            src={linkedinIcon}
            alt="linkedin"
            className="w-[60px] mx-auto -translate-x-8 -translate-y-8 -rotate-45 "
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
