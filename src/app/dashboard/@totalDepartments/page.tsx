import React from "react";
import ArrowDownIcon from "../../../../public/icons/ArrowDownIcon";
import TotalApplicationsIcon from "../../../../public/icons/TotalApplicationsIcon";
import TotalDepartmentsIcon from "../../../../public/icons/TotalDepartmentsIcon";

const TotalDepartmentsPage = () => {
  const number = 10;
  const percent = 0;

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
            <div>Total departments</div>
          </div>
          <TotalDepartmentsIcon />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowDownIcon></ArrowDownIcon>
          <div>{percent} % less than last month</div>
        </div>
      </div>
    </div>
  );
};

export default TotalDepartmentsPage;
