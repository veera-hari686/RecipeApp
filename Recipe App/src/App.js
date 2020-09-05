import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "/src/Recipe.js";

function App() {
  const app_id = "b3a76d13";
  const app_key = "e33260f6819f70b4f7c59f9b985248e6";
  const [search, setsearch] = useState("");
  const [recipies, setrecipies] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((res) => res.json())
      .then((data) => setrecipies(data.hits));
  }, [query]);
  const handleChange = (e) => {
    setsearch(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await setquery(search);
    await setsearch('');
    console.log(query); 
  };

  return (
    <div className="App">
      <form onSubmit={handleClick} className="search-form">
        <input
          className="search-bar"
          type="text"
          onChange={handleChange}
          value={search}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
      {recipies && recipies.map((recipe) => {
        return <Recipe key={Math.random()} recipe={recipe} />;
      })}
      ;
      </div>
    </div>
  );
}
export default App;
