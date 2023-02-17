import React from "react";
import LibraryItems from "./LibraryItems";

function LibraryList({ library }) {
  return (
    <>
      {library.map((item) => (
        <LibraryItems item={item} key={item.id} />
      ))}
    </>
  );
}

export default LibraryList;
