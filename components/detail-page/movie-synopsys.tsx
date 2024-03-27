'use client'

import styles from "@/styles/detail-page/movie-content.module.scss"
import { getMovie } from "@/util/getData"

export default async function MovieSynopsys({ id }: { id: string }){
  const movies = await getMovie(id);

  return (
    <main className={styles.synopsys__container}>
      {/* 개요 */}
      <section>개요</section>
      
      {/* 감독/출연 */}
      <section>감독/출현</section>
      
      {/* 비디오 */}
      <section>비디오</section>
      
      {/* 관련된 추천 영상 */}
      <section>관련 추천 영상</section>
    </main>
  )
}