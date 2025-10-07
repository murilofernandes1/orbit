import styles from "../css/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.circleLarge}></div>
        <div className={styles.circleSmall}></div>
      </div>
      <p className={styles.orbit}>Orbit</p>
      <p className={styles.reserved}>2025 © Todos direitos reservados.</p>
    </footer>
  );
}
