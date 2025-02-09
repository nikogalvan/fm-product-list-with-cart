import styles from "./ProductCard.module.scss";
import { Product } from "../../types";
import { ButtonProduct } from "../ButtonProduct/ButtonProduct";

interface Props {
  product: Product;
}
export const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.container}>
      <picture>
        <source media="(min-width:1440px)" srcSet={product.image.desktop} />
        <source media="(min-width:768px)" srcSet={product.image.tablet} />
        <div className={styles.imageContainer}>
          <img src={product.image.mobile} alt={product.name} loading="lazy" />
          <ButtonProduct product={product} />
        </div>
      </picture>
      <footer className={styles.descriptionContainer}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </footer>
    </div>
  );
};
