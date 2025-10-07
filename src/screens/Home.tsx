import styles from "../css/home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.orbitText}>ORBIT</h1>
        <div className={styles.circle}></div>

        <div className={styles.orbit}>
          <div className={styles.circle2}></div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Sua solução em{" "}
            <span className={styles.highlight}>Desenvolvimento Web.</span>
          </h1>
          <h1 className={styles.title2}></h1>
        </div>
      </div>
      <Content />
      <Footer />
    </>
  );
}
