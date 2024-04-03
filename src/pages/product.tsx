import React from "react";
import CardProduct from "../components/cardProduct";
import { IProduct } from "../interface/product";

const Product = () => {
  const [product, setProduct] = React.useState<IProduct>({
    image:
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594622096/attached_image/ini-makanan-sehat-yang-perlu-dikonsumsi-setiap-hari.jpg",
    price: "150.000.000",
    title: "Makanan sehat",
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <CardProduct
        image={product.image}
        price={product.price}
        title={product.title}
      />
    </div>
  );
};

export default Product;
