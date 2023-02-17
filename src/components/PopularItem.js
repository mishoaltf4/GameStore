import React from "react";
import "./PopularItem.css";
import { BsFillStarFill, BsDownload } from "react-icons/bs";

function PopularItem({ game }) {
  return (
    <div className="product">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${game.img})` }}
      ></div>
      <div className="product-content">
        <div className="product-content__left">
          <h4>{game.title}</h4>
          <p>{game.content}</p>
        </div>
        <div className="product-content__right">
          <div className="product-content-right__star">
            <BsFillStarFill />
            <p>{game.star}</p>
          </div>
          <div className="product-content-right__downloads">
            <BsDownload />
            <p>{game.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularItem;
