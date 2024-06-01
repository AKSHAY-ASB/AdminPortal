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
      <div className="w-full bg-gray-200 py-4 flex justify-center">
        <Tabs
          value={tabIndexValue}
          onChange={handleChangeTabs}
          aria-label="basic tabs example"
        >
          <Tab label="Login" className="hover:text-black" />
          <Tab label="Register" />
        </Tabs>
      </div>

      <div className="w-full bg-gray-100 p-4">
        {tabIndexValue === 0 ? <Login /> : <Register />}
      </div>
    </MainContainer>
  );
};

export default TabComponent;
