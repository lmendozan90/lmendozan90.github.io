import * as React from "react";
import clsx from "clsx";
import Header from "./Header";
import RocketIcon from "../assets/icons/rocketIcon";
import AvatarOutlineIcon from "../assets/icons/avatarOutlineIcon";

const General: React.FC = () => {
  return (
    <div
      id="personalInformation"
      className={clsx("px-[30px] pt-8 pb-[90px]", "xl:px-[calc(8.33%+20px)]")}
    >
      <Header
        Icon={RocketIcon}
        width="38"
        heigth="38"
        title="Fernando Mendoza Nieves"
      />
      {/* General Info*/}
      <section className="border-t border-[#36f3d1] mt-10 pt-10 md:mt-[60px] md:pt-[60px] md:px-[12.5%]">
        <div className="mb-[30px] md:mb-[60px] xl:grid xl:grid-cols-5">
          <div className="hidden xl:flex xl:items-center xl:w-[163px] xl:h-[163px] xl:justify-center xl:relative">
            <span className="w-[136px] h-[136px]">
              <img
                className="rounded-full w-[136px] h-[136px]"
                src="/images/fernando_photo.jpeg"
                alt="Fernando Mendoza Nieves"
              />
            </span>
            <AvatarOutlineIcon width="163" height="163" fill="currentColor" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-5 xl:col-span-3">
            <div className="flex flex-col">
              <span className="font-bold text-base">Date of Birth</span>
              <span>January 1st 1990</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">Nationality</span>
              <span>Peru</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">Email address</span>
              <span>lmendozan90@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">Address</span>
              <span>Av. Caminos del Inca 2435, Lima, Peru</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">Phone number</span>
              <span>+51 951294769</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base">Web</span>
              <span>https://lmendozan90.github.io/</span>
            </div>
          </div>
        </div>
        <p className="xl:px-[20%]">
          I'm a dynamic Software Engineer with a background in Test Engineering,
          now focused on Software Development. My transition has been immensely
          rewarding, allowing me to leverage my wide-ranging expertise in Ruby
          on Rails, JavaScript, TypeScript, React, HTML, CSS, Cypress, and
          various other development tools across the stack. I'm currently
          engaged in developing innovative software products, where I thrive on
          the opportunity to learn and grow every day. I have a strong passion
          for exploring new technologies and continuously enhancing my skills to
          deliver exceptional results.
        </p>
      </section>
    </div>
  );
};

export default General;
