import * as React from "react";
import AstronautIcon from "../assets/icons/astronautIcon";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]"
    >
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <AstronautIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold">Skills</span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10">
        <div className="flex flex-col">
          <div className="mb-5 font-bold">TECHNICAL SKILLS</div>
          {SkillsDescription.map((skill, index) => (
            <div key={index} className="flex flex-col mb-[25px]">
              <span>{skill.name}</span>
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
