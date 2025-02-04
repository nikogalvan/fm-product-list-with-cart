import React from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../types";
import iconAddToCart from "../../../public/assets/images/icon-add-to-cart.svg";
interface ProductCardProps {
  product: Product;
}
//TODO: Complete this component with funcionality and style
const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={styles.productCard}>
    <picture>
      <source media="(min-width:1440px)" srcSet={product.image.desktop} />
      <source media="(min-width:768px)" srcSet={product.image.tablet} />
      <div className={styles.imageContainer}>
        <img src={product.image.mobile} alt={product.name} loading="lazy" />
        <button className={styles.button}>
          <img src={iconAddToCart} className={styles.iconCart} />
          Add to cart
        </button>
      </div>
    </picture>
    <p className={styles.category}>{product.category}</p>
    <h3 className={styles.name}>{product.name}</h3>
    <p className={styles.price}>${product.price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
