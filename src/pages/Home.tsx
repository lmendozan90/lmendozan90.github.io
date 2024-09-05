import * as React from "react";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { HashLink } from "react-router-hash-link";
import MenuList from "../components/MenuList";
import General from "../components/General";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Strengths from "../components/Strengths";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies";
import SandwichIcon from "../assets/icons/sandwichIcon";
import CrossIcon from "../assets/icons/crossIcon";

const Home: React.FC = () => {
  return (
    <div className="">
      <MenuList />
      <General />
      <WorkExperience />
      <Skills />
      <Languages />
      <Strengths />
      <Education />
      <Hobbies />
    </div>
  );
};

export default Home;
