import styles from "@/styles/loading/loading-home.module.scss";

export default async function Loading() {
  const movies = new Array(20).fill(0);

  return (
    <main className={styles.skeleton_container}>
      {movies.map((el, index) => (
        <section className={styles.skeleton_section} key={index}>
          <div className={styles.skeleton_img}></div>
          <div className={styles.skeleton_title}></div>
        </section>
      ))}
    </main>
  );
}
