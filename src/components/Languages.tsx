import * as React from "react";
import AstronautIcon from "../assets/icons/astronautIcon";
import clsx from "clsx";
import Header from "./Header";

const Languages: React.FC = () => {
  return (
    <div
      id="languages"
      className={clsx(
        "border-t border-[#36f3d1] px-[30px] pt-6 pb-[90px]",
        "xl:px-[calc(8.33%+20px)]",
      )}
    >
      <Header Icon={AstronautIcon} width="38" heigth="38" title="Languages" />
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        <div className="flex flex-col">
          {LanguagesDescription.map((language, index) => (
            <div
              key={index}
              className="flex flex-col mb-[25px] md:grid md:grid-cols-2 md:gap-x-[60px]"
            >
              <span className="md:text-right">{language.name}</span>
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
