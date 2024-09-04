import * as React from "react";
import PlanetIcon from "../assets/icons/planetIcon";
import BriefcaseIcon from "../assets/icons/briefcaseIcon";

const Education: React.FC = () => {
  return (
    <div className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]">
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <PlanetIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold">Education</span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10">
        {EducationsDescription.map((education, index) => (
          <article key={index} className="mb-2.5 flex break-words">
            <div className="pr-4 flex flex-col min-w-10 items-center">
              <BriefcaseIcon width="38" height="38" fill="currentColor" />
              <div className="h-full w-[1px] text-[#36f3d1] bg-current"></div>
            </div>
            <div className="pb-[15px]">
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
