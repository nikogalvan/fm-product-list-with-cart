import carbonNeutralSVG from "/assets/images/icon-carbon-neutral.svg";

import { ProductCart } from "../../types";
import CartDetail from "../CartDetail/CartDetail";
import styles from "./CartSummary.module.scss";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

interface Props {
  cartItems: ProductCart[];
  calculateTotal: number;
  onRemove: (id: string) => void;
  onClearCart: () => void;
}
export const CartSummary: React.FC<Props> = ({
  calculateTotal,
  cartItems,
  onRemove,
  onClearCart
}) => {

  const [isModalOpen, seIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    onClearCart(); // Limpiar el carrito
    seIsModalOpen(false);
  };
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
      <button
        className={styles.confirmButton}
        onClick={() => seIsModalOpen(true)}
      >Confirm Order
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className={styles.confirmModal}>
            <h2 className={styles.title}>Order Confirmed</h2>
            <p className={styles.description}>We hope your enojoy your food!</p>
            <div className={styles.productList}>
              {cartItems.map((product) => (
                <CartDetail
                  key={product.id}
                  {...product}
                />
              ))}
              <div className={styles.orderTotal}>
                <p>Order Total:</p>
                <span className={styles.totalAmount}>${calculateTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
