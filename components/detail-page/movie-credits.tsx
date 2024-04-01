import styles from "@/styles/detail-page/movie-content.module.scss";
import { getCredits } from "@/util/getData";
import Link from "next/link";

export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <section className={styles.credits__container}>
      <h2>CAST</h2>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            <figure>
              <img src={credit.profile_path} />
            </figure>
            <article>
              <p className={styles.name}>{credit.name}</p>
              <p className={styles.character}>as {credit.character}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function MovieCreditSlice({ id }: { id: string }) {
  const credits = await getCredits(id);
  const sliceCredits = credits.slice(0, 5);

  return (
    <article className={styles.credits}>
      <h2>CAST</h2>
      <ul>
        {sliceCredits.map((credit) => (
          <li key={credit.id}>
            <img src={credit.profile_path}></img>
            <p className={styles.credit_name}>{credit.name}</p>
            <p className={styles.credit_character}>as {credit.character}</p>
          </li>
        ))}
      </ul>
      <Link prefetch href={`/movies/${id}/credit`}>
        <p>See All &rarr;</p>
      </Link>
    </article>
  );
}
