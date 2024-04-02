"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/movie.module.scss";
import Image from "next/image";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <section className={styles.movie}>
      <figure>
        <Image
          src={poster_path}
          alt={title}
          onClick={onClick}
          width={780}
          height={1170}
        />
      </figure>
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </section>
  );
}
