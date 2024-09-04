import * as React from "react";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";

const Home: React.FC = () => {
  return (
    <div className="">
      <General />
      <WorkExperience />
      <Skills />
      <Languages />
      {/*<main className="relative h-screen overflow-y-scroll">*/}
      {/*  <div className="">*/}
      {/*    <Contact />*/}
      {/*  </div>*/}
      {/*</main>*/}
    </div>
  );
};

export default Home;
