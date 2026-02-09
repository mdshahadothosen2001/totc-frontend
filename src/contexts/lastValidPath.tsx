import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type LastValidPathContextType = {
  lastValidPath: string;
};

const LastValidPathContext = createContext<LastValidPathContextType>({
  lastValidPath: "/",
});

const basePaths = [
  "/",
  "/home",
  "/login",
  "/register",
  "/blog",
  "/blog/details",
  "/checkout",
  "/search",
  "/course",
  "/course/details",
  "/course/lesson",
  "/course/literature",
  "/membership",
  "/meeting",
  "/profile",
];

export const LastValidPathProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const location = useLocation();
  const [lastValidPath, setLastValidPath] = useState<string>(
    sessionStorage.getItem("lastValidPath") || "/"
  );

  useEffect(() => {
    const pathname = location.pathname || "/";

    // find the most specific matching base path
    const match = basePaths.find((p) => {
      if (p === "/") return pathname === "/";
      return pathname === p || pathname.startsWith(p + "/");
    });

    if (match) {
      const newVal = pathname === match ? pathname : match;
      setLastValidPath(newVal);
      try {
        sessionStorage.setItem("lastValidPath", newVal);
      } catch (e) {
        // ignore sessionStorage errors
      }
    }
  }, [location]);

  return (
    <LastValidPathContext.Provider value={{ lastValidPath }}>
      {children}
    </LastValidPathContext.Provider>
  );
};

export const useLastValidPath = () => useContext(LastValidPathContext);

export default LastValidPathContext;
