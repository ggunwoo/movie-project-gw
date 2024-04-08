import styles from "@/styles/loading/loading-content.module.scss"

export default function Loading() {
  const similarLength = new Array(20).fill(0);

  return (
    <section className={styles.skeleton_similar}>
      <h2>YOU MIGHT ALSO LIKE</h2>
      <ul>
        {similarLength.map((el, index) => (
          <li key={index}>
            <figure className={styles.skeleton_poster}></figure>
            <article className={styles.skeleton_title}>
              <p></p>
              <p></p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
