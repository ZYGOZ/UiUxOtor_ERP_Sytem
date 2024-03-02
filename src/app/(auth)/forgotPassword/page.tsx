"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import CustomInput from "@/app/components/CustomInput/CustomInput";
import CustomButton from "@/app/components/DefaultButton/DefaultButton";
import TransparentButton from "@/app/components/TransparentButton/TransparentButton";
import Logo from "../../../../public/icons/Logo";
import Image from "next/image";

const ForgotPasswordPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (username === "example") {
      router.push("/dashboard");
    } else {
      setError("Неправильное имя пользователя или пароль");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_container2}>
          <div className={styles.logo_container}>
            <Logo />
            <TransparentButton
              onClick={() => {
                router.push("signUp");
              }}
            >
              Sign Up
            </TransparentButton>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <p style={{ margin: 0 }}>Password recovery.</p>
            <p style={{ margin: 0, fontSize: "24px", fontWeight: "800" }}>
              Forgot your password?
            </p>
            <p style={{ margin: 0 }}>
              Kindly enter the email address linked to this account and we will
              send you a code to enable you change your password
            </p>
          </div>
          <div className={styles.form}>
            <div style={{ marginBottom: "24px" }}>
              <CustomInput
                label="Email address"
                placeholder="Enter email address"
                type="text"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <CustomButton onClick={handleSubmit}>Send</CustomButton>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          alt=""
          src="/images/worker.png"
          sizes=""
          height="700"
          width="720"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
