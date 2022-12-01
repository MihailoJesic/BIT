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
  const [listStyle, setListStyle] = useState("grid");
  const [searchQueary, setSearchQueary] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);

  //Page props here

  useEffect(() => {
    if (currentPage === `home` && searchResultsLoaded !== false) {
      setPage(
        <HomePage
          searchResults={searchResults}
          loaded={searchResultsLoaded}
          setCurrentPage={setCurrentPage}
          setShow={setShow}
        ></HomePage>
      );
    } else if (currentPage === `details` && showDataLoaded !== false) {
      setPage(<DetailsPage data={showData} cast={showCast}></DetailsPage>);
    } else if (currentPage === `about`) {
      setPage(<AboutPage></AboutPage>);
    } else {
      setPage(<Spinner></Spinner>);
    }
  }, [currentPage, searchResults, showDataLoaded, searchResultsLoaded]);

  // TODO: Move the loader and Dependecy arr to a dedicated search function
  useEffect(() => {
    setSearchResultsLoaded(false);
    fetch(`https://api.tvmaze.com/shows`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let top50 = res.sort((a, b) => {
          return +a.rating.average < +b.rating.average;
        });
        top50.length = 51;
        setSearchResults(top50);
        setSearchResultsLoaded(true);
      });
  }, [searchQueary, searchResultsLoaded]);

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
        console.log(res);
        setShowData(res);
        setShowDataLoaded(true);
      });

    fetch(`https://api.tvmaze.com/shows/` + show + `/cast`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setShowCast(res);
        setShowCastLoaded(true);
      });
  }, [show]);

  useEffect(() => {
    // console.log(`Results: `, searchResults);
  }, [searchResults]);

  return (
    <>
      <Header setCurrentPage={setCurrentPage}></Header>
      {page}
      <Footer></Footer>
    </>
  );
};

export default App;
