import styles from "@/styles/detail-page/movie-content.module.scss";
import { getMovie } from "@/util/getData";

export default async function MovieAbout({ id }) {
  const movies = await getMovie(id);

  return (
    <article className={styles.about}>
      {movies.tagline ? <h2>"{movies.tagline}"</h2> : <h2>"The Best Movie"</h2>}
      <p>{movies.overview}</p>

      {/* 제조사 */}
      <h3>Production Companies</h3>
      <ul>
        {movies.production_companies.map(
          (companie: companie, index: number, array: companie[]) => (
            <li key={companie.id}>
              <p>
                {companie.name}
                {index < array.length - 1 ? "," : ""}
              </p>
            </li>
          )
        )}
      </ul>
      {/* 제조국 */}
      <h3>Production Countries</h3>
      <ul>
        {movies.production_countries.map(
          (countrie: countries, index: number, array: countries[]) => (
            <li key={index}>
              <p>
                {countrie.name}
                {index < array.length - 1 ? "," : ""}
              </p>
            </li>
          )
        )}
      </ul>
    </article>
  );
}
