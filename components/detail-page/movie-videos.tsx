import { API_URL } from "@/util/contants";
import styles from "@/styles/detail-page/movie-content.module.scss";
import { getVideos } from "@/util/getData"


export default async function MovieVideosPage({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.videos__container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
