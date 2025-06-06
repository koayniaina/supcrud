import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">
            <span className="material-symbols-outlined">school</span>
          </Link>
        </h1>
      </div>
      <div className={styles.button}>
        <Link href="/addstudent">Add Student</Link>
      </div>
    </div>
  );
}
