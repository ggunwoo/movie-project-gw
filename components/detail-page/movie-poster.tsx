import styles from "@/styles/detail-page/movie-poster.module.scss";
import loadStyles from "@/styles/loading/loading-poster.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getMovie } from "@/utils/getData";
import getbase64 from "@/lib/getLocalBase64";

export default async function MoviePoster({ id }: { id: string }) {
  const movies = await getMovie(id);
  const BlurDataUrl = await getbase64(movies.poster_path)

  return (
    <figure className={styles.poster}>
      <Link href={`/movies/${id}`}>
        {movies.poster_path.includes("null") ? (
          // <img src="/poster-placeholder-780x1170.png" alt={movie.title} />
          <Image
            src="/poster-placeholder-780x1170.png"
            alt={movies.title}
            width={780}
            height={1170}
            sizes="250px"
          />
        ) : (
          // <img src={movie.poster_path} alt={movie.title} />
          <Image
            src={movies.poster_path}
            alt={movies.title}
            width={780}
            height={1170}
            sizes="250px"
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
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
