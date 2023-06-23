import BookLayout from "@src/components/book/layout";
import styles from "@src/scss/Book.module.scss";

export default function Errata() {
  return (
    <div className={styles.inner}>
      <BookLayout state={1} />
      <h1>추록/정오표</h1>
    </div>
  );
}