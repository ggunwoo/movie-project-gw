import styles from "@/styles/detail-page/movie-detailPage.module.css";
import { Suspense } from "react";
import { getMovie } from "@/util/getMovie";
import MoviePoster from "@/components/detail-page/movie-poster"
import MovieInfo from "@/components/detail-page/movie-info";
import MovieNav from "@/components/detail-page/movie-nav";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div className={styles.container}>
      {/* 좌측 poster-section */}
      <Suspense fallback={<h1>Loading movie poster</h1>} >
        <MoviePoster id={id} />
      </Suspense>

      {/* 우측 Aticle */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      {/* movie-article-nav */}
      <MovieNav id={id} />

      {/* content */}
      <Suspense fallback={<h1>Loading...</h1>}>
        { children }
      </Suspense>
    </div>
  );
}
