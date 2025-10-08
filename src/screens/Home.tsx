import styles from "../css/home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
import DynamicText from "../hooks/DynamicText";
import Orbit from "../components/Orbit";
export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Orbit />

        <div className={styles.textLayer}>
          <h1 className={styles.orbitText}>ORBIT</h1>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Sua solução em{" "}
              <span className={styles.highlight}>Desenvolvimento Web.</span>
            </h1>
            <div className={styles.component}>
              <DynamicText />
            </div>
          </div>
        </div>
      </div>

      <Content />
      <Footer />
    </>
  );
}
