import { useState } from "react";
import { Drawer } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { FaTimes } from "react-icons/fa";
import CustomAccordion from "../Accordion";

const MuiDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const { helpHeading, helpTitle, ...rest } = props;

  const items = rest;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div
        className="flex items-center gap-1 justify-end text-[14px] cursor-pointer text-black"
        onClick={() => setOpen(true)}
      >
        <p>Help</p>
        <span className="text-sm">
          <HelpOutlineIcon fontSize="" />
        </span>
      </div>

      <Drawer anchor="right" open={open} onClose={handleClose}>
        <div className="py-6 px-4 w-[100vw] lg:w-[600px]">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">{helpHeading}</h1>
              <FaTimes
                onClick={handleClose}
                className="cursor-pointer hover:border rounded-md p-1 text-2xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold border-b-2 pb-1 border-[#3C3B3B]">
                {helpTitle}
              </h4>
              <CustomAccordion items={rest} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
