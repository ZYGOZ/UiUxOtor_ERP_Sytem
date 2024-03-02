"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import CustomScrollView from "@/app/components/CustomScrollView/CustomScrollView";

const MemoPage = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetchMemo();
  }, []);

  const fetchMemo = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/api/memo");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ fontSize: 20, fontWeight: 800 }}>Memo</p>
      </div>
      <div>
        <ul className={styles.horizontal_list}>
          <li className={styles.serialNumber}>S/N</li>
          <li className={styles.memoTitle}>Meme Title</li>
          <li className={styles.sentFrom}>Sent From</li>
          <li className={styles.sentTo}>Sent To</li>
          <li className={styles.status}>Status</li>
        </ul>
      </div>
      <div>
        <ul className={styles.vertical_list}>
          {data?.map((memo: any) => (
            <div key={memo.id}>
              <li className={styles.serialNumber}>{memo.serialNumber}</li>
              <li className={styles.memoTitle}>{memo.title}</li>
              <li className={styles.sentFrom}>{memo.sentFrom}</li>
              <li className={styles.sentTo}>{memo.sentTo}</li>
              <li className={styles.status}>{memo.status}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemoPage;
