import GifCard from "./GifCard";
import "../index.css";
const GifItem = ({ keyword, gif }) => {
  if (keyword === null || gif === null) return null;

  return (
    <>
      {gif.data.map((el) => (
        <GifCard
          title={el.title}
          src={el.images.downsized_medium.url}
          alt={keyword.name}
          id={el.id}
          key={el.id}
          lazy="loading"
        />
      ))}
    </>
  );
};

export default GifItem;
