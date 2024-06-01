import ProductPage from "../../../ProductConfigration/ProductsPage";

const ThreeWheelerLoan = () => {
  const products = [
    "Features and Benefits",
    "FAQ",
    "How to Apply",
    "Eligibility",
  ];

  return (
    <ProductPage
      title="Three Wheeler Loan config products"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default ThreeWheelerLoan;
