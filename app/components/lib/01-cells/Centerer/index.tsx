import styles from "./styles.module.css";

export default function Centerer({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.wrapper}>
    {children}
  </div>
}
