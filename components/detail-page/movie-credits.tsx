import styles from "@/styles/detail-page/movie-content.module.scss";
import { getCredits } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import Avatar_185x185 from "@/public/avatar_alterate_185x185.png";
import Avatar_185x278 from "@/public/avatar_alterate_185x278.png";

export default async function MovieCreditPage({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <section className={styles.credits__container}>
      <h2>CAST</h2>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            <figure>
              {credit.profile_path ? (
                <Image
                  src={credit.profile_path}
                  alt={credit.name}
                  width={185}
                  height={278}
                />
              ) : (
                <div className={styles.avatar}>
                  <Image src={Avatar_185x185} alt={credit.name} />
                </div>
              )}
            </figure>
            <article>
              <p className={styles.name}>{credit.name}</p>
              <p className={styles.character}>as {credit.character}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function MovieCreditSlice({ id }: { id: string }) {
  const credits = await getCredits(id);
  const sliceCredits = credits.slice(0, 5);

  return (
    <article className={styles.credits}>
      <h2>CAST</h2>
      <ul>
        {sliceCredits.map((credit) => (
          <li key={credit.id}>
            {credit.profile_path ? (
              <Image
                src={credit.profile_path}
                alt={credit.name}
                width={185}
                height={278}
                quality={100}
              />
            ) : (
              <div className={styles.avatar}>
                <Image
                  src={Avatar_185x278}
                  alt={credit.name}
                  width={185}
                  height={278}
                />
              </div>
            )}
            <div className={styles.text_group}>
              <p className={styles.credit_name}>{credit.name}</p>
              <p className={styles.credit_character}>as {credit.character}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link prefetch href={`/movies/${id}/credit`}>
        <p>See All &rarr;</p>
      </Link>
    </article>
  );
}
