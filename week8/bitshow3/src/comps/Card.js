import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <article className="col-4 p-1">
      <img
        className="w-100 card-img"
        src="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
        alt=""
      />

      <div className="rating">6.9</div>

      <a href="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, magni
        nulla! Voluptas commodi rem incidunt!
      </a>
    </article>
  );
};

export default Card;
