import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleView = () => navigate(`/recipes/${recipe.id}`);
  const handleLike = () => setLiked(prev => !prev);
  const handleComment = () => navigate(`/recipes/${recipe.id}#comments`);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      className="recipe-card"
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          className="recipe-img"
        />
      </div>
      <div style={{ padding: "0.75rem 1rem" }}>
        <h4>{recipe.title}</h4>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>Tags: {recipe.tags.join(", ")}</p>
        <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem", gap: "0.5rem" }}>
          {/* View Button */}
          <button
            onClick={handleView}
            style={{
              padding: "0.4rem 0.8rem",
              borderRadius: 8,
              border: "none",
              backgroundColor: "#059669",
              color: "#fff",
              cursor: "pointer",
              fontSize: "0.85rem",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "#047857"}
            onMouseLeave={e => e.target.style.backgroundColor = "#059669"}
          >
             View
          </button>

       
          <span
            onClick={handleLike}
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "transform 0.2s, color 0.3s",
              color: liked ? "red" : "white", 
              textShadow: "0 0 2px rgba(0,0,0,0.7)" 
            }}
            onMouseEnter={e => e.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.style.transform = "scale(1)"}
          >
            {liked ? "❤️" : "🤍"} 
          </span>

      
          <span
            onClick={handleComment}
            style={{ cursor: "pointer", fontSize: "1.2rem", transition: "transform 0.2s" }}
            onMouseEnter={e => e.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.style.transform = "scale(1)"}
          >
            💬
          </span>
        </div>
      </div>

      <style>{`
        .recipe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .recipe-card:hover .recipe-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
