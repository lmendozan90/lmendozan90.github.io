import * as React from "react";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import RocketIcon from "../assets/icons/rocketIcon";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="">
      <General />
      <WorkExperience />
      {/*<main className="relative h-screen overflow-y-scroll">*/}
      {/*  <div className="">*/}
      {/*    <Skills />*/}
      {/*  </div>*/}
      {/*  <div className="">*/}
      {/*    <Contact />*/}
      {/*  </div>*/}
      {/*</main>*/}
    </div>
  );
};

export default Home;
