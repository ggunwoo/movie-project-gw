import MovieSimilarPage from "@/components/detail-page/movie-similar";

export default function SimilarPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <MovieSimilarPage id={id} />;
}
