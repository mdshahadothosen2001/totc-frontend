import React from "react";
import { useNavigate } from "react-router-dom";
import { useLastValidPath } from "../../contexts/lastValidPath";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { lastValidPath } = useLastValidPath();

  const goBack = () => {
    try {
      if (lastValidPath) {
        navigate(lastValidPath);
        return;
      }
    } catch (e) {
      // fallback
    }
    navigate(-1);
  };

  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>404</h1>
      <p style={{ marginBottom: 16 }}>Page not found.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <button onClick={goBack} style={{ padding: "8px 12px", borderRadius: 6 }}>
          Back
        </button>
        <button onClick={() => navigate("/") } style={{ padding: "8px 12px", borderRadius: 6 }}>
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
