import React from "react";
import styles from "./styles.module.css";

async function fetchStaff() {
  try {
    const res = await fetch("http://localhost:3000/dashboard/api/staff");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}

async function StaffPage() {
  const data = await fetchStaff();

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ fontSize: 20, fontWeight: 800 }}>Staff</p>
      </div>
      <div>
        <ul className={styles.horizontal_list}>
          <li className={styles.serialNumber}>S/N</li>
          <li className={styles.staffName}>Staff Name</li>
          <li className={styles.staffRole}>Staff Role</li>
          <li className={styles.designation}>Designation</li>
        </ul>
      </div>
      <div>
        <ul className={styles.vertical_list}>
          {data?.map((staff: any) => (
            <div key={staff.id}>
              <li className={styles.serialNumber}>{staff.serialNumber}</li>
              <li className={styles.staffName}>{staff.staffName}</li>
              <li className={styles.staffRole}>{staff.staffRole}</li>
              <li className={styles.designation}>{staff.designation}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StaffPage;
