import React from "react";
import myPotrait from "../../assets/about/avatar.png";
import python from "../../assets/about/python.png";
import sql from "../../assets/about/sql.png";
import django from "../../assets/about/django-color.svg";

const AboutMeSection = () => {
  return (
    <div id="aboutMeSection" className="bg-white ">
      <h1 className="text-center text-3xl py-10 pt-20 ">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-10 w-[90%] mx-auto  md:w-[80%] md:py-20  ">
        <div className="flex-[0.3] ">
          <div className="shadow-2xl max-w-[200px] md:max-w-[350px] p-5 mr-auto ">
            <div className="bg-[#757575] pt-5">
              <img
                src={myPotrait}
                alt="Amrit Singh"
                className="w-full  scale-x-[-1]"
              />
            </div>

            <div className="flex justify-around items-center  py-5">
              <img
                src={python}
                alt="python"
                className="w-[35px] lg:w-[45px] xl:w-[60px]"
              />
              <img
                src={sql}
                alt="sql"
                className="w-[35px] lg:w-[45px] xl:w-[60px]"
              />
              <img
                src={django}
                alt="django"
                className="w-[35px] lg:w-[45px] xl:w-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="flex-[0.7] 0">
          <div className="border rounded-md  lg:w-[80%] ml-auto">
            <div className="border-b flex justify-start items-center gap-5 bg-[#dfdfdf] px-5 py-5">
              <div className="w-[12px] h-[12px] rounded-full bg-red-500"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-yellow-500"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
            </div>
            <div className="px-5 py-5 ">
              <div className="text-2xl">
                Hi <span>👋</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                dolores, repellat dolor libero placeat voluptate minus aliquam,
                harum omnis eligendi quam ullam ad mollitia explicabo molestias
                illo iure quos tempore voluptas? Consectetur omnis earum optio
                dolor vitae voluptatem nam voluptatum, est accusantium quaerat
                aut aspernatur sunt itaque in labore ea libero neque blanditiis
                eius suscipit exercitationem voluptates ullam sint. Aperiam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
