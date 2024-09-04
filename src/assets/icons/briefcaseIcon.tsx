import React from "react";

const BriefCaseIcon = ({
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
      className="pt-1 pb-2.5 px-0 min-h-[34px] w-5"
    >
      <path d="M9.375 11.25a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v.25a.5.5 0 00.5.5H23a.5.5 0 00.5-.5V7.75a1 1 0 00-1-1h-5.525a5 5 0 00-9.95 0H1.5a1 1 0 00-1 1v3.75a.5.5 0 00.5.5h7.875a.5.5 0 00.5-.5zm2.625-7a3 3 0 012.958 2.5H9.042A3 3 0 0112 4.25zm2.625 10.126a2.629 2.629 0 01-3.149 2.574 2.7 2.7 0 01-2.1-2.678v-.27a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5v6.748a1 1 0 001 1h21a1 1 0 001-1V14a.5.5 0 00-.5-.5h-7.83a.5.5 0 00-.545.5z"></path>
    </svg>
  );
};

export default BriefCaseIcon;
