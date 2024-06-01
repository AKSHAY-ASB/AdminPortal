import ProductPage from "../../../ProductConfigration/ProductsPage";

const FixedDeposit = () => {
  const products = [
    "Features and Benefits",
    "Interest Rates",
    "FAQs",
    "How to Apply",
    "Eligibility and Documents",
  ];

  return (
    <ProductPage
      title="Fixed Deposit"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default FixedDeposit;
