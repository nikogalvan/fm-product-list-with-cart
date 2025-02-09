import React from "react";
import { Product } from "../../types";
import styles from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";

interface Props {
  products: Product[];
}
export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={styles.container}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};

