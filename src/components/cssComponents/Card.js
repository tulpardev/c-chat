import React from "react";
import "../../styles/Card.css";

function CardBox({ picture, roomName, path }) {
  return (
    <div className="card">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={picture} class="card-img" alt="picture" />
      <div class="card-img-overlay">
        <p className="card-text">{roomName}</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href={`/${path}`} className="stretched-link" />
      </div>
    </div>
  );
}

export default CardBox;
