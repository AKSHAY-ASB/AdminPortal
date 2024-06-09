import { useEffect, useState } from "react";

import { MainContainer } from "../../components";
import Loans from "./Loans";
import Investment from "./Investment";
import Insurance from "./Insurance";
import Modal from "../../components/Modal";
import TabMenu from "../../components/TabMenu/TabMenu";
import CardComponents from "../../components/CardComponets";
import { product_feature } from "../../utils";
// import { PRODUCT_CATEGORY } from "../../redux/actions/constants";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_FEATURE_GET_CMS } from "../../store/actions/actions";

const ProductsFeatures = () => {
  const dispatch = useDispatch();
  const { productFeature } = useSelector((state) => state.productFeature);

  console.log("API----------->", product_feature);

  // const {
  //   categoryProduct,
  //   loading = false,
  //   error = false,
  // } = useSelector((state) => state.categoryProduct);
  const [selectedTab, setSelectedTab] = useState("loans");
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [visibleTabs, setVisibleTabs] = useState({
    loans: true,
    investment: true,
    insurance: true,
  });
  const [confirmationModal, setConfirmationModal] = useState({
    open: false,
    tabName: null,
  });

  const handleToggleTab = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const handleToggleVisibility = (tabName) => {
    const isCurrentlyVisible = visibleTabs[tabName];
    setModalMessage(
      `Are you sure you want to ${
        isCurrentlyVisible ? "hide" : "show"
      } the ${tabName} tab?`
    );
    setConfirmationModal({ open: true, tabName });
    setAnchorEl(null); // Close the menu
  };

  const handleConfirmToggleVisibility = () => {
    const { tabName } = confirmationModal;
    setVisibleTabs((prevVisibleTabs) => {
      const updatedVisibleTabs = {
        ...prevVisibleTabs,
        [tabName]: !prevVisibleTabs[tabName],
      };

      if (selectedTab === tabName && !updatedVisibleTabs[tabName]) {
        const visibleTabNames = Object.keys(updatedVisibleTabs).filter(
          (key) => updatedVisibleTabs[key]
        );

        setSelectedTab(visibleTabNames.length > 0 ? visibleTabNames[0] : null);
      }

      return updatedVisibleTabs;
    });

    setConfirmationModal({ open: false, tabName: null });
  };

  const handleCancelToggleVisibility = () => {
    setConfirmationModal({ open: false, tabName: null });
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderContent = () => {
    if (selectedTab === "loans") return <Loans />;
    if (selectedTab === "investment") return <Investment />;
    if (selectedTab === "insurance") return <Insurance />;
    return null;
  };

  // let res = product_feature;
  // console.log("Product feature page", res);

  // useEffect(() => {
  //   console.log("token", token);
  //   const data = {
  //     token,
  //   };
  //   dispatch({
  //     type: PRODUCT_CATEGORY,
  //     payload: data,
  //   });
  // }, []);

  // const res = product_feature[0].types;
  // console.log("api call---------->", product_feature);

  // const res1 = product_feature[0].types;
  // console.log("====>", res1);

  // const product_feature = productFeature;

  // console.log("product_feature---->", product_feature);

  // useEffect(() => {
  //   dispatch({ type: PRODUCT_FEATURE_GET_CMS });
  // }, []);

  return (
    <MainContainer>
      <TabMenu
        selectedTab={selectedTab}
        visibleTabs={visibleTabs}
        handleToggleTab={handleToggleTab}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        handleToggleVisibility={handleToggleVisibility}
      />

      <>
        <div className="bg-gray-100">
          <div className="flex flex-wrap w-full">
            {/* {res1?.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 p-2">
                <CardComponents
                  key={index}
                  title={item.type_name}
                  // loading={loading}
                  // error={error}
                />
              </div>
            ))} */}

            {product_feature &&
              product_feature.map((products) => {
                console.log(products);
                return (
                  <CardComponents
                    key={products.product_type}
                    title={products.product_type}
                  />
                );
              })}
          </div>
        </div>
      </>
      {/* <div className="w-full bg-gray-100 p-4">{renderContent()}</div> */}

      {confirmationModal.open && (
        <Modal
          isOpen={confirmationModal.open}
          onClose={handleCancelToggleVisibility}
          onConfirm={handleConfirmToggleVisibility}
          title="Confirmation"
          confirmation={modalMessage}
        />
      )}
    </MainContainer>
  );
};

export default ProductsFeatures;
