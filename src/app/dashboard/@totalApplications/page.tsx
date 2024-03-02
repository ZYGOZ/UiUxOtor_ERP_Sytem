import React from "react";
import ArrowDownIcon from "../../../../public/icons/ArrowDownIcon";
import TotalApplicationsIcon from "../../../../public/icons/TotalApplicationsIcon";

// Можно написать подробный апи и сохранять количество в конце каждого квартала но пока осталю заглушку
async function fetchStats() {
  try {
    const res = await fetch(
      "http://localhost:3000/dashboard/api/totalApplications"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }
}
const TotalApplicationsPage = () => {
  const number = fetchStats();
  const percent = 0.2;

  return (
    <div>
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
            <div>Total application </div>
          </div>
          <TotalApplicationsIcon />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowDownIcon></ArrowDownIcon>
          <div>{percent} % less than last month</div>
        </div>
      </div>
    </div>
  );
};

export default TotalApplicationsPage;
