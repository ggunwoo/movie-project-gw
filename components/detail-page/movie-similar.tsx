import styles from "@/styles/detail-page/movie-content.module.scss";
import Link from "next/link";
import { getSimilar } from "@/util/getData";

export default async function MovieSimilarPage({ id }: { id: string }) {
  const similar = await getSimilar(id);
  return <h1>Similar</h1>;
}

export async function MovieSimilarSlice({ id }: { id: string }) {
  const similar = await getSimilar(id);
  const sliceSimilar = similar.slice(0, 5);
  return (
    <ul>
      {sliceSimilar.map((similar) => (
        <li key={similar.id}>
          <img src={`${similar.poster_path}`} alt={similar.title}></img>
          <p>similar</p>
        </li>
      ))}
      {
        similar.length > 5 &&
        <Link href={`/movies/${id}/?page=similar`}>MORE &rarr;</Link>
      }
    </ul>
  );
}
