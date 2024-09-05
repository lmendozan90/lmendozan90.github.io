import * as React from "react";
import AstronautIcon from "../assets/icons/astronautIcon";

const Languages: React.FC = () => {
  return (
    <div
      id="languages"
      className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]"
    >
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <AstronautIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold">Languages</span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10">
        <div className="flex flex-col">
          {LanguagesDescription.map((language, index) => (
            <div key={index} className="flex flex-col mb-[25px]">
              <span>{language.name}</span>
              <span className="font-bold">{language.experience}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const LanguagesDescription = [
  {
    name: "Spanish",
    experience: "Native",
  },
  {
    name: "English",
    experience: "Professional",
  },
];

export default Languages;
