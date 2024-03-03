import React, { useState } from "react";
import styles from "./DefaultButton.module.css";
interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CheckBox: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  const [status, setStatus] = useState(false);

  return (
    <div className={styles.button} onClick={onClick}>
      <div
        onClick={() => {
          setStatus(!status);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CheckBox;
