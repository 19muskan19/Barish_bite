import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { AuthContext } from "../context/AuthContext";

export default function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useContext(RecipesContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const recipe = recipes.find(r => r.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!recipe)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Recipe not found
      </p>
    );

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login or register to comment!");
      return;
    }
    if (newComment.trim() === "") return;
    setComments(prev => [...prev, { username: user.name, text: newComment }]);
    setNewComment("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "4rem 1rem",
        backgroundImage: "url('/logo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#059669",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        &larr; Back
      </button>

      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "rgba(249, 233, 218, 1)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          textAlign: "left",
          animation: "fadeIn 0.6s ease-in-out",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          {recipe.title}
        </h2>

        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "1.5rem",
            animation: "fadeIn 1s ease-in-out",
          }}
        />

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ing, i) => (
            <li
              key={i}
              style={{
                marginBottom: "0.3rem",
                animation: `fadeIn 0.8s ease-in-out forwards`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {ing}
            </li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((step, i) => (
            <li
              key={i}
              style={{
                marginBottom: "0.3rem",
                animation: `fadeIn 0.8s ease-in-out forwards`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {step}
            </li>
          ))}
        </ol>

        <p style={{ marginTop: "1rem" }}>Tags: {recipe.tags.join(", ")}</p>

        {/* Comment Section */}
        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
          }}
        >
          <h3>Leave a Comment</h3>
          <form
            onSubmit={handleCommentSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment..."
              rows={3}
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                resize: "none",
              }}
            />
            <button
              type="submit"
              style={{
                alignSelf: "flex-end",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#059669",
                color: "#fff",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#047857"}
              onMouseLeave={e => e.target.style.backgroundColor = "#059669"}
            >
              Comment
            </button>
          </form>

          {/* Display Comments */}
          <div style={{ marginTop: "1rem" }}>
            {comments.length === 0 ? (
              <p style={{ color: "#555" }}>No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((c, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#fff",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  <strong>{c.username}</strong>: {c.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
