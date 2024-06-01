import { useNavigate } from "react-router-dom";
import { Button, MainContainer } from "../../components";
import ProductList from "../../components/ProductList/ProductList";
import LeadGeneration from "../ProductsFeatures/LeadGeneration";

const ProductPage = ({ title, products, buttonLabel, navigateTo }) => {
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
      <div className="flex justify-center w-full">
        <Button
          type="submit"
          name={buttonLabel}
          className="bg-black hover:opacity-85 text-white w-[250px] h-12 mt-5"
          onClick={handleNavigation}
        />
      </div>
      <div className="px-8">
        <h1 className="text-2xl">Lead Generation:</h1>
      </div>
      <LeadGeneration />
    </MainContainer>
  );
};

export default ProductPage;
