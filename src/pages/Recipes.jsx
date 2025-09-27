import React, { useContext, useState } from "react";
import { RecipesContext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const { recipes } = useContext(RecipesContext);
  const [search, setSearch] = useState("");

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
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))", // use 'auto' instead of '1fr'
  gap: "1.5rem",
  justifyContent: "start", // ensures single card doesn't stretch
};


  const headingStyle = {
    textAlign: "center",
    color: "#059669",
    fontFamily: "'EB Garamond', serif",
    marginBottom: "1rem",
    fontSize: "2rem",
  };

  return (
    <div style={containerStyle}>
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
