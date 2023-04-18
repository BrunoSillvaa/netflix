import React from "react";
import "./FeaturedMovie.css";

export default ({ featuredFilm }) => {
  let firstDate = new Date(featuredFilm.first_air_date);
  let genres = [];
  for (let item in featuredFilm.genres) {
    genres.push(featuredFilm.genres[item].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredFilm.backdrop_path})`,
      }}
    >
      <div className="degrade-x">
        <div className="degrade-y">

          <h1 className="title">{featuredFilm.original_name}</h1>

          <div className="infos">
            <div className="points">{featuredFilm.vote_average} Pontos</div>
            <div className="year">{firstDate.getFullYear()}</div>
            <div className="seasons">
              {featuredFilm.number_of_seasons} Temporada
              {featuredFilm.number_of_seasons != 1 && "s"}
            </div>
          </div>

          <div className="description">{featuredFilm.overview}</div>

          <div className="buttons">
            <a className="watch-btn" href={`/watch/${featuredFilm.id}`}>▶ Assistir</a>
            <a className="list-btn" href={`/list/${featuredFilm.id}`}>+ Minha Lista</a>
          </div>
          
          <div className="genres"><strong>Gêneros:</strong> {genres.join(", ")}</div>

        </div>
      </div>
    </section>
  );
};
