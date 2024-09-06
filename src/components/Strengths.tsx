import * as React from "react";
import StrengthsIcon from "../assets/icons/strengthsIcon";
import clsx from "clsx";
import Header from "./Header";

const Strengths: React.FC = () => {
  return (
    <div
      id="strengths"
      className={clsx(
        "border-t border-[#36f3d1] px-[30px] pt-6 pb-[90px]",
        "xl:px-[calc(8.33%+20px)]",
      )}
    >
      <Header Icon={StrengthsIcon} width="38" heigth="38" title="Strengths" />
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        {/* Strengths */}
        <div className="flex flex-wrap justify-center mt-0 mx-[-15px] mb-[-30px]">
          {StrengthsDescription.map((strength, index) => (
            <div
              className="border rounded border-[#36f3d1] mt-0 mx-[15px] mb-[30px] py-[5px] px-5"
              key={index}
            >
              <span className="text-[26px] leading-[36px]">
                {strength.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const StrengthsDescription = [
  {
    name: "Strong problem-solving skills",
  },
  {
    name: "Extensive Ruby expertise",
  },
  {
    name: "Full Stack experience",
  },
  {
    name: "Agile development proficiency",
  },
  {
    name: "Effective collaboration abilities",
  },
  {
    name: "Detail-oriented",
  },
  {
    name: "Creative",
  },
  {
    name: "Self-motivated",
  },
];

export default Strengths;
