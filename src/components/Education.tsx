import * as React from "react";
import PlanetIcon from "../assets/icons/planetIcon";
import BriefcaseIcon from "../assets/icons/briefcaseIcon";
import clsx from "clsx";
import Header from "./Header";
import TrainIcon from "../assets/icons/trainIcon";

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className={clsx(
        "border-t border-[#36f3d1] px-[30px] pt-6 pb-[90px]",
        "xl:px-[calc(8.33%+20px)]",
      )}
    >
      <Header Icon={PlanetIcon} width="38" heigth="38" title="Education" />
      <section
        className={clsx(
          "border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]",
          "xl:px-[10%]",
        )}
      >
        {EducationsDescription.map((education, index) => (
          <article
            key={index}
            className={clsx(
              "mb-2.5 flex break-words z-10",
              "xl:w-[calc(50%-32px)]",
              index % 2 == 0 ? "xl:flex-row-reverse" : "xl:ml-auto",
            )}
          >
            <div
              className={clsx(
                "pr-4 flex flex-col min-w-10 items-center md:ml-[-40px]",
                "xl:my-0 xl:py-0 ",
                index % 2 == 0
                  ? "xl:mr-[-42px] xl:ml-0 xl:pr-0 xl:pl-[22px]"
                  : "xl:ml-[-42px] xl:mr-0 xl:pl-0 xl:pr-[22px]",
              )}
            >
              <BriefcaseIcon width="38" height="38" fill="currentColor" />
              <div className="h-full w-[1px] text-[#36f3d1] bg-current"></div>
            </div>
            <div
              className={clsx(
                "pb-[15px]",
                index % 2 == 0 ? "xl:text-right" : "xl:text-left",
              )}
            >
              <div className="mb-4 flex flex-col">
                <span>{education.date}</span>
                <span>{education.location}</span>
              </div>
              <div className="mb-4 flex flex-col">
                <div>
                  <span className="font-bold text-[26px] leading-[36px]">
                    {education.position}
                  </span>
                  <span className="text-[26px] leading-[36px]"> | </span>
                  <span className=" text-[26px] leading-[36px]">
                    {education.degree}
                  </span>
                </div>
                <div>
                  <span className="text-[22px] leading-[32px]">
                    {education.company}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

const EducationsDescription = [
  {
    date: "01/2009 – 12/2013",
    location: "Lima, Peru",
    position: "Ingeniería de sistemas",
    degree: "Bachiller en Ingeniería de Sistemas e Informática",
    company: "Universidad Nacional Mayor de San Marcos",
  },
];

export default Education;
