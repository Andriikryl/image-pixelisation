import styles from "./page.module.css";
import ImagePixelisation from "../components/ImagePixelisation";

export default function Home() {
  return (
    <main className={styles.main}>
      {[...Array(7).keys()].map((_, index) => {
        return (
          <ImagePixelisation
            key={index}
            src={`/images/${index}.png`}
            src10={`/images/${index}_small.png`}
          />
        );
      })}
    </main>
  );
}
