"use client";

import styles from "@/styles/detail-page/movie-content.module.scss";
import { getMovie } from "@/utils/getData";
import { useEffect, useState } from "react";

export default function SimilarGenres({ id }: { id: number }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      // getMovie() :영화의 상세 정보를 가져오는 함수
      const movieData = await getMovie(id.toString());
      setGenres(movieData.genres || []);
    }
    fetchGenres();
  }, [id]);

  return (
    <section className={styles.genres}>
      {genres.map((genre, index) => (
        <p key={index}>
          {genre.name}
          {index < genres.length - 1 ? ", " : ""}
        </p>
      ))}
    </section>
  );
}
