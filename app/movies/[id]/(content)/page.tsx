import styles from "@/styles/detail-page/movie-content.module.scss";
import { Suspense } from "react";
import MovieAbout from "@/components/detail-page/movie-about";
import { MovieCreditSlice } from "@/components/detail-page/movie-credits";
import { MovieVideosSlice } from "@/components/detail-page/movie-videos";
import { MovieSimilarSlice } from "@/components/detail-page/movie-similar";
import Loader from "@/components/loader";

export default function Page({ params: { id } }: { params: { id: string } }) {

  return (
    <section className={styles.synopsys__container}>
      <Suspense fallback={<Loader />}>
        <MovieAbout id={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MovieCreditSlice id={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MovieVideosSlice id={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MovieSimilarSlice id={id} />
      </Suspense>
    </section>
  );
}
