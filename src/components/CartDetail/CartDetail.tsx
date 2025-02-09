import styles from "./CartDetail.module.scss";
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
  return (
    <div className={styles.CartDetail}>
      <p>{name}</p>
      <p>{quantity}x</p>
      <p>@ ${price.toFixed(2)}</p>
      <p>${(price * quantity).toFixed(2)}</p>
      <button onClick={handleRemoveItem}>X</button>
    </div>
  );
};

export default CartDetail;
