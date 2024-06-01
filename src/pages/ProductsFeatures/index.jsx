import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

import { MainContainer } from "../../components";
import Loans from "./Loans";
import Investment from "./Investment";
import Insurance from "./Insurance";

const ProductsFeatures = () => {
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
          <Tab label="Loans" className="hover:text-black" />
          <Tab label="Investment" />
          <Tab label="Insurance" />
        </Tabs>
      </div>

      <div className="w-full bg-gray-100 p-4">
        {tabIndexValue === 0 && <Loans />}
        {tabIndexValue === 1 && <Investment />}
        {tabIndexValue === 2 && <Insurance />}
      </div>
    </MainContainer>
  );
};

export default ProductsFeatures;
