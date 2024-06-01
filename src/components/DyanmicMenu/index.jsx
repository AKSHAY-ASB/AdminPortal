import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DoneOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { colors } from "@mui/material";

const ReusableMenu = ({
  anchorEl,
  open,
  onClose,
  handleApproveUser,
  handleRejectUser,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
    >
      <ReusableMenuItem
        onClick={handleApproveUser}
        icon={<DoneOutlined sx={{ color: "green" }} />}
        text="Active"
      />
      <ReusableMenuItem
        onClick={handleRejectUser}
        icon={<DeleteOutlineOutlined sx={{ color: "red" }} />}
        text="Deactive"
      />
    </Menu>
  );
};

const ReusableMenuItem = ({ onClick, icon, text }) => {
  return (
    <MenuItem onClick={onClick}>
      {icon}
      <p className="px-1">{text}</p>
    </MenuItem>
  );
};

export { ReusableMenu, ReusableMenuItem };
