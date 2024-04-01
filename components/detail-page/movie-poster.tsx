import styles from "@/styles/detail-page/movie-poster.module.scss";
import { getMovie } from "@/util/getData";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <figure className={styles.poster}>
      <Link href={`/movies/${id}`}>
        <img src={movie.poster_path} alt={movie.title} />
      </Link>
    </figure>
  );
}
