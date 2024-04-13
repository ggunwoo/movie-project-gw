import styles from "@/styles/footer.module.scss";
import Link from "next/link";
import { SiNotion, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>Copyright &copy; 2024 ggunwoo. All rights reserved. </p>
        <ul>
          <li>
            <Link href={"https://github.com/ggunwoo"}>
              <SiGithub />
            </Link>
          </li>
          <li>
            <Link href={"https://gunw.notion.site/2d7b43752d4140dc953fb5c5b5b36eec?pvs=4"}>
              <SiNotion />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
