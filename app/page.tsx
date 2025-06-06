import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.table}>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <Link href="#">
                <span className="material-symbols-outlined">delete</span>
              </Link>
              <Link href="#">
                <span className="material-symbols-outlined">edit_square</span>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
