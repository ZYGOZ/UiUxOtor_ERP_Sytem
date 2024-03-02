"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../@graphics/page";
import ArrowUp from "../../../../public/icons/ArrowUpIcon";

const SalaryDefinitionGrossSalary = () => {
  const [number, setNumber] = useState<any>();
  const [percent, setPercent] = useState<any>();

  useEffect(() => {
    const myNumber = getRandomNumber(1000000, 10000000);
    const myPercent = getRandomNumber(1, 5);
    setNumber(myNumber);
    setPercent(myPercent);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "30px",
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
          <div>Gross Salary this month</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArrowUp></ArrowUp>
        <div>{percent} % more than last month</div>
      </div>
    </div>
  );
};

export default SalaryDefinitionGrossSalary;
