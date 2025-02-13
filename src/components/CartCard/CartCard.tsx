import { useContext, useMemo } from "react";
import styles from "./CartCard.module.scss";
import { ProductCart } from "../../types";
import { CartContext } from "../../context/CartContext/CartContext";
import { EmptyCartMessage } from "../EmptyCartMessage/EmptyCartMessage";
import { CartSummary } from "../CartSummary/CartSummary";

interface Props {
  cartItems: ProductCart[];
}

export const CartCard: React.FC<Props> = ({ cartItems }) => {
  const { removeFromCart } = useContext(CartContext);

  const calculateTotal = useMemo(() => {
    return cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }, [cartItems]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className={styles.container}>
      <h3>Your Cart ({cartItems.length})</h3>
      {totalQuantity === 0 ? (
        <EmptyCartMessage />
      ) : (
        <CartSummary
          cartItems={cartItems}
          calculateTotal={calculateTotal}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};
