import { useNavigate } from "react-router-dom";
import { Button, MainContainer } from "../../../../components";
import ProductConfiguration from "../../../ProductConfigration";

const HealthInsurance = () => {
  const products = ["FAQs"];

  const navigate = useNavigate();

  const handleProductFeatures = () => {
    navigate("/productConfiguration");
  };

  return (
    <MainContainer>
      <div className="w-full bg-gray-200 py-4 flex justify-center">
        <h1 className="text-2xl font-bold">Health Insurance</h1>
      </div>
      <div className="p-6 space-y-2">
        <h1 className="text-2xl text-center font-bold">Toggle Products</h1>
        {products.map((product, index) => (
          <ProductConfiguration key={index} label={product} />
        ))}
        <div className="flex justify-center w-full ">
          <Button
            type="submit"
            name="Configure product features"
            className="bg-black hover:opacity-85 text-white w-[250px] h-12 mt-5"
            onClick={handleProductFeatures}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default HealthInsurance;
