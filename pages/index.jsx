import styles from "../styles/Home.module.css";
import Board from "../components/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Tabuleiro</h1>
      <Board />
    </div>
  );
}
