import { getMovie } from "../../../../components/movie-poster";
import styles from "../../../../styles/movie-info.module.css";

export default async function MovieCredits({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return (
    <div className={styles.credits}>
      <h1 className={styles.title}>{movie.title}</h1>
      <h3> ⭐ {movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>
        Homepage &rarr;
      </a>
    </div>
  );
}
