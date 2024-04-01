import styles from "@/styles/detail-page/movie-info.module.scss";
import { getMovie } from "@/utils/getData";
import Link from "next/link";
import { FaStar, FaClock, FaRegCalendarAlt } from "react-icons/fa";

export default async function MovieCredits({ id }) {
  const movie = await getMovie(id);

  const hour = Math.floor(movie.runtime / 60);
  const minute = movie.runtime % 60;

  return (
    <section className={styles.info}>
      <article className={styles.top_group}>
        <Link href={`/movies/${id}`}>
          <h1>{movie.title}</h1>
        </Link>
        <ul>
          {movie.genres.map((el: { id: number; name: string }) => (
            <li key={el.id}>
              <strong>{el.name}</strong>
            </li>
          ))}
        </ul>
      </article>
      <article className={styles.bottom_group}>
        <p>
          <FaStar /> {movie.vote_average.toFixed(1)}/10
        </p>
        <p>
          <FaClock /> {hour}h {minute}m
        </p>
        <p>
          <FaRegCalendarAlt /> {movie.release_date}
        </p>
      </article>
    </section>
  );
}
