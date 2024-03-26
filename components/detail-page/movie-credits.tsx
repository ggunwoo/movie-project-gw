import styles from "@/styles/detail-page/movie-credits.module.css";
import { API_URL } from "@/util/contants";
export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  console.log(credits);
  return (
    <div className={styles.container}>
      {credits.map((credit, i) => (
        <div key={credit.id}>
          <div>{credit.id}</div>
          <img src={credit.profile_path} />
          <div>{credit.name}</div>
        </div>
      ))}
    </div>
  );
}
