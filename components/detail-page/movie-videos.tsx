import styles from "@/styles/detail-page/movie-content.module.scss";
import { getMovie, getVideos } from "@/utils/getData";
import Link from "next/link";

export default async function MovieVideosPage({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <section className={styles.videos__container}>
      <h2>VIDEOS</h2>
      <ul>
        {videos.map((video: video) => (
          <li key={video.id}>
            <iframe
              key={video.id}
              src={`https://youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              title={video.name}
            />
            <p>
              {video.name} <span>({video.type})</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function MovieVideosSlice({ id }: { id: string }) {
  const movies = await getMovie(id);
  const videos = await getVideos(id);
  const sliceVideos = videos.slice(0, 3);
  return (
    <article className={styles.videos}>
      <h2>VIDEOS OF {movies.title.toUpperCase()}</h2>
      <ul>
        {sliceVideos.map((video: video) => (
          <li key={video.id}>
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
    </article>
  );
}
