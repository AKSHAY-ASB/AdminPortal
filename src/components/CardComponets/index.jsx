import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "../Modal";
import classes from "../Tailwindcss.jsx";
import { product_feature } from "../../utils.jsx";

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

  // const res = product_feature;
  // const res = product_feature[0].types;
  // console.log("card component====>", res);

  // res.map((item) => {
  //   console.log("=======>", item);
  // });

  // res.types.map((type) => {
  //   console.log("res======>", type.type_name);
  // });

  return (
    <>
      <div className={classes.card.container}>
        <div>
          <div className={classes.card.header}>
            <div className="flex items-center">
              <p className={classes.card.title}>{title}</p>
            </div>
            <div className={classes.card.toggleContainer}>
              <div
                className={
                  isOn
                    ? classes.card.toggleSwitchOn
                    : classes.card.toggleSwitchOff
                }
                onClick={handleToggle}
              >
                <label
                  className={
                    isOn
                      ? classes.card.toggleLabelOn
                      : classes.card.toggleLabelOff
                  }
                ></label>
                <input
                  type="checkbox"
                  className="absolute opacity-0 w-0 h-0"
                  checked={isOn}
                  onChange={handleToggle}
                />
              </div>
              <span className={classes.card.toggleText}>
                {!isOn ? "Enable" : "Disable"}
              </span>
            </div>
          </div>
          <p className={classes.card.description}>{description}</p>
        </div>
        <div className={classes.card.footer}>
          <Link
            to={buttonLink}
            className={
              isOn ? classes.card.linkEnabled : classes.card.linkDisabled
            }
          >
            {buttonText}
            <ArrowForwardIcon
              className={
                isOn ? classes.card.arrowVisible : classes.card.arrowInvisible
              }
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
