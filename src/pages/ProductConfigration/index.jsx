import { useState } from "react";
import Modal from "../../components/Modal";

const ProductConfiguration = ({ label }) => {
  const [isOn, setIsOn] = useState(true); // Set default state to true (ON)
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleToggle = () => {
    setModalMessage(
      `Are you sure you want to turn ${isOn ? "OFF" : "ON"} this product?`
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
    <div className="flex justify-between items-center p-4 border-b">
      <span className="text-lg">{label}</span>
      <div className="flex items-center space-x-4">
        <span>{!isOn ? "ON" : "OFF"}</span>
        <div
          className={`relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full ${
            isOn ? "bg-green-400" : "bg-gray-300"
          }`}
          onClick={handleToggle}
        >
          <label
            htmlFor={`toggle-${label}`}
            className={`absolute left-0 w-6 h-6 bg-white border-2 rounded-full cursor-pointer transition transform duration-200 ease-linear ${
              isOn ? "translate-x-full border-green-400" : "border-gray-300"
            }`}
          ></label>
          <input
            type="checkbox"
            id={`toggle-${label}`}
            className="absolute opacity-0 w-0 h-0"
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

export default ProductConfiguration;
