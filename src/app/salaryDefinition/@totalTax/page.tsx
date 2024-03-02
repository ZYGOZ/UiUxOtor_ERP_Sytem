"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../@graphics/page";
import ArrowDown from "../../../../public/icons/ArrowDown";

const SalaryDefinitionTotalTax = () => {
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
            <div>Total tax this month</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowDown></ArrowDown>
          <div>{percent} % less than last month</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDefinitionTotalTax;