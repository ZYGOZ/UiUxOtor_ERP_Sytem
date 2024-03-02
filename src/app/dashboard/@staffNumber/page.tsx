import React from "react";
import ArrowUp from "../../../../public/icons/ArrowUpIcon";
import StaffNumberIcon from "../../../../public/icons/StaffNumberIcon";

// Можно написать подробный апи и сохранять количество в конце каждого квартала но пока осталю заглушку
async function fetchStats() {
  try {
    const res = await fetch(
      "http://localhost:3000/dashboard/api/staff/staffNumber"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}

const StaffNumberPage = () => {
  const number = fetchStats();
  const percent = 12;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "30px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginRight: "31px",
          }}
        >
          <div
            style={{
              color: "#272525",
              fontWeight: "800",
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            {number}
          </div>
          <div>Total number of staff</div>
        </div>
        <StaffNumberIcon />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArrowUp></ArrowUp>
        <div>{percent} more than last quater</div>
      </div>
    </div>
  );
};

export default StaffNumberPage;
