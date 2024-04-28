import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";

import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { PiWarningCircleFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaCheck, FaTimes } from "react-icons/fa";
import TextError from "../TextError";

const PasswordWithStrength = (props) => {
  const { label, name, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordStrength, setShowPasswordStrength] = useState(true);
  const [passwordInfo, setPasswordInfo] = useState({
    hasLength: false,
    hasLetterAndNumber: false,
    hasNoSeqChars: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    const hasSequential = (str) => {
      // Check if str is defined and is a string
      if (typeof str !== "string") {
        return false; // Return false or handle the error as needed
      }

      for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) === 1) {
          return true; // Sequential characters found
        }
      }
      return false; // No sequential characters found
    };

    const hasLetter = /([a-z].*[A-Z])|([A-Z].*[a-z])/.test(password);
    const hasNumber = /[0-9]/.test(password);

    const hasSequentialNumber = !/(123|234|345|456|567|678|789|012)/.test(
      password
    );
    const hasLetterAndNumber = hasLetter && hasNumber;

    const hasSpecialChar = !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    const hasLength = password.length >= 10;
    const hasNoSpace = !/\s/.test(password);

    const hasNoSeqChars =
      !hasSequential(password) &&
      hasSpecialChar &&
      hasSequentialNumber &&
      hasNoSpace;

    setPasswordInfo({
      hasLength,
      hasLetterAndNumber,
      hasNoSeqChars,
    });
    rest.formik.setFieldValue(name, password); // Update Formik field value
  };

  const isValidPassword = () => {
    return (
      passwordInfo.hasLength &&
      passwordInfo.hasLetterAndNumber &&
      passwordInfo.hasNoSeqChars
    );
  };

  const hasError = rest.formik.errors[name] && rest.formik.touched[name];

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="capitalize text-[#525252] text-md">
        {label}
      </label>
      <div
        className={`flex gap-1 bg-gray-100 focus:outline-none rounded-tl-sm rounded-tr-sm px-4  ${
          hasError ? "border-2 border-red-500" : "border-b-2 border-gray-300"
        }`}
      >
        <div className="flex items-center w-full">
          <Field
            id={name}
            type={showPassword ? "text" : "password"}
            name={name}
            value={rest.formik.values[name]} // Add value attribute
            onChange={handlePasswordChange}
            onFocus={() => setShowPasswordStrength(true)}
            {...rest}
            className="bg-transparent w-full py-[15px] focus:outline-none"
          />
          {hasError && <PiWarningCircleFill className="text-red-500" />}
        </div>
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      {/* <ErrorMessage name={name} component={TextError} /> */}

      <div className="">
        {showPasswordStrength && (
          <ul className="flex flex-col p-1 text-md rounded-md">
            {Object.entries(passwordInfo).map(([key, value]) => (
              <li
                key={key}
                className={
                  value
                    ? "text-gray-400 text-[12px] flex item-center"
                    : "flex item-center text-[12px] text-gray-400"
                }
              >
                {value ? (
                  <FaCheck className="mt-1" />
                ) : (
                  <FaTimes className="mt-1" />
                )}
                &nbsp; {passwordStrengthLabels[key]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const passwordStrengthLabels = {
  hasLength: "Minimum password length must be 10 Characters",
  hasLetterAndNumber:
    "Should contain one uppercase letter, lowercase letter, and a number",
  // : "Numbers (0-9) without any sequential number",
  hasNoSeqChars:
    "No sequential letters, numbers or special characters should be used e.g (!@#$%^&*) and extra space",
};

export default PasswordWithStrength;
