import { useState } from "react";
import { Button, MainContainer } from "../../../components";
import Modal from "../../../components/Modal";
import { RxCross2 } from "react-icons/rx";

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

  return (
    <MainContainer>
      <form>
        <div>
          <div className="flex justify-evenly items-center gap-5 my-5">
            <div className="flex items-center w-80">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Duration for Resend OTP :
              </label>
            </div>
            <div className="flex items-center w-[10px]">
              <span>3</span>
            </div>
            <div className="w-[250px]">
              <input
                type="number"
                name="durationResendOTP"
                placeholder="Enter attempts"
                value={registerInputValue?.durationResendOTP}
                maxLength="10"
                className="bg-[#f1f1f1] p-2 text-[14px] rounded-[10px]"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isCheckedEnterPassword"
                disabled={!registerInputValue.durationResendOTP.length > 0}
                checked={isCheckedDurationResendOtp}
                onChange={handleChangeCheckedDurationResendOtp}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5 my-5">
            <div className="flex items-center w-80">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Maximum attempts for Resend OTP :
              </label>
            </div>
            <div className="flex items-center w-[10px]">
              <span>3</span>
            </div>
            <div className="w-[250px]">
              <input
                type="number"
                name="MaximumAttemptsResendOTP"
                placeholder="Enter attempts"
                value={registerInputValue?.MaximumAttemptsResendOTP}
                maxLength="10"
                className="bg-[#f1f1f1] p-2 text-[14px] rounded-[10px]"
                onChange={handleChangeInputMaximumAttempt}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isCheckedEnterPassword"
                disabled={
                  !registerInputValue.MaximumAttemptsResendOTP.length > 0
                }
                onChange={handleChangeCheckedMaximumResendOtp}
                checked={isCheckedMaximumResendOtp}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5 my-5">
            <div className="flex items-center w-80">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Maximum attempts to enter OTP :
              </label>
            </div>
            <div className="flex items-center w-[10px]">
              <span>3</span>
            </div>
            <div className="w-[250px]">
              <input
                type="number"
                name="MaximumAttemptsEnterOTP"
                placeholder="Enter attempts"
                value={registerInputValue?.MaximumAttemptsEnterOTP}
                maxLength="10"
                className="bg-[#f1f1f1] p-2 text-[14px] rounded-[10px]"
                onChange={handleChangeInputMaxAttemptEnterOtp}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isCheckedEnterPassword"
                disabled={
                  !registerInputValue.MaximumAttemptsEnterOTP.length > 0
                }
                onChange={handleChangeCheckedMaxAttemptsOtp}
                checked={isCheckedMaxAttemptsOtp}
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5 my-5">
            <div className="flex items-center w-80">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Maximum attempts for second factor auth :
              </label>
            </div>
            <div className="flex items-center w-[10px]">
              <span>3</span>
            </div>
            <div className="w-[250px]">
              <input
                type="number"
                name="MaximumAttemptsSecondFactorAuth"
                placeholder="Enter attempts"
                value={registerInputValue?.MaximumAttemptsSecondFactorAuth}
                maxLength="10"
                className="bg-[#f1f1f1] p-2 text-[14px] rounded-[10px]"
                onChange={handleChangeInputMaximumAttemptsSecondFactorAuth}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isCheckedEnterPassword"
                disabled={
                  !registerInputValue.MaximumAttemptsSecondFactorAuth.length > 0
                }
                onChange={handleChangeCheckedSecondFacAuth}
                checked={isCheckedSecondFacAuth}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            name="Save"
            type="submit"
            className={`${
              (isCheckedDurationResendOtp &&
                registerInputValue.durationResendOTP) ||
              (isCheckedMaximumResendOtp &&
                registerInputValue.MaximumAttemptsResendOTP) ||
              (isCheckedMaxAttemptsOtp &&
                registerInputValue.MaximumAttemptsEnterOTP) ||
              (isCheckedSecondFacAuth &&
                registerInputValue.MaximumAttemptsSecondFactorAuth)
                ? "bg-[#000000] text-[#fff]"
                : "bg-[#e6e6e6]"
            } px-10 md:py-3 rounded-[15px]`}
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
            onClick={openModal}
          >
            Save
          </button>
        </div>
      </form>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          className="rounded-[10px] p-3 sm:w-[400px]"
        >
          <div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-3xl font-medium">Confirmation</h1>
                <RxCross2 onClick={closeModal} className="cursor-pointer" />
              </div>

              <p className="text-sm py-3">Are you want save this records ?</p>
            </div>

            <div className="flex justify-end">
              <Button
                name="Cancel"
                className="w-28  rounded-3xl bg-[#f1f1f1]"
                onClick={closeModal}
              />
              <Button
                name="Yes"
                className=" w-28 rounded-3xl bg-gray-700 text-white  text-xs py-6 mx-2"
                onClick={handleConfirmParam}
              />
            </div>
          </div>
        </Modal>
      )}
    </MainContainer>
  );
};

export default Register;
