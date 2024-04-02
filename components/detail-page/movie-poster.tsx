import styles from "@/styles/detail-page/movie-poster.module.scss";
import Link from "next/link";
import { getMovie } from "@/utils/getData";
import Movie_Poster_Alterate from "@/public/movie-poster-alterate_780x1170.png";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  console.log(movie.poster_path);
  return (
    <figure className={styles.poster}>
      <Link href={`/movies/${id}`}>
        {movie.poster_path.includes('null') ? (
          <img src='/movie-poster-alterate_780x1170.png' alt={movie.title} />
          ) : (
          <img src={movie.poster_path} alt={movie.title} />
        )}
      </Link>
    </figure>
  );
}
