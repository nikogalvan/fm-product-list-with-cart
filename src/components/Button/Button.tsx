import styles from "./Button.module.scss";

interface Props {
  inCart?: boolean;
  quantity?: number;
  onAdd?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export const Button = ({
  inCart,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}: Props) => {
  return (
    <div className={styles.buttonContainer}>
      {!inCart ? (
        //Boton "Add to Cart"
        <button className={styles.addToCart} onClick={onAdd}>
          Add to Cart
        </button>
      ) : (
        // Contador de cantidad
        <div className={styles.quantityControl}>
          <button className={styles.decrease} onClick={onDecrease}>
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.increase} onClick={onIncrease}>
            +
          </button>
        </div>
      )}
    </div>
  );
};
