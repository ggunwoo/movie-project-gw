import Link from "next/link";
import styles from "@/styles/home.module.scss";
import Image from "next/image";
import getbase64 from "@/lib/getLocalBase64";


interface IMovieProps {
  title: string;
  id: string | number;
  poster_path: string;
}

export default async function Movie({ title, id, poster_path }: IMovieProps) {
  const BlurDataUrl = await getbase64(poster_path);

  return (
    <section className={styles.movie}>
      <Link prefetch className={styles.poster} href={`/movies/${id}`}>
        <Image
          src={poster_path}
          alt={title}
          width={780}
          height={1170}
          sizes="(max-width: 575.98px) 33vw"
          placeholder="blur"
          blurDataURL={BlurDataUrl}
        />
        {/* <img src={poster_path} alt={title} /> */}
      </Link>
      <Link prefetch className={styles.title} href={`/movies/${id}`}>
        {title}
      </Link>
    </section>
  );
}
