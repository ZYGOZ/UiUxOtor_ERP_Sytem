"use client";
import CustomInput from "@/app/components/CustomInput/CustomInput";
import CustomButton from "@/app/components/DefaultButton/DefaultButton";
import TransparentButton from "@/app/components/TransparentButton/TransparentButton";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <TransparentButton
          onClick={() => {
            console.log("click");
          }}
        >
          Button
        </TransparentButton>
      </div>
    </div>
  );
}
