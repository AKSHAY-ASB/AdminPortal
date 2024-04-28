import React, { useEffect } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { menuItems } from "../../utils";
// import { adminUserStatus } from "../../utils";
import { AccountCircle } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { fetchRolesRequest } from "../../slice/rolesSlice";

const PopperNotify = () => {
  const [userMenuSetting, setUserMenuSetting] = React.useState(null);
  const open = Boolean(userMenuSetting);

  const loginUserRoles = useSelector((state) => state.roles.roles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, [dispatch]);

  const handleClick = (event) => {
    setUserMenuSetting(event.currentTarget);
  };
  const handleClose = () => {
    setUserMenuSetting(null);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          "& > button:hover": { background: "transparent" },
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <div className="flex items-center mx-4">
            <AccountCircle />
            <h1 className="px-2">{loginUserRoles?.username}</h1>
          </div>

          <KeyboardArrowDown />
        </IconButton>
      </Box>
      <Menu
        anchorEl={userMenuSetting}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <p className="pl-2">{loginUserRoles?.username}</p>
        </MenuItem>
        {menuItems.map((item) => (
          <Box key={item.id}>
            <MenuItem onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <p className="px-2">{item.userName}</p>
            </MenuItem>
            {item.id !== menuItems.length && <Divider />}
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

export default PopperNotify;
