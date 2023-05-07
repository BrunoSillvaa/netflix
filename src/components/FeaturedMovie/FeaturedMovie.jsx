import React from "react";
import "./FeaturedMovie.css";

export default ({ featuredFilm }) => {
  let genres = [];
  for (let item in featuredFilm.genres) {
    genres.push(featuredFilm.genres[item].name);
  }

  function convertTime(numero) {
    const partes = numero.toString().split(".");
    const horas = parseInt(partes[0]);
    let minutos = partes.length > 1 ? parseFloat(`0.${partes[1]}`) * 60 : 0;
    minutos = Math.round(minutos * 100) / 100; // arredonda para 2 dígitos
    const minutosFormatados = minutos.toLocaleString("en-US", {
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return `${horas} horas e ${minutosFormatados} minutos`;
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

          <h1 className="title">{featuredFilm.original_title}</h1>

          <div className="infos">
            <div className="points">{featuredFilm.vote_average} Pontos</div>
            <div className="duration">{convertTime(featuredFilm.runtime / 60)}</div>
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
