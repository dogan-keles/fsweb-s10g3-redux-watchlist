import { ADD_LIST, REMOVE_LIST } from "../actions/favActions";

const initialState = {
  watchList: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case REMOVE_LIST:
      return {
        ...state,
        watchList: state.watchList.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favReducer;
