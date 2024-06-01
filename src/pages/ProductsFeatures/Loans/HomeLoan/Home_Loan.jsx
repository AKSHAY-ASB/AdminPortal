import { MainContainer } from "../../../../components";
import ProductsPage from "../../../ProductConfigration/ProductsPage";

const Home_Loan = () => {
  const products = [
    "Features and Benefits",
    "FAQ",
    "How to Apply",
    "Eligibility",
  ];

  return (
    <>
      <MainContainer>
        <ProductsPage
          title="Home Loan config products"
          products={products}
          buttonLabel="Configure product features"
          navigateTo="/productConfiguration"
        />
      </MainContainer>
    </>
  );
};

export default Home_Loan;
