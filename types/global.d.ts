// movies
interface movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// synopsys - production --
interface companie {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface countries {
  iso_3166_1 : string;
  name : string;
}

// ------------------------