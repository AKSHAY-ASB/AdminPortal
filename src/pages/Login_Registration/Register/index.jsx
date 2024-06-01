import { useState } from "react";
import { MainContainer } from "../../../components";
import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField/InputField";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { headers } from "../../../utils";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";

const Register = () => {
  const [isCheckedDurationResendOtp, setCheckedDurationResendOtp] =
    useState(false);
  const [isCheckedMaximumResendOtp, setCheckedMaximumResendOtp] =
    useState(false);
  const [isCheckedMaxAttemptsOtp, setCheckedMaxAttemptsOtp] = useState(false);
  const [isCheckedSecondFacAuth, setCheckedSecondFacAuth] = useState(false);

  const [registerInputValue, setRegisterInputValue] = useState({
    durationResendOTP: "",
    MaximumAttemptsResendOTP: "",
    MaximumAttemptsEnterOTP: "",
    MaximumAttemptsSecondFactorAuth: "",
  });

  const [defaultValueResendOtp, setDefaultValueResendOtp] = useState("3");
  const [defaultValueMaximumResendOtp, setDefaultValueMaximumResendOtp] =
    useState("2");
  const [defaultValueEnterOTP, setDefaultValueEnterOTP] = useState("5");
  const [defaultValueSecondFactorAuth, setDefaultValueSecondFactorAuth] =
    useState("1");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmParam = () => {
    setIsModalOpen(false);
    registerInputValue.durationResendOTP &&
      setDefaultValueResendOtp(registerInputValue.durationResendOTP);
    setCheckedDurationResendOtp(false);

    registerInputValue.MaximumAttemptsResendOTP &&
      setDefaultValueMaximumResendOtp(
        registerInputValue.MaximumAttemptsResendOTP
      );
    setCheckedMaximumResendOtp(false);

    registerInputValue.MaximumAttemptsEnterOTP &&
      setDefaultValueEnterOTP(registerInputValue.MaximumAttemptsEnterOTP);
    setCheckedMaxAttemptsOtp(false);

    registerInputValue.MaximumAttemptsSecondFactorAuth &&
      setDefaultValueSecondFactorAuth(
        registerInputValue.MaximumAttemptsSecondFactorAuth
      );
    setRegisterInputValue({
      durationResendOTP: "",
      MaximumAttemptsResendOTP: "",
      MaximumAttemptsEnterOTP: "",
      MaximumAttemptsSecondFactorAuth: "",
    });
    setCheckedSecondFacAuth(false);
  };

  const handleChangeCheckedDurationResendOtp = (e) => {
    setCheckedDurationResendOtp(e.target.checked);
  };

  const handleChangeCheckedMaximumResendOtp = (e) => {
    setCheckedMaximumResendOtp(e.target.checked);
  };

  const handleChangeCheckedMaxAttemptsOtp = (e) => {
    setCheckedMaxAttemptsOtp(e.target.checked);
  };

  const handleChangeCheckedSecondFacAuth = (e) => {
    setCheckedSecondFacAuth(e.target.checked);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setRegisterInputValue({
      ...registerInputValue,
      [name]: value,
    });
    setCheckedDurationResendOtp(value.trim().length > 0);
  };

  const handleChangeInputMaximumAttempt = (e) => {
    const { name, value } = e.target;
    setRegisterInputValue({
      ...registerInputValue,
      [name]: value,
    });
    setCheckedMaximumResendOtp(value.trim().length > 0);
  };

  const handleChangeInputMaxAttemptEnterOtp = (e) => {
    const { name, value } = e.target;
    setRegisterInputValue({
      ...registerInputValue,
      [name]: value,
    });
    console.log("-------", value.trim().length > 0);
    setCheckedMaxAttemptsOtp(value.trim().length > 0);
  };

  const handleChangeInputMaximumAttemptsSecondFactorAuth = (e) => {
    const { name, value } = e.target;
    setRegisterInputValue({
      ...registerInputValue,
      [name]: value,
    });
    setCheckedSecondFacAuth(value.trim().length > 0);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setRegisterInputValue({
      durationResendOTP: "",
      MaximumAttemptsResendOTP: "",
      MaximumAttemptsEnterOTP: "",
      MaximumAttemptsSecondFactorAuth: "",
    });
    setCheckedDurationResendOtp(false);
    setCheckedMaximumResendOtp(false);
    setCheckedMaxAttemptsOtp(false);
    setCheckedSecondFacAuth(false);
  };

  return (
    <MainContainer>
      <form>
        <table className="w-full bg-gray-100 rounded-lg">
          <TableHeader headers={headers} />
          <tbody>
            <InputField
              name="durationResendOTP"
              label="Duration for Resend OTP"
              placeholder="Enter Attempts"
              value={registerInputValue?.durationResendOTP}
              defaultValue={defaultValueResendOtp}
              maxLength="10"
              onChange={handleChangeInput}
              isChecked={isCheckedDurationResendOtp}
              handleCheckbox={handleChangeCheckedDurationResendOtp}
            />

            <InputField
              name="MaximumAttemptsResendOTP"
              label="Maximum attempts for Resend OTP"
              placeholder="Enter Attempts"
              value={registerInputValue?.MaximumAttemptsResendOTP}
              defaultValue={defaultValueMaximumResendOtp}
              maxLength="10"
              onChange={handleChangeInputMaximumAttempt}
              isChecked={isCheckedMaximumResendOtp}
              handleCheckbox={handleChangeCheckedMaximumResendOtp}
            />

            <InputField
              name="MaximumAttemptsEnterOTP"
              label="Maximum attempts to enter OTP"
              placeholder="Enter Attempts"
              value={registerInputValue?.MaximumAttemptsEnterOTP}
              defaultValue={defaultValueEnterOTP}
              maxLength="10"
              onChange={handleChangeInputMaxAttemptEnterOtp}
              isChecked={isCheckedMaxAttemptsOtp}
              handleCheckbox={handleChangeCheckedMaxAttemptsOtp}
            />

            <InputField
              name="MaximumAttemptsSecondFactorAuth"
              label="Maximum attempts for second factor auth"
              placeholder="Enter Attempts"
              value={registerInputValue?.MaximumAttemptsSecondFactorAuth}
              defaultValue={defaultValueSecondFactorAuth}
              maxLength="10"
              onChange={handleChangeInputMaximumAttemptsSecondFactorAuth}
              isChecked={isCheckedSecondFacAuth}
              handleCheckbox={handleChangeCheckedSecondFacAuth}
            />
          </tbody>
        </table>

        <div className="flex justify-center">
          <ButtonComponent
            name="Save"
            type="submit"
            onClick={openModal}
            disabled={
              !(
                isCheckedDurationResendOtp &&
                registerInputValue.durationResendOTP
              ) &&
              !(
                isCheckedMaximumResendOtp &&
                registerInputValue.MaximumAttemptsResendOTP
              ) &&
              !(
                isCheckedMaxAttemptsOtp &&
                registerInputValue.MaximumAttemptsEnterOTP
              ) &&
              !(
                isCheckedSecondFacAuth &&
                registerInputValue.MaximumAttemptsSecondFactorAuth
              )
            }
          >
            Save
          </ButtonComponent>
          <ButtonComponent
            name="Cancel"
            type="button"
            onClick={handleCancel}
            disabled={
              !(
                isCheckedDurationResendOtp &&
                registerInputValue.durationResendOTP
              ) &&
              !(
                isCheckedMaximumResendOtp &&
                registerInputValue.MaximumAttemptsResendOTP
              ) &&
              !(
                isCheckedMaxAttemptsOtp &&
                registerInputValue.MaximumAttemptsEnterOTP
              ) &&
              !(
                isCheckedSecondFacAuth &&
                registerInputValue.MaximumAttemptsSecondFactorAuth
              )
            }
          >
            Cancel
          </ButtonComponent>
        </div>
      </form>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirmParam}
          title="Confirmation"
          confirmation="Are you sure want to update this configuration ?"
        />
      )}
    </MainContainer>
  );
};

export default Register;
