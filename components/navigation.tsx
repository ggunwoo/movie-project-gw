"use client";

import styles from "../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoHome } from "react-icons/io5";

export default function Navigation() {
  const path = usePathname(); 
  const [count, setCount] = useState<number>(0)

  if(path==="/"){
    return null;
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <ul>
          <li>
            <IoHome />
          </li>
        </ul>
      </Link>
    </nav>
  );
}