import React from "react";

const Card = ({ country, index }) => {
  return (
    <li className="card" key={index}>
      <img src={country.flags.svg} alt="" />

      <div className="infos">
        <h2>{country.name.common}</h2>
        <h4>{country.capital}</h4>
        <p>Popu: {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
