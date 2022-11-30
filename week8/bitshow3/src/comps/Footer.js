import React from "react";

const Footer = () => {
  const now = new Date();
  return (
    <footer class="container-fluid bg-dark text-white d-flex flex-row justify-content-center">
      <div class="m-2">
        `Copyright© Mihailo Jesic - `
        {now.toLocaleString("default", { month: "long" })} {now.getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
