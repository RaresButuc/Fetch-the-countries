// import "./App.css";
// import React, { useState, useEffect } from "react";
// import Countries from "./components/Countries";
// import CountryData from "./components/CountryData";

// function App() {
//   const [data, setData] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [ascDesc, setAscDesc] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const info = await fetch("https://restcountries.com/v3.1/all");
//         const countries = await info.json();
//         setData(countries);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   function handleCountryDetails(country) {
//     setSelectedCountry(country);
//   }

//   const handleBack = () => {
//     setSelectedCountry(null);
//   };

//   return (
//     <div className="App">
//       {selectedCountry ? (<CountryData country={selectedCountry} onBack={handleBack} />)
//       : (      <Countries countries={data} onLearn={handleCountryDetails} />
// )

//     }
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";

function App() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [ascDesc, setAscDesc] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const info = await fetch("https://restcountries.com/v3.1/all");
        const countries = await info.json();
        setData(countries);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function handleCountryDetails(country) {
    setSelectedCountry(country);
  }

  const handleBack = () => {
    setSelectedCountry(null);
  };
  const asc = () => {
    let sorted = [...data].sort((a, b) =>
      a.name.common > b.name.common ? 1 : -1
    );
    setData(sorted);
  };
  const desc = () => {
    let desSorted = [...data].sort((a, b) =>
      b.name.common > a.name.common ? 1 : -1
    );
    setData(desSorted);
  };

  return (
    <div className="App">
      {selectedCountry ? (
        <CountryData country={selectedCountry} onBack={handleBack} />
      ) : (
        <div>
          <button onClick={asc}>Asc Sort</button>
          <button onClick={desc}>Desc Sort</button>
          <br></br>
          <Countries countries={data} onLearn={handleCountryDetails} />
        </div>
      )}
    </div>
  );
}

export default App;