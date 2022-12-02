import React, { useState, useEffect } from "react";
import Header from "./comps/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./comps/Footer";
import Spinner from "./comps/Spinner";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(`home`);
  const [page, setPage] = useState(Spinner);
  const [show, setShow] = useState(``);
  const [showData, setShowData] = useState({});
  const [showCast, setShowCast] = useState({});
  const [showDataLoaded, setShowDataLoaded] = useState(false);
  const [showCastLoaded, setShowCastLoaded] = useState({});
  const [listStyle, setListStyle] = useState(false);
  const [searchQueary, setSearchQueary] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);

  //Page props here

  useEffect(() => {
    if (currentPage === `home` && searchResultsLoaded !== false) {
      setPage(
        <HomePage
          searchQueary={searchQueary}
          searchResults={searchResults}
          loaded={searchResultsLoaded}
          setCurrentPage={setCurrentPage}
          setShow={setShow}
        ></HomePage>
      );
    } else if (
      currentPage === `details` &&
      showDataLoaded === true &&
      showCastLoaded === true
    ) {
      setPage(
        <DetailsPage
          data={showData}
          cast={showCast}
          listStyle={listStyle}
          setListStyle={setListStyle}
        ></DetailsPage>
      );
    } else if (currentPage === `about`) {
      setPage(<AboutPage></AboutPage>);
    } else {
      setPage(<Spinner></Spinner>);
    }
  }, [
    currentPage,
    searchResults,
    searchQueary,
    showCast,
    showData,
    showDataLoaded,
    showCastLoaded,
    searchResultsLoaded,
    listStyle,
  ]);

  //Populate top 50

  useEffect(() => {
    if (searchQueary !== ``) return;
    setSearchResultsLoaded(false);
    fetch(`https://api.tvmaze.com/shows`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let top50 = res.sort((a, b) => {
          return +a.rating.average < +b.rating.average;
        });
        top50.length = 48;
        setSearchResults(top50);
        setSearchResultsLoaded(true);
      });
  }, [searchQueary]);

  //Search function

  useEffect(() => {
    if (searchQueary === ``) return;

    setSearchResultsLoaded(false);

    fetch(`https://api.tvmaze.com/search/shows?q=` + searchQueary)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let output = res.map((el) => {
          return el.show;
        });
        setSearchResults(output);
        setSearchResultsLoaded(true);
      });
  }, [searchQueary]);

  //Get Show details

  useEffect(() => {
    if (show === ``) return;
    setShowDataLoaded(false);
    setShowCastLoaded(false);

    fetch(`https://api.tvmaze.com/shows/` + show)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShowData(res);
        setShowDataLoaded(true);
      });

    fetch(`https://api.tvmaze.com/shows/` + show + `/cast`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShowCast(res);
        setShowCastLoaded(true);
      });
  }, [show]);

  // Load preferences

  useEffect(() => {
    let style = window.localStorage.getItem(`listStyle`);
    if (style === `false`) {
      setListStyle(false);
    } else {
      setListStyle(true);
    }
  }, []);

  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
        setSearchQueary={setSearchQueary}
      ></Header>
      {page}
      <Footer></Footer>
    </>
  );
};

export default App;
