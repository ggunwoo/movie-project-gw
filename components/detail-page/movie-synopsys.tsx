"use client";

import styles from "@/styles/detail-page/movie-content.module.scss";
import { Suspense } from "react";
import { getCredits, getMovie } from "@/util/getData";
import { MovieVideosSlice } from "./movie-videos";
import { MovieSimilarSlice } from "./movie-similar";
import { MovieCreditSlice } from "./movie-credits";

export default async function MovieSynopsys({ id }: { id: string }) {
  const movies = await getMovie(id);

  return (
    <section className={styles.synopsys__container}>
      {/* 개요 */}
      <article className={styles.about}>
        {movies.tagline ? (
          <h2>"{movies.tagline}"</h2>
        ) : (
          <h2>"The Best Movie"</h2>
        )}
        <p>{movies.overview}</p>
      </article>

      {/* 감독/출연 */}
      <article className={styles.credits}>
        <h2>CAST</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCreditSlice id={id} />
        </Suspense>
      </article>

      {/* 비디오 */}
      <article className={styles.videos}>
        <h2>
          <i>{movies.title.toUpperCase()}</i> VIDEOS
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieVideosSlice id={id} />
        </Suspense>
      </article>

      {/* 관련된 추천 영상 */}
      <article className={styles.similar}>
        <h2>YOU MIGHT ALSO LIKE</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieSimilarSlice id={id} />
        </Suspense>
      </article>
    </section>
  );
}
