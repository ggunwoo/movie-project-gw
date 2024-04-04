import styles from "@/styles/detail-page/movie-content.module.scss";
import { getSimilar } from "@/utils/getData";
import Link from "next/link";
import Image from "next/image";
import SimilarGenres from "./movie-similar-genres";
import Movie_Poster_Alterate from "@/public/poster-placeholder-780x1170.png";

export default async function MovieSimilarPage({ id }: { id: string }) {
  const similar = await getSimilar(id);

  return (
    <section className={styles.similar__container}>
      <h2>YOU MIGHT ALSO LIKE</h2>
      <ul>
        {similar.map((similar) => (
          <li key={similar.id}>
            <Link href={`/movies/${similar.id}`}>
              {similar.poster_path ? (
                <Image
                  src={similar.poster_path}
                  alt={similar.title}
                  width={230}
                  height={320}
                />
              ) : (
                <Image
                  src={Movie_Poster_Alterate}
                  alt={similar.title}
                  width={230}
                  height={320}
                />
              )}
            </Link>
            <article>
              <div>
                <Link href={`/movies/${similar.id}`}>
                  <p className={styles.title}>{similar.title}</p>
                </Link>
                <SimilarGenres id={similar.id} />
              </div>
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
            <Link href={`/movies/${similar.id}`}>
              {similar.poster_path ? (
                <Image
                  src={`${similar.poster_path}`}
                  alt={similar.title}
                  width={200}
                  height={300}
                  priority
                />
              ) : (
                <Image
                  src={Movie_Poster_Alterate}
                  alt="MOVIE_POSTER"
                  width={200}
                  height={300}
                  priority
                />
              )}
              <p>{similar.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/movies/${id}/similar`}>
        <p>{similar.length} Movies &rarr;</p>
      </Link>
    </article>
  );
}
