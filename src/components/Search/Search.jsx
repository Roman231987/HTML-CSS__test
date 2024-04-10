import "./Search.scss";

const Search = () => {
  return (
    <div className="input-wrapper">
      <img
        className="input-wrapper__img"
        src="../dist/icons/search.svg"
        alt="Iконка пошука"
      />
      <input className="input-wrapper__input" placeholder="Searh" />
    </div>
  );
};

export default Search;
