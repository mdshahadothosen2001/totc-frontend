import React, { useEffect, useState } from "react";
import NavBar from "../components/molecules/NavBar";
import Home from "./Home";

type RouteKey = "/" | "/home";

const routeMap: Record<RouteKey, React.ReactNode> = {
  "/": <Home />,
  "/home": <Home />,
};

const Routes: React.FC = () => {
  const [path, setPath] = useState<RouteKey>(
    (window.location.pathname as RouteKey) || "/"
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname as RouteKey);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div>
      <NavBar />
      <main style={{ minHeight: "calc(100vh - 83px)", background: "#F7FAFC" }}>
        {routeMap[path] ?? <Home />}
      </main>
    </div>
  );
};

export default Routes;
