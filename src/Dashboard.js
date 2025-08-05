// src/components/Dashboard.js
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please login first.</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
