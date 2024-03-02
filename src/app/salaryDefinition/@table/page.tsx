"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const SalaryDefinitionPage = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetchMemo();
  }, []);

  const fetchMemo = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/salaryDefinition/api/memo"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ fontSize: 20, fontWeight: 800 }}>Memo</p>
        </div>
        <div>
          <ul className={styles.horizontal_list}>
            <li>S/N</li>
            <li>Meme Title</li>
            <li>Sent From</li>
            <li>Sent To</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <ul className={styles.vertical_list}>
            {data?.map((memo: any) => (
              <div key={memo.id}>
                <li>{memo.serialNumber}</li>
                <li>{memo.title}</li>
                <li>{memo.sentFrom}</li>
                <li>{memo.sentTo}</li>
                <li>{memo.status}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalaryDefinitionPage;
