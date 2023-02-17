import React from "react";
import "./LibraryItem.css";

function LibraryItems(props) {
  return (
    <div className="library-product">
      <div
        className="library-product__img"
        style={{ backgroundImage: `url(${props.item.img})` }}
      ></div>
      <div className="library-product__title">
        <p>Title</p>
        <h3>{props.item.title}</h3>
      </div>
      <div className="library-product__genre">
        <p>Genre</p>
        <h3>{props.item.genre}</h3>
      </div>
      <div className="library-product__price">
        <p>Price</p>
        <h3>{props.item.price} $</h3>
      </div>
      <button>Buy now!</button>
    </div>
  );
}

export default LibraryItems;
