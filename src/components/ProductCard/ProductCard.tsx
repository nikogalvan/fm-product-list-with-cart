import React from "react";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
}
//TODO: Complete this component with funcionality and style
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <img src={product.image.thumbnail} />
      <p>{product.category}</p>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
