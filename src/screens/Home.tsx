import { Link } from "react-router-dom";
import styles from "../css/home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
          <h1 className={styles.title}>Sua solução em</h1>
          <h1 className={styles.title2}>Web Development.</h1>
        </div>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>Entre em</h2>
          <Link to="contact" className={styles.contact}>
            contato
          </Link>
          <h2 className={styles.subtitle}>
            agora e solicite seu orçamento sem compromisso!
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
