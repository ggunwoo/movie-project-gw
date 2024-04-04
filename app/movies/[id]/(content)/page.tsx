import styles from "@/styles/detail-page/movie-content.module.scss";
import { Suspense } from "react";
import MovieAbout from "@/components/detail-page/movie-about";
import { MovieCreditSlice } from "@/components/detail-page/movie-credits";
import { MovieVideosSlice } from "@/components/detail-page/movie-videos";
import { MovieSimilarSlice } from "@/components/detail-page/movie-similar";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <section className={styles.synopsys__container}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieAbout id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieCreditSlice id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideosSlice id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieSimilarSlice id={id} />
      </Suspense>
    </section>
  );
}
