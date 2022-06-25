
export const initialState = {
  movies: [],
  movie: [],
  filterMovies: [],
  ratingFilter: 5,
  episodeID: 1,

};

export const actionType = {
  MOVIES: "MOVIESAPI",
  MOVIE: "MOVIE",
  FILTER: "FILTER",
  RATING_FILTER: "RATING_FILTER",
  EPISODEID: "EPISODEID",


};

const filterRatingFn = (state, range) => {
  return state.ratingFilter.filter((movies) => +(movies.vote_average) >= range.min && +(movies.vote_average) <= range.max);

}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "MOVIESAPI":
      return {
        ...state,
        movies: action.movies,
        filterMovies: action.movies,
        ratingFilter: action.movies
      };

    case "MOVIE":
      return {
        ...state,
        movie: action.movie,
      };




    case "FILTER":
      const filterMovies = state.movies.filter(movie => movie.title.toLowerCase().startsWith(action.value.toLowerCase().trim()))
      return {
        ...state,
        filterMovies: filterMovies
      }

    case "RATING_FILTER":

      const maxValue = +(action.value.index) * 2.0;
      const filterRating = [...filterRatingFn(state, { min: maxValue - 2, max: maxValue }, action.value.index)];

      return {
        ...state,
        filterMovies: filterRating,

      }

    case "EPISODEID":
      return {
        ...state,
        episodeID: action.episodeID,
      }





    default:
      return state;
  }
};

export default reducer;
