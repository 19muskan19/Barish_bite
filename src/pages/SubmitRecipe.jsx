import React, { useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { useNavigate } from "react-router-dom";

export default function SubmitRecipe() {
  const { addRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    steps: "",
    tags: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title: form.title,
      ingredients: form.ingredients.split(","),
      steps: form.steps.split(","),
      tags: form.tags.split(","),
      image: form.image
    };
    addRecipe(newRecipe);
    navigate("/recipes");
  };

 const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",
  minHeight: "80vh",
  backgroundImage: "url('/logo.jpg')", // path in public folder
  backgroundSize: "cover",             // cover whole container
  backgroundPosition: "center",        // center the image
  backgroundRepeat: "no-repeat",       // don't repeat
};


  const formStyle = {
    background: "#ffffff",
    padding: "2rem 2.5rem",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "450px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none"
  };

  const buttonStyle = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#059669",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: "center", color: "#059669", fontFamily: "'EB Garamond', serif" }}>Submit a Recipe</h2>
        <input
          style={inputStyle}
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={form.ingredients}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="steps"
          placeholder="Steps (comma separated)"
          value={form.steps}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}
