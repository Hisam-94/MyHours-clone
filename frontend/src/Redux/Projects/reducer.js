import { ADD_PROJECT_ERROR, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, REMOVE_PROJECT_ERROR, REMOVE_PROJECT_REQUEST, REMOVE_PROJECT_SUCCESS, UPDATE_PROJECT_ERROR, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from "./actionTypes";

let initState = {
  projects: [],
  isLoading: false,
  isError: false,
};

export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    // ***************GET FROM SERVER******************************

    case GET_PROJECT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_PROJECT_ERROR: {
      return {
        ...state,
        projects: [],
        isLoading: false,
        isError: true,
      };
    }

    // ***************ADD TO SERVER******************************

    case ADD_PROJECT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        isLoading: false,
        isError: false,
      };

    case ADD_PROJECT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

  
    // ***************DELETE FROM SERVER******************************

    case REMOVE_PROJECT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REMOVE_PROJECT_SUCCESS: {
      const deleteTodo = state.projects.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        projects: deleteTodo,
        isLoading: false,
        isError: false,
      };
    }

    case REMOVE_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // ***************EDIT Todo ON SERVER******************************

    case UPDATE_PROJECT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
        isError: false,
      };
    }

    case UPDATE_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
