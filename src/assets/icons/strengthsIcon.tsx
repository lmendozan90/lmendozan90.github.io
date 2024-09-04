import React from "react";

const StrengthsIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill={fill}
    >
      <path d="M48 13.416c0-4.785-3.892-8.677-8.676-8.677-3.195 0-6.13 1.796-7.632 4.594a19.882 19.882 0 0 0-7.357-1.414c-11.045 0-20.031 8.987-20.031 20.034 0 11.046 8.986 20.033 20.031 20.033 11.045 0 20.031-8.987 20.031-20.033 0-2.326-.413-4.603-1.199-6.782A8.657 8.657 0 0 0 48 13.416zm-8.734 26.302H16.159a.5.5 0 0 0 0 1h22.252c-3.484 3.839-8.495 6.269-14.076 6.269-10.494 0-19.031-8.538-19.031-19.033 0-.291.031-.575.044-.863h5.361a.5.5 0 0 0 0-1h-5.31a18.879 18.879 0 0 1 1.255-5.133h17.682a.5.5 0 0 0 0-1H7.088a19.104 19.104 0 0 1 3.519-5.153c.034.007.065.02.101.02h10.901a.5.5 0 0 0 0-1h-9.982c3.374-3.038 7.821-4.906 12.708-4.906 2.393 0 4.719.437 6.923 1.299-.03.075-.051.153-.079.228a7.915 7.915 0 0 0-.264.864c-.028.111-.057.222-.081.335-.04.194-.07.39-.097.586-.013.097-.031.193-.041.292-.03.295-.048.593-.048.893 0 4.784 3.892 8.677 8.676 8.677.277 0 .552-.016.826-.042.088-.008.175-.023.263-.034.185-.023.369-.049.552-.085.101-.019.201-.043.301-.066a8.634 8.634 0 0 0 .805-.226c.065-.022.131-.038.196-.061a18.941 18.941 0 0 1 1.099 6.374c0 4.442-1.541 8.523-4.1 11.765zm3.094-19.25a7.618 7.618 0 0 1-3.036.625c-4.232 0-7.676-3.444-7.676-7.677 0-1.137.243-2.232.725-3.256a7.709 7.709 0 0 1 6.951-4.421c4.232 0 7.676 3.444 7.676 7.677a7.676 7.676 0 0 1-4.64 7.052z"></path>
      <path d="M22.972 32.904H8.625a.5.5 0 0 0 0 1h14.348a.5.5 0 1 0-.001-1zm13.627-6.814H13.434a.5.5 0 0 0 0 1h23.165a.5.5 0 0 0 0-1zM5.937 4.235a1.967 1.967 0 0 0-.401-1.459 1.963 1.963 0 0 0-1.315-.747 1.948 1.948 0 0 0-1.458.401 1.96 1.96 0 0 0-.747 1.314 1.959 1.959 0 0 0 .401 1.459 1.96 1.96 0 0 0 1.563.764c.437 0 .859-.144 1.209-.417a1.96 1.96 0 0 0 .748-1.315zm-1.361.525a.987.987 0 0 1-.721.198.973.973 0 0 1-.478-1.739.978.978 0 0 1 1.37.171.973.973 0 0 1-.171 1.37zm5.777 1.956a.498.498 0 0 0 .708 0l.61-.61.61.61a.498.498 0 0 0 .708 0 .5.5 0 0 0 0-.707l-.61-.61.61-.61a.5.5 0 0 0-.707-.707l-.61.61-.61-.61a.5.5 0 0 0-.707.707l.61.61-.61.61a.499.499 0 0 0-.002.707z"></path>
    </svg>
  );
};

export default StrengthsIcon;
