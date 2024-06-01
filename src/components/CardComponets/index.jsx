import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "../Modal";

const CardComponents = (props) => {
  const { title, description, buttonText, buttonLink, icon: Icon } = props;

  const [isOn, setIsOn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleToggle = () => {
    setModalMessage(
      `Are you sure you want to ${isOn ? "disable" : "enable"} this product?`
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
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`relative inline-block w-12 h-6 transition duration-200 ease-linear rounded-full ${
                  isOn ? "bg-green-400" : "bg-gray-300"
                }`}
                onClick={handleToggle}
              >
                <label
                  className={`absolute left-0 w-6 h-6 bg-white border-2 rounded-full cursor-pointer transition transform duration-200 ease-linear ${
                    isOn
                      ? "translate-x-full border-green-400"
                      : "border-gray-300"
                  }`}
                ></label>
                <input
                  type="checkbox"
                  className="absolute opacity-0 w-0 h-0"
                  checked={isOn}
                  onChange={handleToggle}
                />
              </div>
              <span className="text-gray-700 dark:text-gray-400">
                {!isOn ? "Enable" : "Disable"}
              </span>
            </div>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            to={buttonLink}
            className={`flex items-center ${
              isOn ? "text-blue-600 dark:text-blue-400" : "text-gray-400"
            } pointer-events-${isOn ? "auto" : "none"}`}
          >
            {buttonText}
            <ArrowForwardIcon
              className={`ml-1 ${isOn ? "visible" : "invisible"}`}
            />
          </Link>
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
    </>
  );
};

export default CardComponents;
