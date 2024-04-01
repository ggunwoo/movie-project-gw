import styles from "@/styles/detail-page/movie-content.module.scss";
import { getMovie, getVideos } from "@/util/getData";
import Link from "next/link";

export default async function MovieVideosPage({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <main className={styles.videos__container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          title={video.name}
        />
      ))}
    </main>
  );
}

export async function MovieVideosSlice({ id }: { id: string }) {
  const movies = await getMovie(id);
  const videos = await getVideos(id);
  const sliceVideos = videos.slice(0, 3);
  return (
    <article className={styles.videos}>
      <h2>VIDEOS OF {movies.title.toUpperCase()}</h2>
      <div className={styles.article__list}>
        <ul>
          {sliceVideos.map((video) => (
            <li>
              <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                allowFullScreen
                title={video.name}
              />
            </li>
          ))}
        </ul>
        <Link href={`/movies/${id}/video`}>
          <p>View All &rarr;</p>
        </Link>
      </div>
    </article>
  );
}
