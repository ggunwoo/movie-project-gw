"use client";

import { redirect, useSearchParams } from "next/navigation";
import MovieCreditsPage from "@/components/detail-page/movie-credits";
import MovieVideosPage from "@/components/detail-page/movie-videos";
import MovieSimilarPage from "@/components/detail-page/movie-similar";
import MovieSynopsys from "@/components/detail-page/movie-synopsys";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("page");
  const hasSearch = searchParams.has("page")

  // url 임의 수정 접근 방지
  const HandleRedirect = () => {
    // redirect(`/movies/${id}/?page=main`)
    redirect(`/movies/${id}/?page=main`)
  }
  if(!hasSearch || search===''){ HandleRedirect() }

  switch(search) {
    case "main":
      return <MovieSynopsys id={id} />;
    case "credits":
      return <MovieCreditsPage id={id} />;

    case "video":
      return <MovieVideosPage id={id} />;

    case "similar":
      return <MovieSimilarPage id={id} />;
    
    default: HandleRedirect()
  }
}