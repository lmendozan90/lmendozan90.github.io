import React from "react";

const AvatarOutlineIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 163 163"
      fill={fill}
      className="absolute top-0 left-0"
    >
      <path d="M81.488.01l.002 1.001a80.374 80.374 0 0129.75 5.674l.37-.93A81.376 81.376 0 0081.487.011zM37.224 13.09A81.432 81.432 0 000 81.498h1a80.429 80.429 0 0136.766-67.57l-.542-.841zM154.91 46.096l-.9.435a80.485 80.485 0 01-4.343 77.787 80.491 80.491 0 01-68.196 37.67l-.001 1a81.491 81.491 0 0073.44-116.892z"></path>
    </svg>
  );
};

export default AvatarOutlineIcon;
