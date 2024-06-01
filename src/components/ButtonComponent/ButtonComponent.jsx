import React from "react";

const ButtonComponent = ({
  name,
  type,
  onClick,
  disabled,
  children,
  label,
}) => {
  return (
    <button
      label={label}
      name={name}
      type={type}
      onClick={onClick}
      className={`${
        disabled ? "bg-[#e6e6e6]" : "bg-[#000000] text-[#fff]"
      } px-10 py-3 rounded-[15px] ml-2`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
