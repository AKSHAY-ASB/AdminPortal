// import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

const Alert = (props) => {
  const { errorMessage, className, ...rest } = props;
  return (
    <section
      className={`w-full border-l-4 border-red-500 flex gap-3 bg-[#393939] p-4 ${className}`}
    >
      <ErrorIcon sx={{ color: "red" }} />
      <span className="text-white">{errorMessage}</span>
    </section>
  );
};

export default Alert;
