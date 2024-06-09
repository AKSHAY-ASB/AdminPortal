import { useEffect, useState } from "react";
import classes from "../Tailwindcss.jsx";

const InputField = ({
  name,
  label,
  placeholder,
  value,
  defaultValue,
  maxLength,
  onChange,
  isChecked,
  handleCheckbox,
  type = "number",
  inputType = "input",
  options = [],
  disabled,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatDateTime = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <tr>
      <td className="py-2 px-4">{label}:</td>
      {/* <td className="py-2 px-4">
        <span>10</span>
      </td> */}
      <td className="py-2 px-4">
        <span>{defaultValue}</span>
      </td>
      <td className="py-2 px-4">
        {inputType === "input" ? (
          <input
            type={type}
            name={name}
            placeholder={`${placeholder}`}
            value={value}
            maxLength={maxLength}
            className={classes.inputField.input}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <select
            id={name}
            name={name}
            className={classes.inputField.select}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </td>
      <td>{formatDateTime(currentTime)}</td>
      <td className="text-center">maker</td>
    </tr>
  );
};

export default InputField;
