import * as React from "react";
import RocketIcon from "../assets/icons/rocketIcon";

const General: React.FC = () => {
  return (
    <div className="px-[30px] pt-8 pb-[90px]">
      <header className="text-center flex flex-col items-center">
        <div className="mx-auto mb-[27px]">
          <RocketIcon width="38" height="38" fill="currentColor" />
        </div>
        <span className="text-4xl leading-[46px] font-bold">
          Fernando Mendoza Nieves
        </span>
      </header>
      {/* General Info*/}
      <section className="border-t border-[#36f3d1] mt-10 pt-10">
        <div className="mb-[30px]">
          <div className="grid gap-4">
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
      </section>
      <section>
        <p>
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
