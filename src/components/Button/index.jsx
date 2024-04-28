// import React from "react";

// eslint-disable-next-line react/prop-types
import Add from "@mui/icons-material/Add";

const Button = ({ name, type = "button", className, disabled, ...rest }) => {
  return (
    <button
      type={type}
      className={`${className} w-32 h-8 text-sm flex items-center justify-center rounded-[22px] py-[15px] px-4 disabled:bg-[#C6C6C6]`}
      {...rest}
    >
      {/* <Add /> */}
      {name}
    </button>
  );
};
export default Button;
