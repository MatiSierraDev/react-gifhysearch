import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const API_KEY = "CChSuS3Vxj70rZX2VVMQimpT6P0dEFxi&q";

const useGifs = ({ keyword } = { keyword: null }) => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keywordToUse}&limit=12&offset=0&rating=g&lang=en`;

    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setGif(res);
          localStorage.setItem("lastKeyword", keyword);
        } else {
          setGif(null);

          console.log("jejeje");
        }
        setLoading(false);
      });
  }, [keyword]);

  return {
    loading,
    gif,
  };
};

export default useGifs;
