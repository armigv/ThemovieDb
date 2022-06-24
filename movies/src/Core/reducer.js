import { Zoom } from "@material-ui/core";

export const initialState = {
  movies: [],
  movie: [],
  // moviessort: [],
  filterMovies: [],
  ratingFilter:5
};

export const actionType = {
  MOVIES: "MOVIESAPI",
  MOVIE: "MOVIE",
  // MOVIESSORT: "MOVIESSORT",
  FILTER: "FILTER",
  RATING_FILTER:"RATING_FILTER",

};

const filterRatingFn = (state, range) => {
  return state.ratingFilter.filter((movies)=> +(movies.vote_average) >= range.min && +(movies.vote_average) <= range.max);
  
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "MOVIESAPI":
      return {
        ...state,
        movies: action.movies,
        // moviesort:action.movies,
        filterMovies: action.movies,
        ratingFilter:action.movies
      };

      case "MOVIE":
        return {
          ...state,
          movie: action.movie,
        };

//       case "MOVIESSORT":
// const SortMovies = state.moviesort.vote_average.sort((moviessort,moviesort) => {
//   return moviessort.vote_average - moviesort.vote_average
// }  )

        // return {

        //   ...state,
        //   moviessort: SortMovies ,


        // };


    case "FILTER":
      const filterMovies = state.movies.filter(movie => movie.title.toLowerCase().startsWith(action.value.toLowerCase().trim()))
      return {
        ...state,
        filterMovies: filterMovies
      }

      case "RATING_FILTER":
      
      const maxValue = +(action.value.index) * 2.0;
      const filterRating =[...filterRatingFn(state, {min: maxValue-2, max :maxValue}, action.value.index)];
      /*
        function name() {
          
          const maxValue = action.value.ratingFilter*2
          if (action.value.ratingFilter === 1
          )  {
            filterRating.push(...filterRating(state,{min:maxValue-2,max:maxValue},action.value))
          }
          else if (action.value.ratingFilter ===  2
          )  {
            filterRating.push(...filterRating(state,{min:2,max:4},action.value))
          }
         else if (action.value.ratingFilter === 3)  {
          filterRating.push(...filterRating(state,{min:4,max:6},action.value))
          }
          
         else if (action.value.ratingFilter === 4 )  {
          filterRating.push(...filterRating(state,{min:6,max:8},action.value))
          }
          else if (action.value.ratingFilter === 5 )  {
            filterRating.push(...filterRating(state,{min:8,max:10},action.value))
          }
      
          
           else {

          }
        }
        */
        return{
             ...state,
             filterMovies:filterRating,

            }

    default:
      return state;
  }
};

export default reducer;
