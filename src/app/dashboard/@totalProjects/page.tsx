import React from "react";
import ArrowUp from "../../../../public/icons/ArrowUpIcon";
import TotalProjectsIcon from "../../../../public/icons/TotalProjectsIcon";

const TotalProjectsPage = () => {
  const number = 10;
  const percent = 2;

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
          <div>
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
            <div>Total projects</div>
          </div>
          <TotalProjectsIcon />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowUp></ArrowUp>
          <div>{percent} % more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default TotalProjectsPage;
