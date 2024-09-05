import React from "react";

const CrossIcon = ({ width = "24", height = "24", fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
    >
      <path d="M19.048 0 0 19.048.952 20 20 .952z"></path>
      <path d="M.952 0 0 .952 19.048 20l.952-.952z"></path>
    </svg>
  );
};

export default CrossIcon;
