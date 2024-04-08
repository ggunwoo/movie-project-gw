import styles from "@/styles/loading/loading-content.module.scss"

export default function Loading(){
  const videoLength = new Array(20).fill(0)
  return (
    <section className={styles.skeleton_videos}>
      <h2>VIDEOS</h2>
      <ul>
        {videoLength.map((el, index) => (
          <li key={index}>
            <div className={styles.skeleton_iframe}></div>
            <p className={styles.skeleton_title}></p>
          </li>
        ))}
      </ul>
    </section>
  )
}