import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Navigation() {
  const [page, setPage] = useState("");

  const navigateToHome = () => setPage("home");
  const navigateToAbout = () => setPage("about");
  const navigateToContact = () => setPage("Contact");

  return (
    <div>
      <button onClick={navigateToHome}>Home</button> <span></span>
      <button onClick={navigateToAbout}>About</button> <span></span>
      <button onClick={navigateToContact}>Contact</button> <span></span>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "Contact" && <Contact />}
    </div>
  );
}
