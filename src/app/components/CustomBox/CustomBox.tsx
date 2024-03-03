import React from "react";

interface Props {
  children: React.ReactNode;
}

const CustomBox = ({ children }: Props) => {
  return (
    <div
      style={{
        padding: 20,
        margin: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0) 0px 10px 36px 0px, rgba(0, 0, 0, 1) 0px 0px 0px 0px",
      }}
    >
      {children}
    </div>
  );
};

export default CustomBox;
