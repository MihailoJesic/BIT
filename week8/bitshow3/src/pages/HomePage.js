import React from "react";
import Card from "../comps/Card";

const HomePage = () => {
  return (
    <section class="d-flex flex-column">
      <h1 class="m-4 ml-auto mr-auto justify-content-center">Popular Shows</h1>
      <div class="show-container d-flex flex-wrap col-lg-8 col-md=12 col-sm-12 offset-lg-2">
        <Card></Card>
      </div>
    </section>
  );
};

export default HomePage;
