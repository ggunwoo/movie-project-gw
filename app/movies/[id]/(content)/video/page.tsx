import MovieVideosPage from "@/components/detail-page/movie-videos";

export default function VideosPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <MovieVideosPage id={id} />;
}
