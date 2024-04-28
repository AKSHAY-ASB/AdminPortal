import { useState } from "react";
import { Button, MainContainer } from "../../../components";
import Modal from "../../../components/Modal";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const [isCheckedEnterPassword, setIsCheckedEnterPassword] = useState(false);
  const [loginInputValue, setLoginInputValue] = useState({
    maxAttemptsEnterPassword: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmParam = () => {
    setIsModalOpen(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginInputValue({
      ...loginInputValue,
      [name]: value,
    });

    setIsCheckedEnterPassword(value.trim().length > 0);
  };

  const handleChangeLoginCheckbox = (e) => {
    setIsCheckedEnterPassword(e.target.checked);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    console.log(loginInputValue);
  };

  return (
    <>
      <MainContainer>
        <form onSubmit={handleLoginFormSubmit}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-5">
            <div className="flex items-center">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Maximum attempts to enter password:
              </label>
            </div>
            <div className="flex items-center w-[10px]">
              <span>3</span>
            </div>
            <div className="w-full md:w-[250px]">
              <input
                type="number"
                name="maxAttemptsEnterPassword"
                placeholder="Enter attempts"
                value={loginInputValue?.maxAttemptsEnterPassword}
                maxLength="10"
                className="bg-[#f1f1f1] p-2 text-[14px] rounded-[10px]"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isCheckedEnterPassword"
                disabled={!loginInputValue.maxAttemptsEnterPassword.length > 0}
                checked={isCheckedEnterPassword}
                onChange={handleChangeLoginCheckbox}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              name="Save"
              type="submit"
              className={`${
                isCheckedEnterPassword &&
                loginInputValue.maxAttemptsEnterPassword
                  ? "bg-[#000000] text-[#fff]"
                  : "bg-[#e6e6e6]"
              } px-10 md:py-3 rounded-[15px]`}
              disabled={
                !loginInputValue.maxAttemptsEnterPassword ||
                !isCheckedEnterPassword
              }
              onClick={openModal}
            >
              Save
            </button>
          </div>
        </form>
      </MainContainer>

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

              <p className="text-sm py-3">
                Are you sure you want to save this record?
              </p>
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
    </>
  );
};

export default Login;
