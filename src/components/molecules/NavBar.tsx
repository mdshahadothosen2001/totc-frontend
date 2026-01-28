import React from "react";
import Logo from "../atoms/Logo";
import UserProfile from "../atoms/UserProfile";

const links = ["Home", "Courses", "Careers", "Blog", "About Us"];

const NavBar: React.FC = () => {
  return (
    <header style={{ height: 83, width: "100%" }}>
      <div
        style={{
          maxWidth: 1680,
          height: 83,
          margin: "30px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </div>

        <nav style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <ul style={{ display: "flex", gap: 36, alignItems: "center", margin: 0, padding: 0, listStyle: "none" }}>
            {links.map((l) => (
              <li key={l} style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, color: "#5B5B5B", fontWeight: 400 }}>{l}</li>
            ))}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="/login" style={{ color: "#5B5B5B", textDecoration: "none" }}>Login</a>
            <a href="/register" style={{ background: "#49BBBD", color: "white", padding: "8px 12px", borderRadius: 6, textDecoration: "none" }}>Register</a>
          </nav>
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
