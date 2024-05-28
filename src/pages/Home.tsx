import * as React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const HeaderCard: React.FC = () => {
  return (
    <section className="bg-[#3AAFA9] dark:bg-[#3AAFA9] py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-[#FEFFFF]">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fernando Mendoza
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Software Engineer
            </h2>
          </div>
          <p className="text-[#17252A] dark:text-[#17252A] max-w-2xl font-bold">
            I'm a dynamic Software Engineer with a background in Test
            Engineering, now focused on Software Development. My transition has
            been immensely rewarding, allowing me to leverage my wide-ranging
            expertise in Ruby on Rails, JavaScript, TypeScript, React, HTML,
            CSS, Cypress, and various other development tools across the stack.
            I'm currently engaged in developing innovative software products,
            where I thrive on the opportunity to learn and grow every day. I
            have a strong passion for exploring new technologies and
            continuously enhancing my skills to deliver exceptional results.
          </p>
        </div>
        <img
          alt="John Doe"
          className="rounded-full"
          height={200}
          src="/images/fernando_photo.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width={200}
        />
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <HeaderCard />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
