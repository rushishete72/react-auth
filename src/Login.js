// src/components/Login.js
import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLogin = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  if (user) return <p>You are already logged in.</p>;

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
