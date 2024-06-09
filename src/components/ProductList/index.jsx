import ToggleButtonComponent from "../Toggle";

const ProductList = ({ title, products }) => {
  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl text-center font-bold">{title}</h1>
      {products.map((product, index) => (
        <ToggleButtonComponent key={index} label={product} />
      ))}
    </div>
  );
};

export default ProductList;
