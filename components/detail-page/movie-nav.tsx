"use client";

import styles from "@/styles/detail-page/movie-navigation.module.css"
import Link from "next/link";

export default function MovieNav({ id }) {
  return (
    <nav className={styles.container}>
      <ul >
        <li>
          <Link prefetch href={`/movies/${id}/?page=credits`}>Provider</Link>
        </li>
        <li>
          <Link prefetch href={`/movies/${id}/?page=video`}>Videos</Link>
        </li>
        <li>
          <Link prefetch href={`/movies/${id}/?page=similar`}>Similar Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
