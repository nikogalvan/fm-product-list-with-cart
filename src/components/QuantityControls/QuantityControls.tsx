import incrementQuantitySVG from "/assets/images/icon-increment-quantity.svg";
import decrementQuantitySVG from "/assets/images/icon-decrement-quantity.svg";
import styles from "./QuantityControls.module.scss";

interface Props {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}
export const QuantityControls: React.FC<Props> = ({
  quantity,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className={styles.quantityControls}>
      <button onClick={onDecrease} className={styles.quantityButton}>
        <img src={decrementQuantitySVG} alt="Decrement quantity" />
      </button>
      <span className={styles.quantityValue}>{quantity}</span>
      <button onClick={onIncrease} className={styles.quantityButton}>
        <img src={incrementQuantitySVG} alt="Increment quantity"  />
      </button>
    </div>
  );
};
