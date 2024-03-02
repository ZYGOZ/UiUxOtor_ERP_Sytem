import CustomBox from "../components/CustomBox/CustomBox";

export default function Layout({
  children,
  graphics,
  grossSalary,
  netSalary,
  memo,
  staffList,
  totalLoan,
  totalTax,
}: Readonly<{
  children: React.ReactNode;
  graphics: React.ReactNode;
  grossSalary: React.ReactNode;
  netSalary: React.ReactNode;
  memo: React.ReactNode;
  staffList: React.ReactNode;
  totalLoan: React.ReactNode;
  totalTax: React.ReactNode;
}>) {
  return (
    <div style={{ paddingLeft: 6 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "100%" }}>
            <CustomBox>{grossSalary}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{netSalary}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{totalLoan}</CustomBox>
          </div>{" "}
          <div style={{ width: "100%" }}>
            <CustomBox>{totalTax}</CustomBox>
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
            <CustomBox>{memo}</CustomBox>
          </div>
          <div style={{ width: "50%" }}>
            <CustomBox>{graphics}</CustomBox>
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
