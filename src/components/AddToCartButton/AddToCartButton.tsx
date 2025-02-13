import addTocartSVG from "/assets/images/icon-add-to-cart.svg";
import styles from "./AddToCartButton.module.scss";

interface Props {
  onClick: () => void;
}

export const AddToCartButton: React.FC<Props> = ({ onClick }) => (
  <button className={styles.buttonAddCart} onClick={onClick}>
    <img src={addTocartSVG} alt="Add to cart" /> Add to Cart
  </button>
);
