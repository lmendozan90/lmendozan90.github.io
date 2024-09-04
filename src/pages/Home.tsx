import * as React from "react";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Strengths from "../components/Strengths";

const Home: React.FC = () => {
  return (
    <div className="">
      <General />
      <WorkExperience />
      <Skills />
      <Languages />
      <Strengths />
    </div>
  );
};

export default Home;
