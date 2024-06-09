import { MainContainer } from "../../../../components";
import Breadcrumb from "../../../../components/Breadcrumb";
import ProductConfiguration from "../../../ProductConfigration";

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
        <Breadcrumb />
        <ProductConfiguration
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
