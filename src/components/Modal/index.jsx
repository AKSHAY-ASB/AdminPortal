import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button";
import classes from "../Tailwindcss.jsx";

const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmation,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modal.overlay}>
      <div className={classes.modal.container}>
        <div>
          <div className={classes.modal.header}>
            <h1 className={classes.modal.title}>{title}</h1>
            <RxCross2 onClick={onClose} className={classes.modal.closeIcon} />
          </div>
          <div className={classes.modal.body}>
            <div>{children}</div>
            <p className={classes.modal.confirmationText}>{confirmation}</p>
          </div>
          <div className={classes.modal.footer}>
            <Button
              name="Cancel"
              className={classes.modal.cancelButton}
              onClick={onClose}
            />
            <Button
              name="Yes"
              className={classes.modal.confirmButton}
              onClick={onConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  confirmation: PropTypes.string,
};

export default Modal;
