import React from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


// Usage example:

// import { useAuth } from "./useAuth";

// function Profile() {
//   const { user, logout } = useAuth();

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }