import styles from "./CartDetail.module.scss";
import removeFromCartSVG from "/assets/images/icon-remove-item.svg";
interface Props {
  name: string;
  quantity: number;
  price: number;
  handleRemoveItem: () => void;
}
const CartDetail: React.FC<Props> = ({
  name,
  quantity,
  price,
  handleRemoveItem,
}) => {

  const totalPrice = (price * quantity).toFixed(2);
  const formattedPrice = price.toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <p className={styles.productName}>{name}</p>
        <div className={styles.productDetails}>
          <p className={styles.quantity}>{quantity}x</p>
          <div className={styles.priceInfo}>
            <p className={styles.unitPrice}>@ ${formattedPrice}</p>
            <p className={styles.totalPrice}>${totalPrice}</p>
          </div>
        </div>
      </div>
      <button className={styles.removeButton} onClick={handleRemoveItem}>
        <img src={removeFromCartSVG} alt="Remove from cart" />
      </button>
    </div>
  );
};

export default CartDetail;
