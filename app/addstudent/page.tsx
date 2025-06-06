"use client";

import React from "react";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import toast, { Toaster } from "react-hot-toast";
// import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import styles from "@/styles/Navbar.module.css";

interface Managment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
}
export default function AddStudent() {
  // const [student, setStudent] = useState<Managment[]>([]);
  const [form, setForm] = useState<Managment>({
    name: "",
    email: "",
    phone: "",
    gender: "gender",
  });

  // const [edit, setEditid] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form", form);

    const { error } = await supabase
      .from<Managment>("Managment")
      .insert([form]);

    if (error) {
      toast.error(`Faild to create ${error.message}`);
    } else {
      toast.success(`Student created successfully`);
    }

     setForm({
    name: "",
    email: "",
    phone: "",
    gender: "Male",
  })
  }

  return (
    <div className={styles.forms}>
      <Toaster />
      <p>Student Managment</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Type Name"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Type Email"
            className="input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Type Phone"
            className="input"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className={styles.input}>
          <select
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="select"
          >
            <option disabled={true}>gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <button className={styles.btn}>Add Student</button>
      </form>
    </div>
  );
}
//
