import React from "react";

const SandwhichIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
    >
      <path d="M0 4.5v1h20v-1zm0 5v1h20v-1zm0 5v1h20v-1z"></path>
    </svg>
  );
};

export default SandwhichIcon;
