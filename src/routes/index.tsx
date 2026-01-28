import React, { useEffect, useState } from "react";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

type RouteKey = "/" | "/home" | "/login" | "/register";

const routeMap: Record<RouteKey, React.ReactNode> = {
  "/": <Home />,
  "/home": <Home />,
  "/login": <Login />,
  "/register": <Register />,
};

const Routes: React.FC = () => {
  const [path, setPath] = useState<RouteKey>(
    ((window.location.pathname as RouteKey) || "/") as RouteKey
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname as RouteKey);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div>
      <main style={{ minHeight: "calc(100vh - 83px)", background: "#F7FAFC" }}>
        {routeMap[path] ?? <Home />}
      </main>
    </div>
  );
};

export default Routes;
