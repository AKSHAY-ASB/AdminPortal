import { useState } from "react";
import Modal from "../Modal";
import classes from "../Tailwindcss.jsx";

const ToggleButtonComponent = ({ label }) => {
  const [isOn, setIsOn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleToggle = () => {
    setModalMessage(
      `Are you sure you want to turn ${isOn ? "Hide" : "Show"} this product?`
    );
    setShowModal(true);
  };

  const confirmToggle = () => {
    setIsOn(!isOn);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.toggle.container}>
      <span className={classes.toggle.labelText}>{label}</span>
      <div className={classes.toggle.toggleWrapper}>
        <div className={classes.toggle.toggle(isOn)} onClick={handleToggle}>
          <label
            htmlFor={`toggle-${label}`}
            className={classes.toggle.toggleHandle(isOn)}
          ></label>
          <input
            type="checkbox"
            id={`toggle-${label}`}
            className={classes.toggle.input}
            checked={isOn}
            onChange={handleToggle}
          />
        </div>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={confirmToggle}
          title="Confirmation"
          confirmation={modalMessage}
        />
      )}
    </div>
  );
};

export default ToggleButtonComponent;
