"use client";

import Link from "next/link";
import styles from "../styles/movie-navigation.module.css"

export default function MovieNav({ id }) {
  return (
    <nav className={styles.container}>
      <ul >
        <li>
          <Link href={`/movies/${id}`}>credits</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/providers`}>providers</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/similar`}>similar</Link>
        </li>
      </ul>
    </nav>
  );
}
