import ProductPage from "../../../ProductConfigration/ProductsPage";

const UtilityVehicleLoan = () => {
  const products = [
    "Features and Benefits",
    "FAQ",
    "How to Apply",
    "Eligibility",
  ];

  return (
    <ProductPage
      title="Utility Loan config products"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default UtilityVehicleLoan;
