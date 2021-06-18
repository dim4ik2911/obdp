import logo from "./logo.svg";
import "./App.css";
// import Main from "./components/Main";
// import Saved from "./components/Saved";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  // const [find, letsFind] = useState(" ");

  useEffect(() => {
    const getMovies = () =>
      fetch(`http://www.omdbapi.com/?s=batman&apikey=47a9936
      `)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.Search);
          console.log(data.Search);
        })
        .catch((error) => {
          console.log(error);
        });

    getMovies();
  }, []);

  return (
    <div className="App">
      <Navigation movies={movies} />
      {/* <Main />
      <Saved /> */}
    </div>
  );
}

export default App;
