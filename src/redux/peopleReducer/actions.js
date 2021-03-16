import axios from "axios";
import {
  GET_PEOPLE_BY_SEARCH_REQUEST,
  GET_PEOPLE_BY_SEARCH_SUCCESS,
  GET_PEOPLE_BY_SEARCH_FAILURE,
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_FAILURE,
} from "./actionTypes";

export const getPeopleBySearchRequest = (payload) => ({
  type: GET_PEOPLE_BY_SEARCH_REQUEST,
  payload,
});

export const getPeopleBySearchSuccess = (payload) => ({
  type: GET_PEOPLE_BY_SEARCH_SUCCESS,
  payload,
});

export const getPeopleBySearchFailure = (payload) => ({
  type: GET_PEOPLE_BY_SEARCH_FAILURE,
  payload,
});

export const getPeopleBySearch = (payload) => async (dispatch) => {
  dispatch(getPeopleBySearchRequest(payload));
  const { query } = payload;
  const config = {
    method: "get",
    url: `https://swapi.dev/api/people/?search=${query}`,
  };

  try {
    const response = await axios(config);
    dispatch(getPeopleBySearchSuccess(response.data));
  } catch (err) {
    dispatch(getPeopleBySearchFailure(err));
  }
};

export const getPersonDetailsRequest = (payload) => ({
  type: GET_PERSON_DETAILS_REQUEST,
  payload,
});

export const getPersonDetailsSuccess = (payload) => ({
  type: GET_PERSON_DETAILS_SUCCESS,
  payload,
});

export const getPersonDetailsFailure = (payload) => ({
  type: GET_PERSON_DETAILS_FAILURE,
  payload,
});

export const getPersonDetails = (payload) => async (dispatch) => {
  dispatch(getPersonDetailsRequest(payload));
  const { id } = payload;

  var config = {
    method: "get",
    url: `https://swapi.dev/api/people/${id}/`,
  };

  try {
    const response = await axios(config);
    dispatch(getPersonDetailsSuccess(response.data));
  } catch (err) {
    dispatch(getPersonDetailsFailure(err));
  }
};
