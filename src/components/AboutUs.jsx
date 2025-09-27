import React from "react";

export default function AboutUs() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/logo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          fontFamily: "'EB Garamond', serif",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#059669", marginBottom: "1rem" }}>
          About Barish Bite
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#374151" }}>
          Welcome to <strong>Barish Bite</strong>, your cozy corner for monsoon recipes! 
          We are passionate about sharing delightful rainy-day snacks, aromatic chai, and 
          spicy comfort dishes, contributed by our vibrant community.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#374151", marginTop: "1rem" }}>
          Our mission is to bring people together through the joy of cooking and sharing. 
          Each recipe you find here tells a story — whether it's a secret family recipe, 
          a traditional dish from your hometown, or a creative twist you’ve discovered.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#374151" }}>
          Here at <strong>Barish Bite</strong>, we encourage everyone to explore, experiment, 
          and engage with the recipes. You can like your favorite recipes, leave thoughtful 
          comments, and even submit your own creations to inspire others.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#374151" }}>
          Our community is built on sharing, learning, and celebrating flavors. We believe 
          that cooking is not just about food, but about experiences and memories that we 
          create and share together.
        </p>

        <ul style={{ textAlign: "left", margin: "1rem 0", color: "#374151", fontSize: "1rem", lineHeight: "1.6" }}>
          <li>❤️ Like recipes that you love</li>
          <li>💬 Comment on recipes and share your tips</li>
          <li>📝 Submit your own recipes for the community</li>
        </ul>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#374151", marginTop: "1rem" }}>
          Whether you are a seasoned cook or just starting out, <strong>Barish Bite</strong> 
          is a place to discover, connect, and celebrate the magic of monsoon cooking. 
          Dive in and explore the flavors, share your experiences, and become a part of our 
          growing community.
        </p>

        <button
          onClick={() => window.location.href = "/recipes"}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#059669",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#047857"}
          onMouseLeave={e => e.target.style.backgroundColor = "#059669"}
        >
          Explore Recipes
        </button>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
