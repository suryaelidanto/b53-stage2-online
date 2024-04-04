import CardProduct from "../components/cardProduct";
import { ProductProvider } from "../context/product/ProductProvider";

const Product = () => {

  return (
    <ProductProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CardProduct />
    </ProductProvider>
  );
};

export default Product;
