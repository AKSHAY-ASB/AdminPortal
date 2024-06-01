import { useState } from "react";
import Modal from "../../../../components/Modal";
import InputField from "../../../../components/InputField/InputField";
import { MainContainer } from "../../../../components";
import TableHeader from "../../../../components/TableHeader/TableHeader";
import { headers } from "../../../../utils";

const HomeLoan = () => {
  const [isCheckedLoanAmount, setIsCheckedLoanAmount] = useState(false);
  const [isCheckedMinAmount, setIsCheckedMinAmount] = useState(false);
  const [isCheckedRateOfInt, setIsCheckedRateOfInt] = useState(false);
  const [isCheckedLoanTenure, setIsCheckedLoanTenure] = useState(false);
  const [isCheckedLoanType, setIsCheckedLoanType] = useState(false);

  const [homeLoanValue, setHomeLoanValue] = useState({
    loanAmount: "",
    minAmount: "",
    rateOfInt: "",
    loanTenure: "",
    loanType: "",
  });
  const [defaultLoanAmount, setDefaultLoanAmount] = useState("3000000");
  const [defaultMinAmount, setDefaultMinAmount] = useState("50000");
  const [defaultRateOfInterest, setDefaultRateOfInterest] = useState("8.5");
  const [defaultLoanTenure, setDefaultLoanTenure] = useState("5");
  const [defaultLoanType, setDefaultLoanType] = useState("Fixed");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmParam = () => {
    setIsModalOpen(false);
    homeLoanValue.loanAmount && setDefaultLoanAmount(homeLoanValue.loanAmount);
    homeLoanValue.minAmount && setDefaultMinAmount(homeLoanValue.minAmount);
    homeLoanValue.rateOfInt &&
      setDefaultRateOfInterest(homeLoanValue.rateOfInt);
    homeLoanValue.loanTenure && setDefaultLoanTenure(homeLoanValue.loanTenure);
    homeLoanValue.loanType && setDefaultLoanType(homeLoanValue.loanType);

    resetForm();
  };

  const resetForm = () => {
    setIsCheckedLoanAmount(false);
    setIsCheckedMinAmount(false);
    setIsCheckedRateOfInt(false);
    setIsCheckedLoanTenure(false);
    setIsCheckedLoanType(false);

    setHomeLoanValue({
      loanAmount: "",
      minAmount: "",
      rateOfInt: "",
      loanTenure: "",
      loanType: "",
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setHomeLoanValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    handleCheckboxChange(name, value);
  };

  const handleCheckboxChange = (name, value) => {
    switch (name) {
      case "loanAmount":
        setIsCheckedLoanAmount(value.trim().length > 0);
        break;
      case "minAmount":
        setIsCheckedMinAmount(value.trim().length > 0);
        break;
      case "rateOfInt":
        setIsCheckedRateOfInt(value.trim().length > 0);
        break;
      case "loanTenure":
        setIsCheckedLoanTenure(value.trim().length > 0);
        break;
      case "loanType":
        setIsCheckedLoanType(value.trim().length > 0);
        break;
      default:
        break;
    }
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log(homeLoanValue);
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <>
      <MainContainer>
        <div className="w-full bg-gray-200 py-4 flex justify-center">
          <h1 className="text-2xl font-bold">
            Configuration product parameter
          </h1>
        </div>
        <form onSubmit={handleLoginFormSubmit}>
          <table className="w-full bg-gray-100 rounded-lg">
            <TableHeader headers={headers} />
            <tbody>
              <InputField
                label="Loan Amount"
                name="loanAmount"
                placeholder="Loan Amount"
                value={homeLoanValue.loanAmount}
                defaultValue={defaultLoanAmount}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedLoanAmount}
                handleCheckbox={(e) => setIsCheckedLoanAmount(e.target.checked)}
              />
              <InputField
                label="Min Amount"
                name="minAmount"
                placeholder="Min Amount"
                value={homeLoanValue.minAmount}
                defaultValue={defaultMinAmount}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedMinAmount}
                handleCheckbox={(e) => setIsCheckedMinAmount(e.target.checked)}
              />
              <InputField
                label="Rate of Interest"
                name="rateOfInt"
                placeholder="Interest Rate (%)"
                value={homeLoanValue.rateOfInt}
                defaultValue={defaultRateOfInterest}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedRateOfInt}
                handleCheckbox={(e) => setIsCheckedRateOfInt(e.target.checked)}
              />
              <InputField
                label="Loan Tenure (Years)"
                name="loanTenure"
                placeholder="Loan Tenure (Years)"
                value={homeLoanValue.loanTenure}
                defaultValue={defaultLoanTenure}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedLoanTenure}
                handleCheckbox={(e) => setIsCheckedLoanTenure(e.target.checked)}
              />
              <InputField
                label="Loan Type"
                name="loanType"
                placeholder="Loan Type"
                value={homeLoanValue.loanType}
                defaultValue={defaultLoanType}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedLoanType}
                handleCheckbox={(e) => setIsCheckedLoanType(e.target.checked)}
                inputType="select"
                options={["Fixed", "Floating"]}
              />
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <button
              name="Save"
              type="button"
              className={`${
                (isCheckedLoanAmount && homeLoanValue.loanAmount) ||
                (isCheckedMinAmount && homeLoanValue.minAmount) ||
                (isCheckedRateOfInt && homeLoanValue.rateOfInt) ||
                (isCheckedLoanTenure && homeLoanValue.loanTenure) ||
                (isCheckedLoanType && homeLoanValue.loanType)
                  ? "bg-[#000000] text-[#fff]"
                  : "bg-[#e6e6e6]"
              } px-10 py-3 rounded-[15px] mr-2`}
              disabled={
                !(isCheckedLoanAmount && homeLoanValue.loanAmount) &&
                !(isCheckedMinAmount && homeLoanValue.minAmount) &&
                !(isCheckedRateOfInt && homeLoanValue.rateOfInt) &&
                !(isCheckedLoanTenure && homeLoanValue.loanTenure) &&
                !(isCheckedLoanType && homeLoanValue.loanType)
              }
              onClick={openModal}
            >
              Save
            </button>
            <button
              name="Cancel"
              type="button"
              className={`${
                (isCheckedLoanAmount && homeLoanValue.loanAmount) ||
                (isCheckedMinAmount && homeLoanValue.minAmount) ||
                (isCheckedRateOfInt && homeLoanValue.rateOfInt) ||
                (isCheckedLoanTenure && homeLoanValue.loanTenure) ||
                (isCheckedLoanType && homeLoanValue.loanType)
                  ? "bg-[#000000] text-[#fff]"
                  : "bg-[#e6e6e6] "
              } px-10 py-3 rounded-[15px] ml-2`}
              disabled={
                !(isCheckedLoanAmount && homeLoanValue.loanAmount) &&
                !(isCheckedMinAmount && homeLoanValue.minAmount) &&
                !(isCheckedRateOfInt && homeLoanValue.rateOfInt) &&
                !(isCheckedLoanTenure && homeLoanValue.loanTenure) &&
                !(isCheckedLoanType && homeLoanValue.loanType)
              }
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </MainContainer>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirmParam}
          title="Confirmation"
          confirmation="Are you sure want to update this configuration ?"
        />
      )}
    </>
  );
};

export default HomeLoan;
