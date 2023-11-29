import { movies } from "../movies";
import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions";

const initialState = {
  movies: movies,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_MOVIE:
    //         return {
    //             ...state,
    //             movies: [...state.movies, action.payload],
    //         }
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default movieReducer;
