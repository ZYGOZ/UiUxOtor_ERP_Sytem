import CustomBox from "../components/CustomBox/CustomBox";

export default function Layout({
  children,
  graphics,
  grossSalary,
  netSalary,
  table,
  totalLoan,
  totalTax,
}: Readonly<{
  children: React.ReactNode;
  graphics: React.ReactNode;
  grossSalary: React.ReactNode;
  netSalary: React.ReactNode;
  table: React.ReactNode;
  totalLoan: React.ReactNode;
  totalTax: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <CustomBox>{grossSalary}</CustomBox>
          <CustomBox>{netSalary}</CustomBox>
          <CustomBox>{totalLoan}</CustomBox>
          <CustomBox>{totalTax}</CustomBox>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <CustomBox>{table}</CustomBox>
          <CustomBox>{table}</CustomBox>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <CustomBox>{table}</CustomBox>
          <CustomBox>{graphics}</CustomBox>
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
