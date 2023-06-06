import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {[...Array(7).keys()].map((_, index) => {
        return <img key={index} alt="image" src={`/images/${index}.png`}></img>;
      })}
    </main>
  );
}
