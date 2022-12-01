import React, { useState, useEffect } from "react";
import Header from "./comps/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./comps/Footer";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(`home`);
  const [page, setPage] = useState(HomePage);
  const [listStyle, setListStyle] = useState("grid");

  useEffect(() => {
    if (currentPage === `home`) {
      setPage(HomePage);
    } else if (currentPage === `details`) {
      setPage(DetailsPage);
    } else if (currentPage === `about`) {
      setPage(AboutPage);
    }
  }, [currentPage]);

  return (
    <>
      <Header></Header>
      {page}
      <Footer></Footer>
    </>
  );
};

export default App;
