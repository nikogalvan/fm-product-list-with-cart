import { useContext } from "react";
import { Product } from "../../types";
import styles from "./ButtonProduct.module.scss";
import { CartContext } from "../../context/CartContext/CartContext";
import cartSVG from "/assets/images/icon-add-to-cart.svg";

interface Props {
  product: Product;
}
export const ButtonProduct: React.FC<Props> = ({ product }) => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const productInCart = cart.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className={styles.container}>
      {quantity > 0 ? (
        <div className={styles.quantityControls}>
          <button
            onClick={
              () =>
                quantity > 1
                  ? decreaseQuantity(product.id) // Disminuye cantidad
                  : removeFromCart(product.id) // Elimina el producto si es 1
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button
          className={styles.buttonAddCart}
          onClick={() => addToCart(product)}
        >
          <img src={cartSVG} alt="Add to cart" /> Add to Cart
        </button>
      )}
    </div>
  );
};
