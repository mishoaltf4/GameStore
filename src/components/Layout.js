import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./layout.css";

function Layout() {
  const location = useLocation();
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="header-inner__left">
              <div className="header-left__logo">
                <a href="/">
                  <img
                    src="./imgs/logo.png"
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <h1>yberGames</h1>
                </a>
              </div>
              <div className="header-left__search">
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div className="header-inner__right">
              <div className="header-right__navigation">
                <nav>
                  <ul>
                    <li className={`${location.pathname === "/" && "active"}`}>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/popular" && "active"
                      }`}
                    >
                      <Link to={"/popular"}>Popular</Link>
                    </li>
                    <li>
                      <a href="#">Game</a>
                    </li>
                    <li>
                      <a href="#">Game</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right__profile">
                <button>Profile</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main" style={{ marginTop: 100 }}>
        <div className="container">
          <Outlet />
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <p>
              Copyright (BY Bloodny ♥) © 2023 CyberGames Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
