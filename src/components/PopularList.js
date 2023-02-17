import React from "react";
import PopularItem from "./PopularItem";

function PopularList({ games }) {
  return (
    <>
      {games.map((item) => (
        <PopularItem game={item} key={item.id} />
      ))}
    </>
  );
}

export default PopularList;
