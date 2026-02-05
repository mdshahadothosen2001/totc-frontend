import React, { useEffect, useState } from "react";
import type { AuthTab, TabOption } from "../../types/auth.type";
import AuthLayout from "./AuthLayout";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import { useLocation, useNavigate } from "react-router-dom";

const AuthCard: React.FC<{ defaultActive?: AuthTab }> = ({ defaultActive }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<AuthTab>(defaultActive ?? "login");

  // sync tab with current pathname (so direct URL /login or /register shows correct tab)
  useEffect(() => {
    const path = location.pathname || "";
    if (path.includes("/register")) setActiveTab("register");
    else if (path.includes("/login")) setActiveTab("login");
  }, [location.pathname]);

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
      onChange={(v) => {
        setActiveTab(v);
        // update URL when tab changes
        if (v === "register") navigate("/register");
        else navigate("/login");
      }}
    >
      {activeTab === "login" ? <LoginCard /> : <RegisterCard />}
    </AuthLayout>
  );
};

export default AuthCard;
