import * as React from "react";
import RocketIcon from "../assets/icons/rocketIcon";
import clsx from "clsx";

const Header = ({
  Icon = RocketIcon,
  width = "38",
  heigth = "38",
  title = "",
}) => {
  return (
    <header className="text-center flex flex-col items-center">
      <div className="mx-auto mb-[27px]">
        <Icon width={width} height={heigth} fill="currentColor" />
      </div>
      <span
        className={clsx(
          "text-4xl leading-[46px] font-bold md:px-[12.5%] md:text-[46px] md:leading-[56px]",
          "xl:px-[10%] xl:text-[56px] xl:leading-[66px]",
        )}
      >
        {title}
      </span>
    </header>
  );
};

export default Header;
