import emptyCartImg from "/assets/images/illustration-empty-cart.svg";
import styles from "./EmptyCartMessage.module.scss";

export const EmptyCartMessage = () => {
  return (
    <div className={styles.container}>
      <img src={emptyCartImg} alt="Empty cart illustration" />
      <p>Your added items will appear here</p>
    </div>
  );
};
