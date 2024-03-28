"use client";

import styles from "@/styles/detail-page/movie-content.module.scss";
import { Suspense } from "react";
import { getCredits, getMovie } from "@/util/getData";
import { MovieVideosSlice } from "./movie-videos";
import { MovieSimilarSlice } from "./movie-similar";
import { MovieCreditSlice } from "./movie-credits"

export default async function MovieSynopsys({ id }: { id: string }) {
  const movies = await getMovie(id);  

  return (
    <main className={styles.synopsys__container}>
      {/* 개요 */}
      <section className={styles.about}>
        <h2>"{movies.tagline}"</h2>
        <p>{movies.overview}</p>
      </section>

      {/* 감독/출연 */}
      <section className={styles.credits}>
        <h2>CAST</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieCreditSlice id={id} />
        </Suspense>
      </section>

      {/* 비디오 */}
      <section className={styles.videos}>
        <h2>
          <i>{movies.title.toUpperCase()}</i> VIDEOS
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieVideosSlice id={id} />
        </Suspense>
      </section>

      {/* 관련된 추천 영상 */}
      <section className={styles.similar}>
        <h2>YOU MIGHT ALSO LIKE</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieSimilarSlice id={id} />
        </Suspense>
      </section>
    </main>
  );
}
