import React from "react";
import "./Footer.css";

const Footer = () => {
  const now = new Date();
  return (
    <footer className="container-fluid bg-dark text-white d-flex flex-row justify-content-center">
      <div className="m-2">
        Copyright©{" "}
        {now.toLocaleString("default", {
          month: "long",
        })}{" "}
        {now.getFullYear()} - Mihailo Jesic
      </div>
    </footer>
  );
};

export default Footer;
