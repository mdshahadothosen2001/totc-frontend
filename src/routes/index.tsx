import React, { useEffect, useState } from "react";
import { Home, Blog, Login, Register, CheckoutPage } from "../components/pages";

const routeMap: Record<string, React.ReactNode> = {
  "/": <Home />,
  "/home": <Home />,
  "/login": <Login />,
  "/register": <Register />,
  "/blog": <Blog />,
  "/checkout": <CheckoutPage />,
};

const normalize = (p: string) => {
  if (!p) return "/";
  const n = p.replace(/\/+$/g, "");
  return n === "" ? "/" : n;
};

const Routes: React.FC = () => {
  const [path, setPath] = useState<string>(normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div>
      <main style={{ minHeight: "calc(100vh - 83px)", background: "#F7FAFC" }}>
        {routeMap[path] ?? <Home/>}
      </main>
    </div>
  );
};

export default Routes;
