import React from "react";

function Countries({ countries, onLearn }) {
  return (
    <div>
      {countries
        .map((country) => (
          <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <button onClick={() => onLearn(country)}>Learn More</button>
          </div>
        ))}
    </div>
  );
}

export default Countries;