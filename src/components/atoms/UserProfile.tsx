import React, { useState, useEffect, useRef } from "react";
import type { UserProfileProps } from "../../types/user.type";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { useAuth } from "../../contexts/useAuth";

const UserProfile: React.FC<UserProfileProps> = ({
  user_info,
  className = "",
  withDrawer = false,
}) => {
  const imageSrc = user_info?.avatar_url || "/src/assets/icons/user-icon.jpg";
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleToggle = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!withDrawer) return;
    setOpen((s) => !s);
  };

  const displayName = user_info?.username ?? "";

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height: 83 }} ref={containerRef}>
      <div
        style={{ display: "flex", alignItems: "center", gap: 12, cursor: withDrawer ? "pointer" : "default" }}
        onClick={handleToggle}
      >
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
            {displayName}
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

      {/* Drawer for md+ */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-20 md:hidden" />

          <div
            className="
              fixed md:absolute
              z-50
              w-full md:w-80
              max-h-[85vh] md:max-h-none
              bottom-0 md:bottom-auto
              left-0 md:left-auto
              right-0
              rounded-t-lg md:rounded-md
              bg-white shadow-lg
              p-6 flex flex-col
              overflow-y-auto
              md:top-full
            "
          >
            <button
              className="
                self-end
                text-2xl font-bold
                mb-4
                sticky top-0
                bg-white
                md:hidden
              "
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={imageSrc} alt="user" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Signed in as</div>
                <div className="font-medium text-lg">{user_info?.username}</div>
              </div>
            </div>

            <div className="text-center">
              <h4>{user_info?.name}</h4>
              <h4>{user_info?.email}</h4>
            </div>

            <div className="flex flex-col gap-10 mt-10">
              <Link
                to="/profile"
                className="w-full text-left py-3 rounded-md 
                  border border-gray-100 text-gray-700 
                  hover:bg-[#49BBBD] hover:text-white 
                  transition px-3
                "
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Icon as={FaUser} boxSize={5} />
                  View Profile
                </span>
              </Link>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="w-full text-left py-3 rounded-md 
                  border border-gray-300 text-gray-700
                hover:bg-gray-100 hover:border-[#49BBBD] 
                  transition px-3
                "
              >
                Logout
              </button>
            </div>

            <div className="mt-10 mb-10 text-center text-xs text-gray-400">App version 1.0.3</div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
