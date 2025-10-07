import styles from "../css/contact.module.css";
import Header from "./Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>O que você tem em mente?</h1>
          <h2 className={styles.message}>
            Preencha o formulário abaixo e nosso time entrará em contato o mais
            rápido possível!
          </h2>
          <h2>Seu nome</h2>
          <input
            className={styles.input}
            placeholder="Digite aqui seu nome..."
            required
          ></input>
          <h2>Seu email</h2>
          <input
            className={styles.input}
            placeholder="Digite aqui seu melhor email..."
            type="email"
            required
          ></input>
          <h2>Nos conte mais</h2>
          <textarea
            className={styles.inputMessage}
            placeholder="Dê alguns detalhes sobre o que você tem em mente..."
            required
          ></textarea>
          <button className={styles.button}>Enviar</button>
        </form>
      </div>
    </>
  );
}
