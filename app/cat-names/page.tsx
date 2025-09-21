import { CatNameGenerator } from "./_components/CatNameGenerator";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <CatNameGenerator />
    </div>
  );
}
