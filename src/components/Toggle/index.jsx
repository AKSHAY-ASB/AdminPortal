import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={`${
        isOn ? "bg-red-500" : "bg-green-500"
      } text-white font-semibold py-2 px-4 rounded`}
      onClick={toggleButton}
    >
      Configration
    </button>
  );
};

export default ToggleButton;
