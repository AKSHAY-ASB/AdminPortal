import { useNavigate } from "react-router-dom";
import { Button, MainContainer } from "../../components";
import ProductList from "../../components/ProductList";
import LeadGeneration from "../ProductsFeatures/LeadGeneration";

const ProductConfiguration = ({ title, products, buttonLabel, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(navigateTo);
  };

  return (
    <MainContainer>
      <div className="w-full bg-gray-200 py-4 flex justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <ProductList title="Toggle Products" products={products} />
      <LeadGeneration />
    </MainContainer>
  );
};

export default ProductConfiguration;
