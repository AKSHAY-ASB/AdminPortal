import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { product_feature } from "../../utils";

const TabMenu = ({
  selectedTab,
  visibleTabs,
  handleToggleTab,
  handleMenuOpen,
  handleMenuClose,
  anchorEl,
  handleToggleVisibility,
}) => {
  //   let res = product_feature;
  //   console.log("res=====>", res);

  return (
    <div className="w-full bg-gray-200 py-4 flex justify-center items-center">
      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleToggleTab}
        aria-label="text alignment"
      >
        {product_feature.map(
          (product, index) =>
            visibleTabs.loans && (
              <ToggleButton
                key={index}
                value={product.product_type}
                aria-label="loans"
              >
                {product.product_title}
              </ToggleButton>
            )
        )}
      </ToggleButtonGroup>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={visibleTabs.loans}
                onChange={() => handleToggleVisibility("loans")}
              />
            }
            label="Loans"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={visibleTabs.investment}
                onChange={() => handleToggleVisibility("investment")}
              />
            }
            label="Investment"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={visibleTabs.insurance}
                onChange={() => handleToggleVisibility("insurance")}
              />
            }
            label="Insurance"
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

TabMenu.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  visibleTabs: PropTypes.object.isRequired,
  handleToggleTab: PropTypes.func.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  handleToggleVisibility: PropTypes.func.isRequired,
};

export default TabMenu;
