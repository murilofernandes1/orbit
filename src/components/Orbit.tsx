import styles from "../css/orbit.module.css";
export default function Orbit() {
  return (
    <>
      <div className={styles.circlesLayer}>
        <div className={styles.circle}></div>
        <div className={styles.orbit}>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </>
  );
}
