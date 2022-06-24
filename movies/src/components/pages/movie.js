import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../Core/reducer";
import axios from "axios";


export default function Movie(props) {
  const [{ movies }, dispatch] = useStateValue();
  const { id } = useParams();
  // const movieselecter = movie.filter((movies) => movies._id === id );

  useEffect(() => {
    movies.map((movie) =>
      axios
        .get(`https://api.themoviedb.org/3/discover/movie?/${movie.id}$api_key=e6b1ac0ede33d79c791fea64e7160c8d`)
        .then((response) =>

          dispatch({
            type: actionType.MOVIES,
            movies: response.data.results,
          }))
    );

  },);
  const APIIMAGES =  'https://image.tmdb.org/t/p/w500';



  return (
    <div>
      <div className="grid">
        {movies.map((detalle) => (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="box">
                <div className="card-header">
                  <img
                    {...APIIMAGES+detalle.poster_path}
                    className="card-img-top"
                    alt={detalle.title}
                  />
                  <div className="card-body">
                    <div key={detalle._id} className="card-content-item">
                      <h2 className="card-title">{detalle.title}</h2>
                      <p className="card-text">{detalle.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>


    </div>
  );
}
