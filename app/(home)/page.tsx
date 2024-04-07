import { API_URL } from "@/utils/contents";
import Movie from "@/components/movie";
import styles from "@/styles/home.module.scss";

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <main className={styles.container}>
      {movies.map((movie: movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </main>
  );
}
