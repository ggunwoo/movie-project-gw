"use client";

import styles from "@/styles/detail-page/movie-nav.module.scss";
import Link from "next/link";

export default function MovieNav({ id }) {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link prefetch href={`/movies/${id}/?page=synopsis`}>
            Synopsis
          </Link>
        </li>
        <li>
          <Link prefetch href={`/movies/${id}/?page=credits`}>
            Provider
          </Link>
        </li>
        <li>
          <Link prefetch href={`/movies/${id}/?page=video`}>
            Videos
          </Link>
        </li>
        <li>
          <Link prefetch href={`/movies/${id}/?page=similar`}>
            Similar Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}
