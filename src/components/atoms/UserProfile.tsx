import React from "react";
import type { UserProfileProps } from "../../types/user.type";

const UserProfile: React.FC<UserProfileProps> = ({
  name = "Lina",
  src,
  className = "",
}) => {
  const imageSrc = src || "/src/assets/lina-round.png";

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height: 83 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 63,
            height: 63,
            borderRadius: 60,
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          <img src={imageSrc} alt="user" style={{ width: 63, height: 63, objectFit: "cover", borderRadius: 60 }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "27px",
              letterSpacing: "0.02em",
              color: "#000000",
            }}
          >
            {name}
          </span>

          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 7L6 11L10 7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
