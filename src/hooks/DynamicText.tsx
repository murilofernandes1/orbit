import styles from "../css/dynamic.module.css";
import { useState, useEffect } from "react";

export default function Content() {
  const dynamic = [
    "Empresas",
    "Indústrias",
    "Comércios",
    "Varejos",
    "Portfólios",
    "Blogs",
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamic.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.dynamic}>Trabalhamos com {dynamic[textIndex]}</h1>
    </div>
  );
}
