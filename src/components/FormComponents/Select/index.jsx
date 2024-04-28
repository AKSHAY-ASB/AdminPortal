import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="capitalize text-gray-800 text-lg">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="border-b-2 border-gray-500 bg-gray-200 focus:outline-none rounded-tl-sm rounded-tr-sm py-2 px-4"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
