import ProductPage from "../../../ProductConfigration/ProductsPage";

const UsedCarsLoan = () => {
  const products = [
    "Features and Benefits",
    "FAQ",
    "How to Apply",
    "Eligibility",
  ];

  return (
    <ProductPage
      title="Tractor Loan config products"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default UsedCarsLoan;
