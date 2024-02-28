import React from "react";
import styles from "./CustomInput.module.css";

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: any) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
