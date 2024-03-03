"use client";
import CustomBox from "../components/CustomBox/CustomBox";

export default function Layout({
  children,
  staffNumber,
  staffApplicationCard,
  totalApplications,
  memo,
  staffList,
  paymentVouchers,
  totalProjects,
  totalDepartments,
}: Readonly<{
  children: React.ReactNode;
  staffNumber: React.ReactNode;
  staffApplicationCard: React.ReactNode;
  totalApplications: React.ReactNode;
  memo: React.ReactNode;
  staffList: React.ReactNode;
  paymentVouchers: React.ReactNode;
  totalProjects: React.ReactNode;
  totalDepartments: React.ReactNode;
}>) {
  return (
    <div style={{ paddingLeft: 6 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "100%" }}>
            <CustomBox>{staffNumber}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{totalApplications}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{totalProjects}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{totalDepartments}</CustomBox>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <CustomBox>{memo}</CustomBox>
          </div>
          <div style={{ width: "50%" }}>
            <CustomBox>{staffList}</CustomBox>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <CustomBox>{paymentVouchers}</CustomBox>
          </div>
          <div style={{ width: "50%" }}>
            <CustomBox>{staffApplicationCard}</CustomBox>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: "400",
          color: "#383838",
        }}
      >
        Copyright © 2022 Relia Energy. All Rights Reserved
      </div>
    </div>
  );
}
