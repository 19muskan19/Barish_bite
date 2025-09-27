import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No registered user found! Please register first.");
      return;
    }

    if (
      formData.username === storedUser.username &&
      formData.password === storedUser.password
    ) {
      login(storedUser); 
      alert(`Welcome back, ${storedUser.name}!`);
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
        backgroundImage: "url('/logo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", color: "#059669", fontFamily: "'EB Garamond', serif" }}>
          Login
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#059669",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s"
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "#047857"}
            onMouseLeave={e => e.target.style.backgroundColor = "#059669"}
          >
            Login
          </button>
        </form>

     
        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#059669", fontWeight: "bold", textDecoration: "underline" }}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
