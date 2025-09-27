import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const { recipes } = useContext(RecipesContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = recipes.filter(
    r =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem 1rem",
    
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    width: "100%",
    marginBottom: "1.5rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))", 
    gap: "1.5rem",
    justifyContent: "start",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#059669",
    fontFamily: "'EB Garamond', serif",
    marginBottom: "1rem",
    fontSize: "2rem",
  };

  const backButtonStyle = {
    marginBottom: "1.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#059669",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Back button */}
      <button style={backButtonStyle} onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <h2 style={headingStyle}>All Recipes</h2>
      <input
        type="text"
        placeholder="Search by title or tag..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={inputStyle}
      />
      {filtered.length > 0 ? (
        <div style={gridStyle}>
          {filtered.map(r => <RecipeCard key={r.id} recipe={r} />)}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem", color: "#6B7280" }}>
          No recipes found
        </p>
      )}
    </div>
  );
}
