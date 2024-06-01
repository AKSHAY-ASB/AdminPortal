import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button";

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ">
      <div className="bg-white shadow-lg max-sm:m-2 rounded-[10px] p-3 sm:w-[400px]">
        <div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-medium">{title}</h1>
              <RxCross2 onClick={onClose} className="cursor-pointer" />
            </div>
            <div>{children}</div>
            <p className="text-sm py-3">{confirmation}</p>
          </div>
          <div className="flex justify-end p-3">
            <Button
              name="Cancel"
              className="w-28 rounded-3xl bg-[#f1f1f1]"
              onClick={onClose}
            />
            <Button
              name="Yes"
              className="w-28 rounded-3xl bg-gray-700 text-white text-xs py-6 mx-2"
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
