import React from "react";
import styles from "./Main.module.scss";

const Main = (props) => {
  const { movies } = props;

  return (
    <>
      <div>
        {movies.map((movie, index) => {
          return <p key={index}>{movie.Title}</p>;
        })}
      </div>
    </>
  );
};

export default Main;
