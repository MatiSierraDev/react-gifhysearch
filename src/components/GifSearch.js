// import GifForm from "./GifForm";
import GifItem from "./GifItem";
import GifLoader from "./GifLoader";
import useGifs from "../hooks/useGifs";
import "./GifSearch.css";
import GifForm from "./GifForm";
import { useLocation } from "wouter";
import { useState } from "react";

const GifSearch = ({ params }) => {
  const keyword = params.search;
  const [path, setPath] = useLocation();
  const [message, setMessage] = useState(false);
  const { loading, gif } = useGifs({ keyword });

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
      <GifForm handleSearch={handleSearch} />
      <div className="searchEnd">
        {loading && <GifLoader />}
        {keyword && !loading && <GifItem gif={gif} keyword={keyword} />}
      </div>
    </>
  );
};

export default GifSearch;
