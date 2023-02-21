import React from "react";
import LibraryList from "../components/LibraryList";
import PopularList from "../components/PopularList";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ games, library }) {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner__cont">
          <p>Welcome To CyberGames</p>
          <h1>
            <em>Buy</em> our popular games here
          </h1>
          <Link to={"/popular"}>
            <button>Buy now!</button>
          </Link>
        </div>
      </div>

      <div className="home-popular">
        <h1>
          Most <em>popular</em> games
        </h1>

        <div className="home-popular__products">
          <PopularList games={games} />
        </div>
        <Link to={"/popular"}>
          <button className="btn">Show more</button>
        </Link>
      </div>

      <div className="home-library">
        <h1>
          Your Gaming <em>Library</em>
        </h1>

        <div className="home-library__products">
          <LibraryList library={library} />
          <button className="btn">Open library</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
