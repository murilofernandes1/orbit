import styles from "../css/header.module.css";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [hideHeader, setHideHeader] = useState(true);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setHideHeader(!hideHeader)}
        className={styles.logo}
      >
        <div>
          <div className={styles.circleLarge}></div>
          <div className={styles.circleSmall}></div>

          {!hideHeader && <Navigation />}
        </div>
      </button>
    </div>
  );
}
