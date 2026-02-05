import React, { useState } from "react";
import type { AuthTab, TabOption } from "../../types/auth.type";
import AuthLayout from "./AuthLayout";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

const AuthCard: React.FC<{ defaultActive?: AuthTab }> = ({ defaultActive }) => {
  const [activeTab, setActiveTab] = useState<AuthTab>(defaultActive ?? "login");

  const tabOptions: TabOption[] = [
    { label: "Login", value: "login" },
    { label: "Register", value: "register" },
  ];

  const imageFor = (tab: AuthTab) =>
    tab === "login" ? "/src/assets/login-image.png" : "/src/assets/register-image.png";

  return (
    <AuthLayout
      imageSrc={imageFor(activeTab)}
      contentHeading="Welcome to lorem..!"
      contentSubtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      tabOptions={tabOptions}
      activeValue={activeTab}
      onChange={(v) => setActiveTab(v)}
    >
      {activeTab === "login" ? <LoginCard /> : <RegisterCard />}
    </AuthLayout>
  );
};

export default AuthCard;
