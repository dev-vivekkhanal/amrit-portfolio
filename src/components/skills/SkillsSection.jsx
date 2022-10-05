import React from "react";
import pythonLogoColor from "../../assets/skills/icon_color/python-color.svg";
import pythonLogoNoColor from "../../assets/skills/icon_plane/python.svg";
import djangoLogoColor from "../../assets/skills/icon_color/django-color.svg";
import djangoLogoNoColor from "../../assets/skills/icon_plane/django.svg";
import gitLogoColor from "../../assets/skills/icon_color/git-color.svg";
import gitLogoNoColor from "../../assets/skills/icon_plane/git.svg";
import sqliteLogoColor from "../../assets/skills/icon_color/sqlite-color.svg";
import sqliteLogoNoColor from "../../assets/skills/icon_plane/sqlite.svg";
import firebaseLogoColor from "../../assets/skills/icon_color/firebase-color.svg";
import firebaseLogoNoColor from "../../assets/skills/icon_plane/firebase.svg";
import mysqlLogoColor from "../../assets/skills/icon_color/mysql-color.svg";
import mysqlLogoNoColor from "../../assets/skills/icon_plane/mysql.svg";
import webscrappingLogoColor from "../../assets/skills/icon_color/web-scrapping-color.svg";
import webscrappingLogoNoColor from "../../assets/skills/icon_plane/web-scrapping.svg";

import pandasLogoColor from "../../assets/skills/icon_color/pandas-color.svg";
import pandasLogoNoColor from "../../assets/skills/icon_plane/pandas.svg";

import gcpLogoColor from "../../assets/skills/icon_color/gcp-color.svg";
import gcpLogoNoColor from "../../assets/skills/icon_plane/gcp.svg";
import awsLogoColor from "../../assets/skills/icon_color/aws-color.svg";
import awsLogoNoColor from "../../assets/skills/icon_plane/aws.svg";
import restapiLogoColor from "../../assets/skills/icon_color/rest-api-color.svg";
import restapiLogoNoColor from "../../assets/skills/icon_plane/rest-api.svg";

const SkillsSection = () => {
  const skillItems = [
    {
      name: "Python",
      logoColor: pythonLogoColor,
      logoNoColor: pythonLogoNoColor,
    },

    {
      name: "Django",
      logoColor: djangoLogoColor,
      logoNoColor: djangoLogoNoColor,
    },
    {
      name: "Git",
      logoColor: gitLogoColor,
      logoNoColor: gitLogoNoColor,
    },
    {
      name: "SQLite",
      logoColor: sqliteLogoColor,
      logoNoColor: sqliteLogoNoColor,
    },
    {
      name: "Firebase",
      logoColor: firebaseLogoColor,
      logoNoColor: firebaseLogoNoColor,
    },
    {
      name: "MySQL",
      logoColor: mysqlLogoColor,
      logoNoColor: mysqlLogoNoColor,
    },
    {
      name: "Web Scrapping",
      logoColor: webscrappingLogoColor,
      logoNoColor: webscrappingLogoNoColor,
    },
    {
      name: "Pandas",
      logoColor: pandasLogoColor,
      logoNoColor: pandasLogoNoColor,
    },

    {
      name: "GCP",
      logoColor: gcpLogoColor,
      logoNoColor: gcpLogoNoColor,
    },

    {
      name: "AWS",
      logoColor: awsLogoColor,
      logoNoColor: awsLogoNoColor,
    },
    {
      name: "RestAPI",
      logoColor: restapiLogoColor,
      logoNoColor: restapiLogoNoColor,
    },
  ];
  return (
    <div id="skillsSection" className=" bg-[#1f1f1f]">
      <h1 className="text-center text-3xl py-10 pt-20 text-white">SKILLS</h1>
      <div className="flex justify-center items-center flex-wrap gap-5 w-[90%] md:w-[80%] mx-auto  py-20">
        {skillItems?.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-[#2a2929] w-[120px] md:w-[150px] aspect-square flex flex-col gap-2 items-center justify-center rounded-md group hover:bg-white transition-all"
            >
              <img
                src={data?.logoNoColor}
                alt={data?.name}
                className="w-[50%]  mx-auto group-hover:hidden scale-95 "
              />
              <img
                src={data?.logoColor}
                alt={data?.name}
                className="w-[50%]  mx-auto hidden group-hover:block "
              />
              <h1 className="text-center text-white group-hover:text-black font-semibold transition-all">
                {data?.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
// hello
