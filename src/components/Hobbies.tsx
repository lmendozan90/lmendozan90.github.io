import * as React from "react";
import TelescopeIcon from "../assets/icons/telescopeIcon";
import SwimmingIcon from "../assets/icons/swimmingIcon";
import NotesIcon from "../assets/icons/notesIcon";
import TunesIcon from "../assets/icons/tunesIcon";
import ControllerIcon from "../assets/icons/controllerIcon";

const Hobbies: React.FC = () => {
  return (
    <div
      id="hobbies"
      className="border-t border-[#36f3d1] px-[30px] pt-8 pb-[90px]"
    >
      <div className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <TelescopeIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold md:px-[12.5%] md:text-[46px] md:leading-[56px]">
          Hobbies
        </span>
      </div>
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        <div className="mb-[-50px] flex flex-wrap !justify-start">
          {HobbiesDescription.map((hobby, index) => (
            <div className="mb-[50px] basis-1/2 items-center flex flex-col md:basis-1/3">
              <span className="h-10 w-10 mb-[15px] min-h-10">
                <hobby.icon width="40" height="40" fill="currentColor" />
              </span>
              <span className="mx-2 text-center">{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const HobbiesDescription = [
  {
    name: "Swimming",
    icon: SwimmingIcon,
  },
  {
    name: "Drawing & Painting",
    icon: NotesIcon,
  },
  {
    name: "Feeling the usic",
    icon: TunesIcon,
  },
  {
    name: "Playing Video Games",
    icon: ControllerIcon,
  },
];

export default Hobbies;
