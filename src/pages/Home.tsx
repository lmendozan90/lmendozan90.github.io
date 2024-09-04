import * as React from "react";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Strengths from "../components/Strengths";
import Education from "../components/Education";

const Home: React.FC = () => {
  return (
    <div className="">
      <General />
      <WorkExperience />
      <Skills />
      <Languages />
      <Strengths />
      <Education />
    </div>
  );
};

export default Home;
