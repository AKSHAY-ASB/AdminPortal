import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from "../../components";
import TableHeader from "../../components/TableHeader/TableHeader";
import { headers } from "../../utils";
import InputField from "../../components/InputField/InputField";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import Modal from "../../components/Modal";
// import { LOGIN } from "../../redux/actions/constants";

const Foreclosure = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.login);
  const user = "heloo";
  const { defaultValue, defaultValueMpin } = user || {};
  const [isCheckedLockInPeriod, setIsCheckedLockInPeriod] = useState(false);
  const [isCheckedFreezePeriod, setCheckedFreezePeriod] = useState(false);
  const [isCheckedSrExists, setCheckedSrExists] = useState(false);

  const [foreclosure, setForeclosure] = useState({
    lockInPeriod: "",
    freezePeriod: "",
    srExists: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [showApprovalLockInPeriod, setShowApprovalLockInPeriod] =
    useState(false);
  const [showApprovalFreezePeriod, setShowApprovalFreezePeriod] =
    useState(false);
  const [showApprovalSrExists, setShowApprovalSrExists] = useState(false);

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

    dispatch({ type: LOGIN, payload: foreclosure });

    if (isCheckedLockInPeriod) {
      setShowApprovalLockInPeriod(true);
    }

    if (isCheckedFreezePeriod) {
      setShowApprovalFreezePeriod(true);
    }
    if (isCheckedSrExists) {
      setShowApprovalSrExists(true);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForeclosure({
      ...foreclosure,
      [name]: value,
    });

    setIsCheckedLockInPeriod(value.trim().length > 0);
  };

  const handleChangeInputFreezePeriod = (e) => {
    const { name, value } = e.target;
    setForeclosure({
      ...foreclosure,
      [name]: value,
    });

    setCheckedFreezePeriod(value.trim().length > 0);
  };

  const handleChangeInputSrExists = (e) => {
    const { name, value } = e.target;
    setForeclosure({
      ...foreclosure,
      [name]: value,
    });

    setCheckedSrExists(value.trim().length > 0);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    openModal(
      "Confirmation",
      "Are you sure you want to update this configuration?"
    );
  };

  const handleCancel = () => {
    setForeclosure({
      lockInPeriod: "",
      freezePeriod: "",
      srExists: "",
    });

    setIsCheckedLockInPeriod(false);
    setCheckedFreezePeriod(false);
    setCheckedSrExists(false);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <MainContainer>
        <div className="w-full bg-gray-200 py-4 flex justify-center">
          <h1>Foreclosure</h1>
        </div>
        <div className="w-full bg-gray-100 p-4">
          <form onSubmit={handleLoginFormSubmit}>
            <table className="w-full">
              <TableHeader headers={headers} />
              <tbody>
                <InputField
                  name="lockInPeriod"
                  label="Lock in Period"
                  placeholder="Enter Attempts"
                  value={foreclosure?.lockInPeriod}
                  defaultValue={defaultValue}
                  maxLength="10"
                  onChange={handleChangeInput}
                  isChecked={isCheckedLockInPeriod}
                  disabled={showApprovalLockInPeriod}
                />
                {showApprovalLockInPeriod && (
                  <tr>
                    <td colSpan="2" className="text-red-500 pl-4">
                      Request for approval has been sent .
                    </td>
                  </tr>
                )}
                <InputField
                  name="freezePeriod"
                  label="Freeze Period"
                  placeholder="Enter Attempts"
                  value={foreclosure?.freezePeriod}
                  defaultValue={defaultValueMpin}
                  maxLength="10"
                  onChange={handleChangeInputFreezePeriod}
                  isChecked={isCheckedFreezePeriod}
                  disabled={showApprovalFreezePeriod}
                />
                {showApprovalFreezePeriod && (
                  <tr>
                    <td colSpan="2" className="text-red-500 pl-4">
                      Request for approval has been sent .
                    </td>
                  </tr>
                )}
                <InputField
                  name="srExists"
                  label="SR Exists"
                  placeholder="Enter Attempts"
                  value={foreclosure?.srExists}
                  defaultValue={defaultValueMpin}
                  maxLength="10"
                  onChange={handleChangeInputSrExists}
                  isChecked={isCheckedSrExists}
                  disabled={showApprovalSrExists}
                />
                {showApprovalSrExists && (
                  <tr>
                    <td colSpan="2" className="text-red-500 pl-4">
                      Request for approval has been sent .
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
                    (isCheckedLockInPeriod && foreclosure.lockInPeriod) ||
                    (isCheckedFreezePeriod && foreclosure.freezePeriod) ||
                    (isCheckedSrExists && foreclosure.srExists)
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
                    (isCheckedLockInPeriod && foreclosure.lockInPeriod) ||
                    (isCheckedFreezePeriod && foreclosure.freezePeriod) ||
                    (isCheckedSrExists && foreclosure.srExists)
                  )
                }
              >
                Cancel
              </ButtonComponent>
            </div>
          </form>
        </div>
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

export default Foreclosure;
