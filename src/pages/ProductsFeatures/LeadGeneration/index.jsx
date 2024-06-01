import { useState } from "react";
import { MainContainer } from "../../../components";
import Modal from "../../../components/Modal";
import InputField from "../../../components/InputField/InputField";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { headers } from "../../../utils";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";

const LeadGeneration = () => {
  const [isCheckedNextAttemptDuration, setIsCheckedNextAttemptDuration] =
    useState(false);

  const [leadGenerationInputValue, setLeadGenerationInputValue] = useState({
    nextAttemptDuration: "",
  });
  const [defaultValue, setDefaultValue] = useState("24");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmParam = () => {
    setIsModalOpen(false);
    leadGenerationInputValue.nextAttemptDuration &&
      setDefaultValue(leadGenerationInputValue.nextAttemptDuration);
    setIsCheckedNextAttemptDuration("");

    setLeadGenerationInputValue({
      nextAttemptDuration: "",
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLeadGenerationInputValue({
      ...leadGenerationInputValue,
      [name]: value,
    });

    setIsCheckedNextAttemptDuration(value.trim().length > 0);
  };

  const handleChangeLeadGenCheckbox = (e) => {
    setIsCheckedNextAttemptDuration(e.target.checked);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    console.log(leadGenerationInputValue);
  };

  const handleCancel = () => {
    setLeadGenerationInputValue({
      nextAttemptDuration: "",
    });

    setIsCheckedNextAttemptDuration(false);
  };

  return (
    <>
      <MainContainer>
        <form onSubmit={handleLoginFormSubmit}>
          <table className="w-full">
            <TableHeader headers={headers} />
            <tbody>
              <InputField
                name="nextAttemptDuration"
                label="Next Attempt Duration"
                placeholder="Enter Attempts"
                value={leadGenerationInputValue?.nextAttemptDuration}
                defaultValue={`${defaultValue}hrs`}
                maxLength="10"
                onChange={handleChangeInput}
                isChecked={isCheckedNextAttemptDuration}
                handleCheckbox={handleChangeLeadGenCheckbox}
              />
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <ButtonComponent
              label="Save"
              name="Save"
              onClick={openModal}
              type="submit"
              disabled={
                !(
                  isCheckedNextAttemptDuration &&
                  leadGenerationInputValue.nextAttemptDuration
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
                  isCheckedNextAttemptDuration &&
                  leadGenerationInputValue.nextAttemptDuration
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
          onConfirm={handleConfirmParam}
          title="Confirmation"
          confirmation="Are you sure want to update this configuration ?"
        />
      )}
    </>
  );
};

export default LeadGeneration;
