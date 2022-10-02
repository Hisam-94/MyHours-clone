import { ADD_PROJECT_ERROR, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, REMOVE_PROJECT_ERROR, REMOVE_PROJECT_REQUEST, REMOVE_PROJECT_SUCCESS, UPDATE_PROJECT_ERROR, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from "./actionTypes"
import axios from 'axios';

export const getProjectRequest = () => {
    return{
        type: GET_PROJECT_REQUEST,
    }
}

export const getProjectSuccess = (payload) => {
    return{
        type: GET_PROJECT_SUCCESS,
        payload
    }
}

export const getProjectError = () => {
    return{
        type: GET_PROJECT_ERROR,
    }
}


export const getProject = (dispatch) => {
    const token = localStorage.getItem("psc_app_token");
    dispatch(getProjectRequest());
    axios.get("http://localhost:8080/project", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    .then((res) => dispatch(getProjectSuccess(res.data)))
    .catch((err) => dispatch(getProjectError(err)))
}

// **************************************

export const addProjectRequest = () => {
    return{
        type: ADD_PROJECT_REQUEST,
    }
}

export const addProjectSuccess = (payload) => {
    return{
        type: ADD_PROJECT_SUCCESS,
        payload
    }
}

export const addProjectError = () => {
    return{
        type: ADD_PROJECT_ERROR,
    }
}

export const addProject = (payload) => (dispatch) => {
    const token = localStorage.getItem("psc_app_token");
    dispatch(addProjectRequest());
    return axios
      .post(`http://localhost:8080/project/create`, payload, {
        
        // body: payload,
        headers: {
            Authorization: `Bearer ${token}`,
          }, 
      })
      .then((res) => dispatch(addProjectSuccess(res.data)))
      .then(() => dispatch(getProject))
      .catch((err) => dispatch(addProjectError(err)));
  };

// **********DELETE on server****************

export const removeProjectRequest = () => {
    return {
        type: REMOVE_PROJECT_REQUEST
    }
}

export const removeProjectSuccess = (payload) => {
    return {
        type: REMOVE_PROJECT_SUCCESS,
        payload
    }
}

export const removeProjectError = () => {
    return {
        type: REMOVE_PROJECT_ERROR
    }
}

// **********Edit on server****************

export const updateProjectRequest = () => {
    return {
        type: UPDATE_PROJECT_REQUEST
    }
}

export const updateProjectSuccess = (payload) => {
    return {
        type: UPDATE_PROJECT_SUCCESS,
        payload
    }
}

export const updateProjectError = () => {
    return {
        type: UPDATE_PROJECT_ERROR
    }
}