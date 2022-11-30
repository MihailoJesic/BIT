import React, { useState, useEffect } from "react";
import Header from "./comps/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./comps/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState(`home`);
  const [page, setPage] = useState(HomePage);
  const [listStyle, setListStyle] = useState("grid");

  useEffect(() => {
    if (page === `home`) {
      setPage(HomePage);
    } else if (page === `details`) {
      setPage(DetailsPage);
    } else if (page === `about`) {
      setPage(AboutPage);
    }
  });

  return (
    <>
      <Header></Header>
      {page}
      <Footer></Footer>
    </>
  );
};

export default App;
