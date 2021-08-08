import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import GifForm from "../../components/GifForm";
import GifItem from "../../components/GifItem";
import useGifs from "../../hooks/useGifs";
import "./Home.css";
const POPULAR_GIFS = ["Morty", "Rick", "Futurama", "Goku"];

const Home = ({ params }) => {
  const [path, setPath] = useLocation();
  const [message, setMessage] = useState(false);
  const keyword = params;

  const { loading, gif } = useGifs();

  const handleSearch = (data) => {
    if (data === null) {
      setMessage(true);
      return;
    } else {
      setMessage(false);
      setPath(`/search/${data.name}`);
    }
  };

  return (
    <>
      <p className="app-description">
        Generador de Gif's consumiendo la{" "}
        <a href="https://giphy.com/" target="_blank" rel="noreferrer">
          APi de Giphy
        </a>
        .
      </p>
      <GifForm handleSearch={handleSearch} path={path} />
      {message === true && <h3>Form Empty</h3>}
      <h3>Última búsqueda</h3>
      <article className="searchEnd">
        {keyword && !loading && <GifItem gif={gif} keyword={keyword} />}
      </article>
      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li className="link" key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </>
  );
};

export default Home;
