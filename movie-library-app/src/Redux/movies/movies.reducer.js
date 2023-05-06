import { MOVIES_LOADING,MOVIES_ERROR,MOVIES_SUCCESS } from "./movies.type";
  
  export const authInitalState = {
    loading: false,
    movie: [],
    error: false,
  };
  
  export const moviesReducer = (state = authInitalState, action) => {
    switch (action.type) {
      case MOVIES_SUCCESS: {
        return {
          ...state,
          loading:false,
          movie: action.payload,
        };
      }
      case MOVIES_ERROR: {
        return {
          ...state,
          loading:false,
          error: true,
        };
      }
      case MOVIES_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  