import { useEffect, useState } from "react";
import { MainContainer } from "../../../components";
import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField/InputField";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { headers } from "../../../utils";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../../redux/actions/constants";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  console.log("user--------> ", user);
  const { defaultValue, defaultValueMpin } = user || {};
  const [isCheckedEnterPassword, setIsCheckedEnterPassword] = useState(false);
  const [isCheckedMaximumEnterMpin, setCheckedMaximumEnterMpin] =
    useState(false);

  const [loginInputValue, setLoginInputValue] = useState({
    maxAttemptsEnterPassword: "",
    maxAttemptsEnterMpin: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [isMpinFieldDisabled, setMpinFieldDisabled] = useState(false);
  const [showApprovalMessagePassword, setShowApprovalMessagePassword] =
    useState(false);
  const [showApprovalMessageMpin, setShowApprovalMessageMpin] = useState(false);

  const openModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmParam = () => {
    setIsModalOpen(false);

    dispatch({ type: LOGIN, payload: loginInputValue });

    if (isCheckedEnterPassword) {
      setShowApprovalMessagePassword(true);
    }

    if (isCheckedMaximumEnterMpin) {
      setShowApprovalMessageMpin(true);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginInputValue({
      ...loginInputValue,
      [name]: value,
    });

    setIsCheckedEnterPassword(value.trim().length > 0);
  };

  const handleChangeInputMaximumEnterMpin = (e) => {
    const { name, value } = e.target;
    setLoginInputValue({
      ...loginInputValue,
      [name]: value,
    });

    setCheckedMaximumEnterMpin(value.trim().length > 0);
  };

  const handleChangeLoginCheckbox = (e) => {
    setIsCheckedEnterPassword(e.target.checked);
  };

  const handleChangeLoginCheckboxMpin = (e) => {
    setCheckedMaximumEnterMpin(e.target.checked);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    openModal(
      "Confirmation",
      "Are you sure you want to update this configuration?"
    );
  };

  const handleCancel = () => {
    setLoginInputValue({
      maxAttemptsEnterPassword: "",
      maxAttemptsEnterMpin: "",
    });

    setIsCheckedEnterPassword(false);
    setCheckedMaximumEnterMpin(false);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <MainContainer>
        <form onSubmit={handleLoginFormSubmit}>
          <table className="w-full">
            <TableHeader headers={headers} />
            <tbody>
              <InputField
                name="maxAttemptsEnterPassword"
                label="Maximum attempts to enter password"
                placeholder="Enter Attempts"
                value={loginInputValue?.maxAttemptsEnterPassword}
                defaultValue={defaultValue}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedEnterPassword}
                handleCheckbox={handleChangeLoginCheckbox}
                disabled={showApprovalMessagePassword}
              />
              {showApprovalMessagePassword && (
                <tr>
                  <td colSpan="2" className="text-red-500 text-center pl-2">
                    Request for approval has been sent for Maximum attempts to
                    enter password.
                  </td>
                </tr>
              )}
              <InputField
                name="maxAttemptsEnterMpin"
                label="Maximum attempts to enter MPIN"
                placeholder="Enter Attempts"
                value={loginInputValue?.maxAttemptsEnterMpin}
                defaultValue={defaultValueMpin}
                maxLength="10"
                onChange={handleChangeInputMaximumEnterMpin}
                isChecked={isCheckedMaximumEnterMpin}
                handleCheckbox={handleChangeLoginCheckboxMpin}
                disabled={isMpinFieldDisabled}
              />
              {showApprovalMessageMpin && (
                <tr>
                  <td colSpan="2" className="text-red-500 text-center">
                    Request for approval has been sent for Maximum attempts to
                    enter MPIN.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <ButtonComponent
              label="Save"
              name="Save"
              type="submit"
              disabled={
                !(
                  (isCheckedEnterPassword &&
                    loginInputValue.maxAttemptsEnterPassword) ||
                  (isCheckedMaximumEnterMpin &&
                    loginInputValue.maxAttemptsEnterMpin)
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
                  (isCheckedEnterPassword &&
                    loginInputValue.maxAttemptsEnterPassword) ||
                  (isCheckedMaximumEnterMpin &&
                    loginInputValue.maxAttemptsEnterMpin)
                )
              }
            >
              Cancel
            </ButtonComponent>
          </div>
        </form>
      </MainContainer>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={
            modalTitle === "Confirmation" ? handleConfirmParam : closeModal
          }
          title={modalTitle}
          confirmation={modalMessage}
        />
      )}
    </>
  );
};

export default Login;
