"use client";

import { redirect, useSearchParams } from "next/navigation";
import MovieCreditsPage from "@/components/detail-page/movie-credits";
import MovieVideosPage from "@/components/detail-page/movie-videos";
import MovieSimilarPage from "@/components/detail-page/movie-similar";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("page");
  const hasSearch = searchParams.has("page")

  if(!hasSearch || search===''){
    redirect(`/movies/${id}/?page=credits`)
  }

  switch(search) {
    case "credits":
      return <MovieCreditsPage id={id} />;

    case "video":
      return <MovieVideosPage id={id} />;

    case "similar":
      return <MovieSimilarPage />;
    
    default:
      return <div>콘텐츠 불러오기 실패</div>
  }
}
