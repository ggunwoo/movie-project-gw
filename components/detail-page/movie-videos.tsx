import styles from "@/styles/detail-page/movie-content.module.scss";
import Link from "next/link";
import { getVideos } from "@/util/getData";

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
  const videos = await getVideos(id);
  const sliceVideos = videos.slice(0, 5);

  console.log(videos.length)
  return (
    <article>
      {sliceVideos.map((video) => 
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          title={video.name}
        />
      )}
      {
        videos.length > 5 &&
        <Link prefetch href={`/movies/${id}/?page=video`}>see all &rarr;</Link>
      }
    </article>
  )
}
