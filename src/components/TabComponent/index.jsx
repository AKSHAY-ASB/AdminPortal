import { useState } from "react";
import MainContainer from "../MainContainer";
import { Tab, Tabs } from "@mui/material";
import Login from "../../pages/Login_Registration/Login";
import Register from "../../pages/Login_Registration/Register";

const TabComponent = () => {
  const [tabIndexValue, setTabIndexValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setTabIndexValue(newValue);
  };

  return (
    <MainContainer>
      <div className="w-full bg-[#f1f1f1] flex justify-center">
        <Tabs
          value={tabIndexValue}
          onChange={handleChangeTabs}
          aria-label="basic tabs example"
        >
          <Tab label="Login" sx={{ "& > button:hover": "#000000" }} />
          <Tab label="Register" />
        </Tabs>
      </div>

      {tabIndexValue === 0 ? <Login /> : <Register />}
    </MainContainer>
  );
};

export default TabComponent;
