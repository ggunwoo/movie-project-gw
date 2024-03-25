import { API_URL } from "../util/contants";
import styles from "../styles/movie-poster.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

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
