import styles from "../css/contact.module.css";
import Header from "../components/Header";
import Orbit from "../components/Orbit";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      alert("Email enviado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente mais tarde.");
    }
  }
  return (
    <>
      <Orbit />
      <Header />
      <div className={styles.container}>
        <form onSubmit={sendEmail} className={styles.form}>
          <h1>Vamos conversar?</h1>
          <h2>Seu nome</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Digite aqui seu nome..."
            required
          ></input>
          <h2>Seu email</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Digite aqui seu melhor email..."
            type="email"
            required
          ></input>
          <h2>Sua mensagem</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
