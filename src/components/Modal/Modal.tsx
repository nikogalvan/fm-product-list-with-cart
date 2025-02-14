import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import orderConfirmedSVG from "/public/assets/images/icon-order-confirmed.svg";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, onClose, ...props }) => {

  return (
    <div className={styles.container} onClick={onClose} {...props}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img className={styles.orderConfirmedIcon} src={orderConfirmedSVG} alt="Order confirmed" />
        {children}
        <button className={styles.closeButton} onClick={onClose}>Start New Order</button>
      </div>
    </div>
  )
}

