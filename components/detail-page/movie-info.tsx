import { getMovie } from "@/util/getData";
import styles from "@/styles/detail-page/movie-info.module.scss"

export default async function MovieCredits({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{movie.title}</h1>
      <h3> ⭐ {movie.vote_average.toFixed(1)}</h3>
      <a href={movie.homepage} target={"_blank"}>
        Homepage &rarr;
      </a>
    </div>
  );
}
