import ProductPage from "../../../ProductConfigration";

const MutualFunds = () => {
  const products = [
    "Mahindra Manulife Small Cap Fund",
    "Mahindra Manulife Business Cycle Fund",
    "Mahindra Manulife Liquid Fund",
    "Mahindra Manulife Low Duration Fund",
    "Mahindra Manulife Focused Fund",
    "Mahindra Manulife Multi Cap Fund",
    "Mahindra Manulife Mid Cap Fund",
    "Mahindra Manulife Large & Mid Cap Fund",
  ];

  return (
    <ProductPage
      title="Mutual Funds"
      products={products}
      buttonLabel="Configure product features"
      navigateTo="/productConfiguration"
    />
  );
};

export default MutualFunds;
