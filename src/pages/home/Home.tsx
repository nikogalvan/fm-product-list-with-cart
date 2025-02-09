import styles from "./Home.module.scss";
import { useProducts } from "../../hooks/useProducts";
import { CartCard, ProductList } from "../../components/";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Home = () => {
  const { products, error, loading } = useProducts("../../../data.json");
  const { cart } = useContext(CartContext);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desserts</h1>
      <ProductList products={products} />
      <CartCard cartItems={cart} />
    </div>
  );
};

export default Home;
