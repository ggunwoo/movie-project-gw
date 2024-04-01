import styles from "@/styles/detail-page/movie-content.module.scss";
import { getSimilar } from "@/util/getData";
import Link from "next/link";
import SimilarGenres from "./movie-similar-genres";

export default async function MovieSimilarPage({ id }: { id: string }) {
  const similar = await getSimilar(id);

  return (
    <section className={styles.similar__container}>
      <h2>YOU MIGHT ALSO LIKE</h2>
      <ul>
        {similar.map((similar) => (
          <li key={similar.id}>
            <img src={similar.poster_path} alt="" />
            <article>
              <div>
                <p className={styles.title}>{similar.title}</p>
                <SimilarGenres id={similar.id} />
              </div>
              <Link href={`/movies/${similar.id}`}>View &rarr;</Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function MovieSimilarSlice({ id }: { id: string }) {
  const similar = await getSimilar(id);
  const sliceSimilar = similar.slice(0, 5);
  return (
    <article className={styles.similar}>
      <h2>YOU MIGHT ALSO LIKE</h2>
      <ul>
        {sliceSimilar.map((similar) => (
          <li key={similar.id}>
            <img src={`${similar.poster_path}`} alt={similar.title}></img>
            <p>{similar.title}</p>
          </li>
        ))}
      </ul>
      <Link href={`/movies/${id}/similar`}>
        <p>{similar.length} Movies &rarr;</p>
      </Link>
    </article>
  );
}
