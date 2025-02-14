import { ProductCart } from "../../types";
import styles from "./CartDetail.module.scss";
import removeFromCartSVG from "/assets/images/icon-remove-item.svg";
interface Props extends ProductCart {
  handleRemoveItem?: () => void;
}
const CartDetail: React.FC<Props> = ({
  name,
  quantity,
  price,
  image,
  handleRemoveItem = null,

}) => {

  const totalPrice = (price * quantity).toFixed(2);
  const formattedPrice = price.toFixed(2);
  return (
    <div className={styles.container}>
      {!handleRemoveItem && <img src={image.thumbnail} alt={name} className={styles.productImage} />}

      <div
        className={`${styles.productInfo} ${!handleRemoveItem ? styles.withoutRemoveButton : ""}`}
      >
        <p className={styles.productName}>{name}</p>

        <div className={styles.productDetails}>
          <p className={styles.quantity}>{quantity}x</p>
          <p className={styles.unitPrice}>@ ${formattedPrice}</p>
          {handleRemoveItem && <p className={styles.totalPrice}>${totalPrice}</p>}
        </div>
      </div>

      {handleRemoveItem ? (
        <button className={styles.removeButton} onClick={handleRemoveItem}>
          <img src={removeFromCartSVG} alt="Remove from cart" />
        </button>
      ) : (
        <p className={styles.totalPrice}>${totalPrice}</p>
      )}
    </div>
  );
};

export default CartDetail;
