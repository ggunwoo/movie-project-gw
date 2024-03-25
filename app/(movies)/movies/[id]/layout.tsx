import styles from "../../../../styles/movie-detailPage.module.css";
import { Suspense } from "react";
import MoviePoster, { getMovie } from "../../../../components/movie-poster";
import MovieNav from "../../../../components/movie-nav";
import MovieVideos from "../../../../components/movie-videos";

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

      {/* movie-article-nav */}
      <MovieNav id={id} />

      {/* 우측 Aticle */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        { children }
      </Suspense>
      {/* 하단 video-section */}
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
