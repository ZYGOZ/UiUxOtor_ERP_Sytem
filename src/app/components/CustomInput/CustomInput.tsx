import React, { useState } from "react";
import styles from "./CustomInput.module.css";
import HideIcon from "../../../../public/icons/HideIcon";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const isPasswordType = type === "password";

  const inputType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {isPasswordType && (
          <button className={styles.toggleButton} onClick={toggleShowPassword}>
            {showPassword ? "Hide" : <HideIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
