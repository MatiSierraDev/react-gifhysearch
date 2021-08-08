import React from "react";
import "./App.css";
import GifSearch from "./components/GifSearch";
import { Link, Route } from "wouter";
import home from "./page/home/Home";
import GifFooter from "./components/GifFooter";

function App() {
  return (
    <div>
      <section>
        <Link className="app-title" to="/react-gifhysearch">
          GiphySearch
        </Link>
        <Route component={GifSearch} path="/search/:search" />
        <Route component={home} path="/react-gifhysearch" />
      </section>
      <GifFooter />
    </div>
  );
}

export default App;
