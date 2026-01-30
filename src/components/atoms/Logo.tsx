import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height: 83 }}>
      <a href="/" aria-label="Home" style={{ display: "inline-block", textDecoration: "none" }}>
        <div
          style={{
            width: "auto",
            height: 83,
            boxSizing: "border-box",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <img src="/logo.png" alt="TOTC logo" style={{ width: "auto", height: 83, objectFit: "cover" }} />
        </div>
      </a>
    </div>
  );
};

export default Logo;
