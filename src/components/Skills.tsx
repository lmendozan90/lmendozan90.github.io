import * as React from "react";
import Header from "./Header";
import AstronautIcon from "../assets/icons/astronautIcon";
import clsx from "clsx";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className={clsx(
        "border-t border-[#36f3d1] px-[30px] pt-6 pb-[90px]",
        "xl:px-[calc(8.33%+20px)]",
      )}
    >
      <Header Icon={AstronautIcon} title="Skills" />
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        <div className="flex flex-col">
          <div className="mb-5 text-base leading-[26px] font-bold md:grid md:grid-cols-2 md:gap-x-[60px] text-right">
            TECHNICAL SKILLS
          </div>
          {SkillsDescription.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col mb-[25px] md:grid md:grid-cols-2 md:gap-x-[60px]"
            >
              <span className="md:text-right">{skill.name}</span>
              <span className="font-bold">{skill.experience}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const SkillsDescription = [
  {
    name: "Ruby on Rails",
    experience: "> 5 years",
  },
  {
    name: "React",
    experience: "> 5 years",
  },
  {
    name: "AWS",
    experience: "1.5 years",
  },
  {
    name: "Heroku",
    experience: "4 years",
  },
  {
    name: "TailwindCSS & TailwindUI",
    experience: "4 years",
  },
  {
    name: "HTML & CSS",
    experience: "> 6 years",
  },
  {
    name: "Javascript",
    experience: "> 5 years",
  },
  {
    name: "Ruby",
    experience: "> 5 years",
  },
];

export default Skills;
