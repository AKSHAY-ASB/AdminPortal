import ProductPage from "../../../ProductConfigration/ProductsPage";

const CommercialVehicleLoan = () => {
  const products = [
    "Features and Benefits",
    "FAQ",
    "How to Apply",
    "Eligibility",
  ];

  return (
    <ProductPage
      title="Commercial Vehicle Loan config products"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default CommercialVehicleLoan;
