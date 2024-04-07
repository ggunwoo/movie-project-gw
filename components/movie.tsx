"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import Image from "next/image";

interface IMovieProps {
  title: string;
  id: string | number;
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
          width={256}
          height={380}
          priority
        />
      </figure>
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </section>
  );
}
