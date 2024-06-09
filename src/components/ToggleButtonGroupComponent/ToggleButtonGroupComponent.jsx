import React from "react";
import { Menu, MenuItem, FormControlLabel, Switch } from "@mui/material";
import ToggleButtonComponent from "../Toggle";

const ToggleComponent = ({
  anchorEl,
  handleMenuClose,
  visibleTabs,
  handleToggleVisibility,
}) => {
  const items = [
    { label: "Loans", key: "loans" },
    { label: "Investment", key: "investment" },
    { label: "Insurance", key: "insurance" },
  ];

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {items.map((item) => (
        <MenuItem key={item.key}>
          <FormControlLabel
            control={
              <ToggleButtonComponent
                checked={visibleTabs[item.key]}
                onChange={() => handleToggleVisibility(item.key)}
              />
            }
            label={item.label}
          />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ToggleComponent;
