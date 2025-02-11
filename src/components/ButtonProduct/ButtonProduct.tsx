import { useContext } from "react";
import { Product } from "../../types";
import styles from "./ButtonProduct.module.scss";
import { CartContext } from "../../context/CartContext/CartContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { QuantityControls } from "../QuantityControls/QuantityControls";

interface Props {
  product: Product;
}
export const ButtonProduct: React.FC<Props> = ({ product }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const productInCart = cart.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(product.id);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className={styles.container}>
      {quantity > 0 ? (
        <QuantityControls
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={() => addToCart(product)}
        />
      ) : (
        <AddToCartButton onClick={() => addToCart(product)} />
      )}
    </div>
  );
};
