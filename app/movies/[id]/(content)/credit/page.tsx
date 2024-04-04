import MovieCreditPage from "@/components/detail-page/movie-credits";

export default function CreditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <MovieCreditPage id={id} />;
}
