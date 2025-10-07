import styles from "../css/navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.container + " " + styles.fadeIn}>
      <Link className={styles.nav} to="/">
        Home
      </Link>
      <Link className={styles.nav} to="/contact">
        Contato
      </Link>
    </div>
  );
}
