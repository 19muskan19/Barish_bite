import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import SubmitRecipe from "./pages/SubmitRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "1rem" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/submit" element={<SubmitRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
