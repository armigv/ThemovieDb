import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Core/reducer";


import Movies from "./components/pages/movies";
import Movie from "./components/pages/movie";


function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e6b1ac0ede33d79c791fea64e7160c8d").then((response) => {
      console.log(response.data.results)
      dispatch({
        type: actionType.MOVIES,
        movies: response.data.results,
      });
    });




  }, );

  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
         <Route path="*" element={< Movies />} />
        // <Route path="/peliculas" element={< Movies />} />
         <Route path="/pelicula/:id" element={<Movie/>} />
       
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
