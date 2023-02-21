import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Registration from "./pages/Registration";
import Sale from "./pages/Sale";

function App() {
  const [popular, setPopular] = React.useState([
    {
      id: 1,
      title: "Counter-strike",
      content: "hello",
      star: 4.3,
      downloads: "2.3m",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427",
    },
    {
      id: 2,
      title: "Rust",
      content: "Survival",
      star: 4.3,
      downloads: "2.3m",
      img: "https://media.altchar.com/prod/images/940_530/gm-f583de47-0ef9-4054-bbdc-9be2ec8bcf3c-head1rust.jpeg",
    },

    {
      id: 3,
      title: "Minecraft",
      content: "Survival",
      star: 4.3,
      downloads: "2.3m",
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
    },

    {
      id: 4,
      title: "Valheim",
      content: "Survival",
      star: 4.3,
      downloads: "2.3m",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg?t=1676365340",
    },

    {
      id: 5,
      title: "Euro truck simulator",
      content: "Survival",
      star: 4.3,
      downloads: "2.3m",
      img: "https://s1.gaming-cdn.com/images/products/309/orig/euro-truck-simulator-2-pc-mac-game-steam-cover.jpg?v=1662388736",
    },
  ]);

  const [library, setLibrary] = React.useState([
    {
      id: 10,
      title: "Dota 2",
      content: "Its fucking game",
      genre: "MMO/RPG",
      price: 20,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1675905833",
    },
    {
      id: 11,
      title: "Fortnite",
      content: "Its fucking game",
      genre: "MMO/RPG",
      price: 20,
      img: "https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_2560x1440_2560x1440-70d48b6b897fd8509891ebeb1c160117",
    },
    {
      id: 12,
      title: "Need for speed (MW)",
      content: "Its fucking game",
      genre: "MMO/RPG",
      price: 20,
      img: "https://i.ytimg.com/vi/K5Uo5OPdo9w/maxresdefault.jpg",
    },
    {
      id: 13,
      title: "GTA 5",
      content: "Its fucking game",
      genre: "MMO/RPG",
      price: 20,
      img: "https://expatguideturkey.com/wp-content/uploads/2023/01/gta-5-how-many-gb-here-are-the-gta-v-system-requirements-2023-780x470.webp",
    },
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home games={popular} library={library} />} />
          <Route path="popular" element={<Popular games={popular} />} />
          <Route path="sale" element={<Sale />} />
          <Route path="registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
