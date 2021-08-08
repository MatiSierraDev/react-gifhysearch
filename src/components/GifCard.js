import React from "react";
import "./GifCard.css";

const GifCard = ({ title, alt, src, id }) => {
  return (
    <div className="gif">
      <h4>{title}</h4>
      <img src={src} alt={alt} key={id} />
    </div>
  );
};

export default GifCard;
