"use client"
import React from "react";
import styles from "./styles.module.css";
import PieChart from "@/app/components/PieChart/Pieschart";
import PendingIndecatorIcon from "../../../../public/icons/PendingIndecatorIcon";
import ApprovedIndecatorIcon from "../../../../public/icons/ApprovedIndecatorIcon";
import RejectedIndecatorIcon from "../../../../public/icons/RejectedIndecatorIcon";

async function fetchStats() {
  try {
    const res = await fetch(
      "http://localhost:3000/dashboard/api/applicationStats"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}
async function StaffApplicationsCardPage() {
  const data = [80,370,50];
//  const data = await fetchStats();
  return (
    <div style={{ width: "100%" ,height:337}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ fontSize: 20, fontWeight: 800,marginBottom:72 }}>Staff Applications Card</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{width:"50%"}}>
          <p style={{ fontSize: 16, fontWeight: 800,marginBottom:24 }}>{data} Total applications</p>
          <ul className={styles.vertical_list}>
          {/* {data?.map((applicationStats: any) => (
            <div key={applicationStats.id}>
              <li>{applicationStats.value}</li>
              <li>{applicationStats.name}</li>
            </div>))} */}
            <li><PendingIndecatorIcon/>Pending</li>
            <li><ApprovedIndecatorIcon/>Approved</li>
            <li><RejectedIndecatorIcon/>Rejected</li>
          </ul>
        </div>
        <div style={{width:"35%",paddingTop:10,paddingRight:20}}>
          <PieChart data={data}></PieChart>
        </div>
      </div>
    </div>
  );
}

export default StaffApplicationsCardPage;
