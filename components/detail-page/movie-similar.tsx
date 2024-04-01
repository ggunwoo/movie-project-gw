import styles from "@/styles/detail-page/movie-content.module.scss";
import { getSimilar } from "@/util/getData";
import Link from "next/link";

export default async function MovieSimilarPage({ id }: { id: string }) {
  const similar = await getSimilar(id);
  return <h1>Similar</h1>;
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
            <p>similar</p>
          </li>
        ))}
      </ul>
      <Link href={`/movies/${id}/similar`}>
        <p>{similar.length} Movies &rarr;</p>
      </Link>
    </article>
  );
}
