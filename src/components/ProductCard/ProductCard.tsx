import React from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
}
//TODO: Complete this component with funcionality and style
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <picture>
        <source media="(min-width:1440px)" srcSet={product.image.desktop} />
        <source media="(min-width:768px)" srcSet={product.image.tablet} />
        <img src={product.image.mobile} alt={product.name} loading="lazy" />
      </picture>
      <p className={styles.category}>{product.category}</p>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
