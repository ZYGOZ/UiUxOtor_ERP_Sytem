"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const StaffPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/api/staff");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching staff: ", error);
    }
  };

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
              <li className={styles.staffName}>{staff.title}</li>
              <li className={styles.staffRole}>{staff.sentFrom}</li>
              <li className={styles.designation}>{staff.sentTo}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StaffPage;
