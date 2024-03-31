"use client";

import styles from "@/styles/detail-page/movie-content.module.scss";
import { Suspense } from "react";
import Link from "next/link";
import { getMovie, getSimilar, getVideos } from "@/util/getData";
import { MovieVideosSlice } from "./movie-videos";
import { MovieSimilarSlice } from "./movie-similar";
import { MovieCreditSlice } from "./movie-credits";



export default async function MovieSynopsys({ id }: { id: string }) {
  const movies = await getMovie(id);
  const videos = await getVideos(id);
  const similar = await getSimilar(id);

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

        {/* 제조사 */}
        <h3>Production Companies</h3>
        <ul>
          {movies.production_companies.map(
            (companie: companie, index: number, array: companie[]) => (
              <li key={companie.id}>
                <p>
                  {companie.name}
                  {index < array.length - 1 ? "," : ""}
                </p>
              </li>
            )
          )}
        </ul>
        {/* 제조국 */}
        <h3>Production Countries</h3>
        <ul>
          {movies.production_countries.map(
            (countrie: countries, index: number, array: countries[]) => (
              <li key={index}>
                <p>
                  {countrie.name}
                  {index < array.length - 1 ? "," : ""}
                </p>
              </li>
            )
          )}
        </ul>
      </article>

      {/* 감독/출연 */}
      <article className={styles.credits}>
        <h2>CAST</h2>
        <div className={styles.article__list}>
          <Suspense fallback={<div>Loading...</div>}>
            <MovieCreditSlice id={id} />
          </Suspense>
          <Link href={`/movies/${id}/?page=similar`}>
            <p>See All &rarr;</p>
          </Link>
        </div>
      </article>

      {/* 비디오 */}
      <article className={styles.videos}>
        <h2>VIDEOS OF {movies.title.toUpperCase()}</h2>
        <div className={styles.article__list}>
          <Suspense fallback={<div>Loading...</div>}>
            <MovieVideosSlice id={id} />
          </Suspense>
          {videos.length > 5 && (
            <Link href={`/movies/${id}/?page=video`}>
              <p>View All &rarr;</p>
            </Link>
          )}
        </div>
      </article>

      {/* 관련된 추천 영화 */}
      <article className={styles.similar}>
        <h2>YOU MIGHT ALSO LIKE</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieSimilarSlice id={id} />
        </Suspense>
        {similar.length > 5 && (
          <Link href={`/movies/${id}/?page=similar`}>
            <p>{similar.length} Movies &rarr;</p>
          </Link>
        )}
      </article>
    </section>
  );
}
