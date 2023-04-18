import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./MovieRow.css";

export default ({ title, filmList }) => {
  const [axis, setAxis] = useState(0)

  function moveLeft() {
    if (axis >= 0) {
      setAxis(0)
    } else {
      setAxis(axis + 400)
    }
  }

  function moveRight() {
    console.log(axis)
    if (axis <= -(filmList.results.length * 140)) {
      setAxis(-(filmList.results.length * 140))
    } else {
      setAxis(axis - 400)
    }
  }

  return (
    <div className="list-row">
      <h2 className="list-title">{title}</h2>

      <div className="movie-list-display">
        <div className="list-left-arrow" onClick={moveLeft}>
          <IoIosArrowBack className="icon" style={{ fontSize: 50 }} />
        </div>

        <div className="movie-list-total" style={{transform: `translateX(${axis}px)`}}>
          {filmList.results.length > 0 &&
            filmList.results.map((film, key) => {
              return (
                <div className="movie" key={key}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.original_title}
                  />
                </div>
              );
            })}
        </div>

        <div className="list-right-arrow" onClick={moveRight}>
          <IoIosArrowForward className="icon" style={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
};
