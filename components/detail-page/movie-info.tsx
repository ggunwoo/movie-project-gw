import { getMovie } from "@/util/getMovie";
import styles from "@/styles/detail-page/movie-info.module.css"

export default async function MovieCredits({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{movie.title}</h1>
      <h3> ⭐ {movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>
        Homepage &rarr;
      </a>
    </div>
  );
}
