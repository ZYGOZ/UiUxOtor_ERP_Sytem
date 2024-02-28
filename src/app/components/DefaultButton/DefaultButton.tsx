import React from "react";
import styles from "./DefaultButton.module.css";
interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomButton;
