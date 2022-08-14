import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  //https://restcountries.com/v3.1/all

  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleChange = (e) => {
    e.preventDefault();
    setRangeValue(e.target.value);
  };

  const handleChangeContinent = (e) => {
    setSelectedRadio(e.target.id);
  };

  const handleClick = () => {
    setSelectedRadio("");
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => handleChange(e)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              //value={selectedRadio}
              onChange={(e) => handleChangeContinent(e)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={(e)=> handleClick(e)}>Annuler la recherche</button>
      )}      
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a,b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card country={country} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
