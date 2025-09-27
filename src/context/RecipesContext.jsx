import React, { createContext, useState, useEffect } from "react";
import recipesData from "../data/recipes.json";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (Array.isArray(recipesData)) {
      setRecipes(recipesData);
    } else {
      console.error("recipesData is not an array", recipesData);
    }
  }, []);

  // Function to add new recipe
  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]); // Add new recipe at the top
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};
