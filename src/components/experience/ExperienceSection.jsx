import React from "react";

const ExperienceSection = () => {
  const experience_data = [
    {
      start_date: "Nov 2020",
      end_date: "May 2021",
      company_name: "Tata Consultancy Service",
      work_details:
        "Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.",
    },
    {
      start_date: "June 2021",
      end_date: "Present",
      company_name: "EKO Infomatics",
      work_details:
        "Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.",
    },
  ];
  return (
    <div id="experienceSection" className="bg-white pb-20">
      <h1 className="text-center text-3xl py-10 pt-20 ">EXPERIENCE</h1>
      <div className=" py-10 w-[90%] mx-auto  md:w-[80%]  relative ">
        {/* center stick */}
        <div className="w-[2px] rounded-full top-0 bottom-0 absolute bg-gray-200 shadow-2xl right-[calc(0%+30px)] md:right-[50%]"></div>

        <div className="space-y-10">
          {experience_data?.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-start gap-10 md:gap-20 relative max-w-[800px] mx-auto "
              >
                {/* circle */}
                <div className="absolute bg-black top-0 botoom-0 right-[calc(0%)] md:right-[calc(50%-30px)] w-[60px] aspect-square rounded-full"></div>

                <div
                  className={` border-gray-400 bg-[#fafbff]  border  w-full hidden rounded-lg p-3 ${
                    index % 2
                      ? "md:block md:w-full"
                      : "md:block md:w-full md:invisible"
                  }`}
                >
                  <div className="">
                    <h1 className="bg-black  text-white w-fit p-1 px-3 text-lg lg:text-xl rounded-full text-center  ">
                      {data?.company_name}
                    </h1>
                    <div className="px-3 flex justify-start mt-2 gap-2 items-center text-gray-500 text-sm lg:text-base">
                      <p>{data?.start_date}</p>
                      <p>-</p>
                      <p>{data?.end_date}</p>
                    </div>

                    <div className="px-3 flex justify-start mt-2 gap-2 items-center text-gray-500 text-xs lg:text-sm">
                      {data?.work_details}
                    </div>
                  </div>
                </div>

                <div
                  className={`border-gray-400 bg-[#fafbff]  border  w-[calc(100%-100px)] md:w-full rounded-lg p-3 ${
                    !index % 2 ? "md:visible" : "md:invisible"
                  }`}
                >
                  <div className="">
                    <h1 className="bg-black  text-white w-fit p-1 px-3 text-lg lg:text-xl  rounded-full text-center ">
                      {data?.company_name}
                    </h1>
                    <div className="px-3 flex justify-start mt-2 gap-2 items-center text-gray-500 text-sm lg:text-base">
                      <p>{data?.start_date}</p>
                      <p>-</p>
                      <p>{data?.end_date}</p>
                    </div>

                    <div className="px-3 flex justify-start mt-2 gap-2 items-center text-gray-500 text-xs lg:text-sm">
                      {data?.work_details}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
