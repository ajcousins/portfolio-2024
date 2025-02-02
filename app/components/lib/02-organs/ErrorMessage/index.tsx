import Centerer from "../../01-cells/Centerer";
import styles from "./styles.module.css";

interface IProps {
  code: number;
  message: string
}

export default function ErrorMessage({ code, message }: IProps) {
  return (
    <Centerer>
      <div className={styles['wrapper']}>
        <h3><strong>{code}</strong></h3>
        <p className={styles['announcement-text']}>{message}</p>
      </div>
    </Centerer>)
}
