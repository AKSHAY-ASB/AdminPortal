import { useEffect, useState } from "react";

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
            className="bg-[#fff] p-2 text-[14px] rounded-[10px] w-[150px]"
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <select
            id={name}
            name={name}
            className="border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:border-blue-500"
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
      {/* <td className="py-2 px-4">
        <input
          type="checkbox"
          name={`isChecked${name}`}
          disabled={!value.length > 0}
          checked={isChecked}
          onChange={handleCheckbox}
        />
      </td> */}
      <td>{formatDateTime(currentTime)}</td>
      <td className="text-center">maker</td>
    </tr>
  );
};

export default InputField;
