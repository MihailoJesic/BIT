import React from "react";
import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <section className="details-container">
      <div className="details-main">
        <img
          className="details-img"
          src="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
          alt=""
        />
        <div className="details-text">
          <h2 className="details-title">Name of Show</h2>
          <div className="details-genre">
            <div>Action</div>
            <div>Drama</div>
            <div>Sci-fi</div>
          </div>
          <div className="details-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ex
            dignissimos nisi perspiciatis quaerat ea facilis culpa ratione,
            quibusdam quasi dicta aliquid dolores natus assumenda odio tempore
            placeat inventore doloribus eveniet praesentium dolore voluptatem
            possimus exercitationem! Saepe beatae maiores cum?
          </div>
        </div>
      </div>
      <div className="details-cast">
        <h3>Cast</h3>
        <div className="details-actors">
          <div className="details-actor">
            <img
              alt="x"
              className="details-portrait"
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTkzMTY5NDcwOTI2MTA0MjIz/gettyimages-183182315.jpg"
            ></img>
            <div className="details-name">Mihailo Radenkov Jesic IV</div>
          </div>{" "}
          <div className="details-actor">
            <img
              alt="x"
              className="details-portrait"
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTkzMTY5NDcwOTI2MTA0MjIz/gettyimages-183182315.jpg"
            ></img>
            <div className="details-name">Mihailo Radenkov Jesic IV</div>
          </div>{" "}
          <div className="details-actor">
            <img
              alt="x"
              className="details-portrait"
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTkzMTY5NDcwOTI2MTA0MjIz/gettyimages-183182315.jpg"
            ></img>
            <div className="details-name">Mihailo Radenkov Jesic IV</div>
          </div>{" "}
          <div className="details-actor">
            <img
              alt="x"
              className="details-portrait"
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTkzMTY5NDcwOTI2MTA0MjIz/gettyimages-183182315.jpg"
            ></img>
            <div className="details-name">Mihailo Radenkov Jesic IV</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
