import React from "react";
import styles from "@/styles/Navbar.module.css";

export default function AddStudent() {
  return (
    <div className={styles.forms}>
      <p>Student</p>
      <form>
        <div className={styles.input}>
          <input type="text" placeholder="Type Name" className="input" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Type Email" className="input" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Type Phone" className="input" />
        </div>
        <div className={styles.input}>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <button className={styles.btn}>Add Student</button>
      </form>
    </div>
  );
}
// 