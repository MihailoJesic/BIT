import React from "react";
import "./Card.css";

const Card = (props) => {
  if (!props.loaded) return;
  let rate = props.item.rating.average >= 8.2 ? `well-rated` : ``;
  let num =
    props.item.rating.average == null ? `N/A` : props.item.rating.average;
  return (
    <article
      className={rate}
      onClick={() => {
        props.setCurrentPage(`details`);
        props.setShow(props.item.id);
      }}
    >
      <div className="rating-relative" key={props.item.id}>
        <img
          className=" card-img"
          src={props.item?.image?.medium}
          alt={props.item.name}
        />
        <div className="rating">{num}</div>
      </div>

      <div className="card-title">{props.item.name}</div>
    </article>
  );
};

export default Card;
