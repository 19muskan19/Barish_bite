import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProtectedRoute = (path) => {
    if (!user) {
      alert("Please login or register first to access this page.");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const linkButtonStyle = {
    padding: "0.5rem 1rem",
    marginRight: "0.5rem",
    backgroundColor: "#059669", 
    color: "white",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
  };

  const logoutButtonStyle = {
    ...linkButtonStyle,
    backgroundColor: "#ef4444", 
  };

  return (
    <header
      style={{
        padding: "1rem",
        background: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        color: "white",
      }}
    >
      
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.jpg"
          alt="Barish Bite"
          style={{ height: "44px", width: "44px", borderRadius: "8px" }}
        />
      </Link>

      <nav>
        <button onClick={() => navigate("/about")} style={linkButtonStyle}>
          About Us
        </button>
        <button onClick={() => handleProtectedRoute("/recipes")} style={linkButtonStyle}>
          All Recipes
        </button>

        {user ? (
          <>
            <button onClick={() => navigate("/submit")} style={linkButtonStyle}>
              Add New Recipe
            </button>
            <button onClick={handleLogout} style={logoutButtonStyle}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")} style={linkButtonStyle}>
              Login
            </button>
            <button onClick={() => navigate("/register")} style={linkButtonStyle}>
              Register
            </button>
          </>
        )}
      </nav>

   
      <style>
        {`
          @media (max-width: 600px) {
            header button {
              font-size: 0.7rem !important;
              padding: 0.3rem 0.6rem !important;
            }

            header img {
              height: 36px !important;
              width: 36px !important;
            }
          }
        `}
      </style>
    </header>
  );
}
