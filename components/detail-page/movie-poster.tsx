import styles from "@/styles/detail-page/movie-poster.module.scss";
import loadStyles from "@/styles/loading/loading-poster.module.scss";
import Link from "next/link";
import { getMovie } from "@/utils/getData";

export default async function MoviePoster({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <figure className={styles.poster}>
      <Link href={`/movies/${id}`}>
        {movie.poster_path.includes("null") ? (
          <img src="/poster-placeholder-780x1170.png" alt={movie.title} />
        ) : (
          <img src={movie.poster_path} alt={movie.title} />
        )}
      </Link>
    </figure>
  );
}

export function PosterSkeleton() {
  return (
    <figure className={loadStyles.skeleton_poster}>
      <div className={loadStyles.skeleton_img}></div>
    </figure>
  );
}
