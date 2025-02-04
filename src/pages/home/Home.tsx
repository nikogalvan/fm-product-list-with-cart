import styles from "./Home.module.scss";
import productData from "../../../data.json";
import { Product } from "../../types";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home: React.FC = () => {
  const products: Product[] = productData;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desserts</h1>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
