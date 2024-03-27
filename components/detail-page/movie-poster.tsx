import styles from "@/styles/detail-page/movie-poster.module.scss";
import { getMovie } from "@/util/getData";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.poster}>
      <img
        src={movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
}
