import React from "react";
import styles from "./styles.module.css";

async function fetchPaymentVouchers() {
  try {
    const res = await fetch(
      "http://localhost:3000/dashboard/api/paymentVouchers"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}
async function PaymentVouchersPage() {
  const data = await fetchPaymentVouchers();
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ fontSize: 20, fontWeight: 800 }}>Staff</p>
      </div>
      <div>
        <ul className={styles.horizontal_list}>
          <li className={styles.serialNumber}>S/N</li>
          <li className={styles.subject}>Subject</li>
          <li className={styles.date}>Date</li>
          <li className={styles.status}>Status</li>
        </ul>
      </div>
      <div>
        <ul className={styles.vertical_list}>
          {data?.map((staff: any) => (
            <div key={staff.id}>
              <li className={styles.serialNumber}>{staff.serialNumber}</li>
              <li className={styles.subject}>{staff.subject}</li>
              <li className={styles.date}>{staff.date}</li>
              <li className={styles.status}>{staff.status}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentVouchersPage;
