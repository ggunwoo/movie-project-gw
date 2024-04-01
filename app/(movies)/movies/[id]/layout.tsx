import styles from "@/styles/detail-page/movie-page.module.scss";
import { Suspense } from "react";
import { getMovie } from "@/util/getData";
import MoviePoster from "@/components/detail-page/movie-poster";
import MovieInfo from "@/components/detail-page/movie-info";

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
  const movies = await getMovie(id);

  return (
    <main className={styles.container}>
      {/* 좌측 poster-section */}
      <section className={styles.header__container}>
        {/* Background Image */}
        <figure
          className={styles.bg__img}
          style={{
            background: `url(${movies.backdrop_path}) no-repeat center 0`,
            backgroundSize: "100% minmax(600px auto)",
          }}
        ></figure>
        <div className={styles.bg__mask}></div>
        <article>
          <Suspense fallback={<h1>Loading movie poster</h1>}>
            <MoviePoster id={id} />
          </Suspense>

          {/* 우측 Infomation-section */}
          <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
          </Suspense>
        </article>
      </section>
      {/* content */}
      <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
    </main>
  );
}
