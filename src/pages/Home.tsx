import * as React from "react";
import MenuList from "../components/MenuList";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Strengths from "../components/Strengths";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies";
import PlanetBackgroundIcon from "../assets/icons/planetBackgroundIcon";

const Home: React.FC = () => {
  return (
    <>
      <PlanetBackgroundIcon />
      <div className="relative h-full p-0 overflow-y-hidden">
        <div className="relative z-10" id="outer-container">
          <MenuList />
          <div id="page-wrap">
            <General />
            <WorkExperience />
            <Skills />
            <Languages />
            <Strengths />
            <Education />
            <Hobbies />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
