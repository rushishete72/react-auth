// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "10px", background: "#eee" }}>
      <Link to="/">Dashboard</Link>
      {!user && <Link to="/login">Login</Link>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
