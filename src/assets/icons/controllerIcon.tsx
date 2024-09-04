import React from "react";

const ControllerIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path d="M6 3.75h3a2 2 0 012 2v4.5a1 1 0 002 0v-4.5a4 4 0 00-4-4H6a1 1 0 000 2z"></path>
      <path d="M18.5 11.25a5.489 5.489 0 00-3.637 1.375.5.5 0 01-.331.125H9.468a.5.5 0 01-.33-.125 5.5 5.5 0 100 8.25.5.5 0 01.331-.125h5.064a.5.5 0 01.33.125A5.5 5.5 0 1018.5 11.25zm-11.25 6H6.5a.5.5 0 00-.5.5v.75a.75.75 0 01-1.5 0v-.75a.5.5 0 00-.5-.5h-.75a.75.75 0 010-1.5H4a.5.5 0 00.5-.5v-.75a.75.75 0 011.5 0v.75a.5.5 0 00.5.5h.75a.75.75 0 010 1.5zm8.75.5a1 1 0 111-1 1 1 0 01-1 1zm2.5 2.5a1 1 0 111-1 1 1 0 01-1 1zm0-5a1 1 0 111-1 1 1 0 01-1 1zm2.5 2.5a1 1 0 111-1 1 1 0 01-1 1z"></path>
    </svg>
  );
};

export default ControllerIcon;
