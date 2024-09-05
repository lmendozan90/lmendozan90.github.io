import * as React from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import CrossIcon from "../assets/icons/crossIcon";
import { HashLink } from "react-router-hash-link";
import { push as Menu } from "react-burger-menu";
import SandwichIcon from "../assets/icons/sandwichIcon";
import { useLocation } from "react-router-dom";

const MenuList: React.FC = () => {
  const location = useLocation();
  const [displayMenu, setDisplayMenu] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // Helper function to check if the link is active
  const isActiveLink = (hash: string) => location.hash === hash;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div className="flex items-center h-10 left-0 mt-[30px] mx-6 mb-0 fixed right-0 top-0 z-30">
        <button
          className="ml-auto rounded"
          onClick={() => setDisplayMenu(true)}
        >
          <SandwichIcon width="28" height="28" fill="currentColor" />
        </button>
      </div>
      <Menu
        right
        width={
          // Set different widths for each breakpoint
          innerWidth >= 768
            ? "468px" // Large screen (1200px and above)
            : "100%" // Small screen (below 768px)
        }
        isOpen={displayMenu}
        menuClassName={
          "bg-[#291f10] flex flex-col h-full overflow-y-auto py-0 px-6 pt-[150px]"
        }
        customBurgerIcon={false}
        overlayClassName={"!bg-[#36f3d1] !bg-opacity-50"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <div className="!flex items-center h-10 left-0 mt-[30px] mx-6 mb-0 fixed right-0 top-0 z-30">
          <button
            className="ml-auto rounded"
            onClick={() => setDisplayMenu(false)}
          >
            <CrossIcon width="28" height="28" fill="currentColor" />
          </button>
        </div>
        {MenuListDescription.map((menu, index) => (
          <HashLink
            smooth
            to={menu.to}
            onClick={() => setDisplayMenu(false)}
            key={index}
            className={clsx(
              "border-b border-[#36f3d1] cursor-pointer py-2.5 px-0 relative text-2xl leading-[34px]",
              isActiveLink(menu.to) &&
                "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-[60px] after:bg-[#36f3d1]",
            )}
          >
            {menu.name}
          </HashLink>
        ))}
      </Menu>
    </>
  );
};

const MenuListDescription = [
  {
    name: "Personal Information",
    to: "#personalInformation",
  },
  {
    name: "Work Experience",
    to: "#workExperience",
  },
  {
    name: "Skills",
    to: "#skills",
  },
  {
    name: "Languages",
    to: "#languages",
  },
  {
    name: "Strengths",
    to: "#strengths",
  },
  {
    name: "Education",
    to: "#education",
  },
  {
    name: "Hobbies",
    to: "#hobbies",
  },
];

export default MenuList;
