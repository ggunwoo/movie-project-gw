import styles from "@/styles/detail-page/movie-content.module.scss";
import Link from "next/link";
import { getCredits } from "@/util/getData";



export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.credits__container}>
      {credits.map((credit) => (
        <div className={styles.card} key={credit.id}>
          <img src={credit.profile_path} />
          <p className={styles.name}>{credit.name}</p>
        </div>
      ))}
    </div>
  );
}

export async function MovieCreditSlice({id}: {id: string;}){
  const credits = await getCredits(id);
  const sliceCredits = credits.slice(0, 5);

  return (
    <ul>
      {sliceCredits.map((credit) => (
        <li>
          <img src={credit.profile_path}></img>
        </li>
      ))}
      <Link prefetch href={`/movies/${id}/?page=similar`}>See all &rarr;</Link>
    </ul>
  )
}
