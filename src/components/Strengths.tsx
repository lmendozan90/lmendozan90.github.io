import * as React from "react";
import StrengthsIcon from "../assets/icons/strengthsIcon";

const Strengths: React.FC = () => {
  return (
    <div
      id="strengths"
      className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]"
    >
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <StrengthsIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold">Strengths</span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10">
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
