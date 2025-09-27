import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "#9b9797ff", marginTop: "2rem" }}>
      &copy; {new Date().getFullYear()} Barish Bite. All rights reserved.
    </footer>
  );
}
