import React from "react";
import "./Popular.css";
import PopularList from "../components/PopularList";
import { Link } from "react-router-dom";

function Popular({ games }) {
  return (
    <div className="popular">
      <div className="popular-title">
        <h1>
          Most <em>popular</em> games
        </h1>
      </div>

      <div className="popular-sale__bar">
        <div className="popular-sale-bar__content">
          <h1>
            See our <em>Sale</em> page
          </h1>
          <Link to="/sale">
            <button>Show sale!</button>
          </Link>
        </div>
      </div>

      <div className="popular-box">
        <PopularList games={games} />
      </div>
    </div>
  );
}

export default Popular;
