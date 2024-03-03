"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
import CustomInput from "@/app/components/CustomInput/CustomInput";
import CustomButton from "@/app/components/DefaultButton/DefaultButton";
import TransparentButton from "@/app/components/TransparentButton/TransparentButton";
import Logo from "../../../../public/icons/Logo";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (username === "example" && password === "password") {
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
            <p style={{ margin: 0 }}>Welcome back!!</p>
            <p style={{ margin: 0, fontSize: "24px", fontWeight: "800" }}>
              Please Sign In
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
            <div style={{ marginBottom: "16px" }}>
              <CustomInput
                label="Password"
                placeholder="*******"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                height: "24px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "48px",
              }}
            >
              <label className={styles.RememberMe}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <Link
                style={{ textDecorationLine: "none" }}
                href="forgotPassword"
              >
                <span className={styles.ForgotPassword}>
                  I forgot my password
                </span>
              </Link>
            </div>
          </div>
          <div>
            <CustomButton onClick={handleSubmit}>Sign In</CustomButton>
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

export default LoginPage;
