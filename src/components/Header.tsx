import React from "react";
import { HiStar } from "react-icons/hi";

const Header: React.FC = () => {
  const handleClick = (section: string) => {
    const selectedSection = document.getElementById(section);
    selectedSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="flex pb-[4.17rem] bg-custom-gradient flex-col px-[10rem]"
      id="header"
    >
      <div className="mx-auto flex flex-row items-center justify-between gap-4 mt-[calc(11.12em+2em)] w-full">
        <article className="space-y-4 text-left">
          <div className="text-[#FEFFFF]">
            <div className="text-[4.4em] font-semibold font-mono leading-none text-[#E96479]">
              <span>
                Full-Stack <br />
                Developer<span className="">.</span>
              </span>
            </div>
          </div>
          <p className="text-white max-w-2xl text-[1.3em] leading-[1.6] w-[32vw] font-mono">
            I'm currently engaged in developing innovative software products,
            where I thrive on the opportunity to learn and grow every day.
          </p>
        </article>
        <figure className="mr-[calc(6em+4em)] relative w-[43rem] h-[30rem]">
          <span className="w-[43rem] h-[43rem] bg-handsome block bg-contain bg-no-repeat"></span>
          <img
            alt="John Doe"
            className="w-[17rem] h-[17rem] absolute top-[50%] left-[50%] rounded-md border-2 border-dotted transform translate-x-[-50%] translate-y-[-70%] brightness-125"
            src="/images/fernando_photo.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
          />
          {/*<span className="bg-handsome w-[24rem] h-[24rem] block"></span>*/}
        </figure>
      </div>
      <div className="flex justify-between text-[#E96479]">
        <ul className="flex justify-between w-[41%]">
          <li className="w-[calc(50%-1.731em)] text-[0.965em]">
            Expertise in Ruby on Rails, JavaScript, TypeScript, React, HTML,
            CSS, Cypress, and various other development tools across the stack
          </li>
          <li className="w-[calc(50%-1.731em)] text-[0.965em]">
            I have a strong passion for exploring new technologies and
            continuously enhancing my skills to deliver exceptional results.
          </li>
        </ul>
        <nav className="fixed right-[7em]">
          <ul>
            <li>
              <button onClick={() => handleClick("header")}>
                <HiStar className="fill-[#4D455D] w-4 h-5" />
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("skills")}>
                <HiStar className="fill-[#4D455D] w-4 h-5" />
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("contact")}>
                <HiStar className="fill-[#4D455D] w-4 h-5" />
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("contact")}>
                <HiStar className="fill-[#4D455D] w-4 h-5" />
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("contact")}>
                <HiStar className="fill-[#4D455D] w-4 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
