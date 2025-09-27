import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { AuthContext } from "../context/AuthContext";
import RecipeCard from "../components/RecipeCard";

export default function Landing() {
  const { recipes } = useContext(RecipesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const bgStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1528440859566-47c0c8b0f9d8?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 1,
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "800px",
  };

  const btnStyle = {
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    fontWeight: "500",
    textDecoration: "none",
    marginRight: "0.5rem",
    cursor: "pointer",
  };

  const handleAccess = (path) => {
    if (user) {
      navigate(path);
    } else {
      alert("Please login or register first to access this feature!");
      navigate("/login");
    }
  };

  return (
    <section style={{ backgroundColor: "#ffe5d9" }}>
      <div style={bgStyle}>
        <div style={overlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Cozy Monsoon Recipes
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", lineHeight: "1.5" }}>
            Rainy-day snacks, aromatic chai, and spicy comfort — shared by our community.
          </p>
          <div>
            <button
              onClick={() => handleAccess("/recipes")}
              style={{ ...btnStyle, backgroundColor: "#059669", color: "#fff" }}
            >
              Explore Recipes
            </button>
            <button
              onClick={() => handleAccess("/submit")}
              style={{
                ...btnStyle,
                border: "2px solid #059669",
                color: "#059669",
                backgroundColor: "#fff",
              }}
            >
              Submit a New Recipe
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "2rem 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Featured Recipes</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {recipes.length > 0 ? (
            recipes.slice(0, 6).map((r) => <RecipeCard key={r.id} recipe={r} />)
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </section>
  );
}
