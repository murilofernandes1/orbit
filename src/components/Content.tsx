import styles from "../css/content.module.css";
import DynamicText from "../hooks/DynamicText";
import { Link } from "react-router-dom";
export default function Content() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>
            Procurando <span className={styles.highlight}>presença online</span>{" "}
            para <span className={styles.highlight}>você</span> ou seu{" "}
            <span className={styles.highlight}>negócio</span>?
          </h1>
          <h1>
            A <span className={styles.highlight}>Orbit</span> te entrega com{" "}
            <span className={styles.highlight}>agilidade</span>,{" "}
            <span className={styles.highlight}>eficiência</span> {""} e{" "}
            <span className={styles.highlight}>preço justo.</span>
          </h1>
          <h1>
            {" "}
            <span className={styles.highlight}>Precisou?</span> A gente entrega!{" "}
          </h1>
        </div>
        <div className={styles.component}>
          <DynamicText />
        </div>
        <div className={styles.subtitleContainer}>
          <h1 className={styles.subtitle}>
            Clique{" "}
            <Link to="contact" className={styles.highlight}>
              aqui {""}
            </Link>
            para entrar em contato e solicitar seu orçamento sem compromisso!
          </h1>
        </div>
      </div>
    </>
  );
}
