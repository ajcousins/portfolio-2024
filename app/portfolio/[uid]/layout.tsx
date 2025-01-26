import styles from "./styles.module.css";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
      {children}
    </div>
  );
}
