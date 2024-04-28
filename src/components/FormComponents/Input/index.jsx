// import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import { PiWarningCircleFill } from "react-icons/pi";

const Input = (props) => {
  const { label, name, className, ...rest } = props;

  const hasError = rest.formik.errors[name] && rest.formik.touched[name];

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className="capitalize text-[#525252] text-md">
        {label}
      </label>
      {hasError ? (
        <div className="flex w-full bg-gray-100 items-center border-2 border-[#DA1E28] py-[15px] px-4">
          <Field
            id={name}
            name={name}
            {...rest}
            className="bg-transparent focus:outline-none w-full px-2"
          />
          <PiWarningCircleFill className="text-red-500" />
        </div>
      ) : (
        <Field
          id={name}
          name={name}
          {...rest}
          className={` bg-gray-100 border-b-2 border-gray-300 focus:outline-none rounded-tl-sm rounded-tr-sm py-[15px] px-4 `}
        />
      )}

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
