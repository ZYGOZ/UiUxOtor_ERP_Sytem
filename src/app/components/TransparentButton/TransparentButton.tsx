// components/PrimaryButton.tsx

import React from "react";
import styles from "./TransparentButton.module.css";

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <span className={styles.span}>{children}</span>
    </div>
  );
};

export default PrimaryButton;
