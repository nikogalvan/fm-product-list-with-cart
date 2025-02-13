import carbonNeutralSVG from "/assets/images/icon-carbon-neutral.svg";

import { ProductCart } from "../../types";
import CartDetail from "../CartDetail/CartDetail";
import styles from "./CartSummary.module.scss";

interface Props {
  cartItems: ProductCart[];
  calculateTotal: number;
  onRemove: (id: string) => void;
}
export const CartSummary: React.FC<Props> = ({
  calculateTotal,
  cartItems,
  onRemove,
}) => {
  return (
    <div className={styles.container}>
      {cartItems.map((product) => (
        <CartDetail
          key={product.id}
          {...product}
          handleRemoveItem={() => onRemove(product.id)}
        />
      ))}
      <div className={styles.orderTotal}>
        <p>Order Total:</p>
        <span className={styles.totalAmount}>${calculateTotal.toFixed(2)}</span>
      </div>
      <div className={styles.carbonNeutralContainer}>
        <img
          className={styles.carbonNeutralIcon}
          src={carbonNeutralSVG}
          alt="Carbon neutral"
        />
        <p className={styles.carbonNeutralMsg}>
          This is a{" "}
          <span className={styles.highlightedText}>carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
      <button className={styles.confirmButton}>Confirm Order</button>
    </div>
  );
};
