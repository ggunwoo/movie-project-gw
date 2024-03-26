import { API_URL } from "@/util/contants";
import styles from "@/styles/detail-page/movie-poster.module.css";
import { getMovie } from "@/util/getMovie";

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
