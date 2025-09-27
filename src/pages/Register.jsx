import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        username: formData.username,
        password: formData.password
      })
    );
    alert("Registered successfully! Please login.");
    navigate("/login");
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
          Register
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
          />
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
