import { useContext } from "react";
import CartDetail from "../CartDetail/CartDetail";
import styles from "./CartCard.module.scss";
import emptyCardImg from "/assets/images/illustration-empty-cart.svg";
import { ProductCart } from "../../types";
import { CartContext } from "../../context/CartContext/CartContext";

interface Props {
  cartItems: ProductCart[];
}

export const CartCard: React.FC<Props> = ({ cartItems }) => {
  const { removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((product) => (total += product.quantity * product.price));
    return total;
  };

  const quantityProducts =
    cartItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className={styles.container}>
      <h3>Your Cart ({cartItems.length})</h3>
      {quantityProducts === 0 ? (
        <div className={styles.emptyCart}>
          <img src={emptyCardImg} alt="Empty cart illustration" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className={styles.cartSelected}>
          {cartItems.map((product, index) => (
            <CartDetail
              key={index}
              {...product}
              handleRemoveItem={() => removeFromCart(product.id)}
            />
          ))}
          <p>Order Total ${calculateTotal().toFixed(2)}</p>
          <p>This is a carbon-neutral delivery</p>
          <button>Confirm Order</button>
        </div>
      )}
    </div>
  );
};
