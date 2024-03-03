import React from "react";
import styles from "./styles.module.css";

async function fetchMemo() {
  try {
    const res = await fetch("http://localhost:3000/dashboard/api/memo");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}
async function MemoPage() {
  const data = await fetchMemo();
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
}

export default MemoPage;
