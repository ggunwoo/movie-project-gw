import styles from "@/styles/detail-page/movie-content.module.scss";
import { API_URL } from "@/util/contants";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div className={styles.card} key={credit.id}>
          <img src={credit.profile_path} />
          <p className={styles.name}>{credit.name}</p>
        </div>
      ))}
    </div>
  );
}
