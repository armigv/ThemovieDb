import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Core/reducer";

export default function imagecards() {
    const [{ movies}] = useStateValue();
    const movieimage = movies.filter((movie) => movie.poster_path === poster_path);


    useEffect(() => {
        movieimage.map((movie) =>

            axios
                .get(`https://image.tmdb.org/t/p/w500/${movie.poste_path}`)
                .then((response) => {
                    console.log(response.data.results)
                    //   dispatch({
                    //     type: actionType.MOVIES,
                    //     movies: response.data.results,
                    //   });

                }));

    }, []);

    return (
        <div>
        imagecards

        </div>
    )
}
