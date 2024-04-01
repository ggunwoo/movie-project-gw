import styles from "@/styles/detail-page/movie-content.module.scss";
import { getCredits } from "@/util/getData";
import Link from "next/link";

export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.credits__container}>
      {credits.map((credit) => (
        <div className={styles.card} key={credit.id}>
          <img src={credit.profile_path} />
          <p className={styles.name}>{credit.name}</p>
        </div>
      ))}
    </div>
  );
}

export async function MovieCreditSlice({ id }: { id: string }) {
  const credits = await getCredits(id);
  const sliceCredits = credits.slice(0, 5);

  return (
    <article className={styles.credits}>
      <h2>CAST</h2>
      <div className={styles.article__list}>
        <ul>
          {sliceCredits.map((credit) => (
            <li key={credit.id}>
              <img src={credit.profile_path}></img>
              <p>{credit.original_name}</p>
              <span>as {credit.character}</span>
            </li>
          ))}
        </ul>
        <Link href={`/movies/${id}/similar`}>
          <p>See All &rarr;</p>
        </Link>
      </div>
    </article>
  );
}
