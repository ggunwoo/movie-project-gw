import styles from "@/styles/detail-page/movie-page.module.scss";
import { Suspense } from "react";
import { getMovie } from "@/utils/getData";
import MoviePoster, { PosterSkeleton } from "@/components/detail-page/movie-poster";
import MovieInfo from "@/components/detail-page/movie-info";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation";

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
  // await new Promise((res) => setTimeout(res, 5000))
  const movies = await getMovie(id);

  return (
    <main className={styles.container}>
      {/* 좌측 poster-section */}
      <section className={styles.header__container}>
        <Navigation />

        {/* ------Background Image------ */}
        <figure
          className={styles.bg__img}
          style={{
            background: `url(${movies.backdrop_path}) no-repeat center 0`,
            // backgroundSize: "100% minmax(600px auto)",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.bg__mask}></div>
        </figure>
        
        {/* ------------------------------ */}
        
        <article>
          <Suspense fallback={<PosterSkeleton />}>
            <MoviePoster id={id} />
          </Suspense>

          {/* 우측 Infomation-section */}
          <Suspense fallback={<Loader />}>
            <MovieInfo id={id} />
          </Suspense>
        </article>
      </section>

      {/* content */}
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </main>
  );
}
