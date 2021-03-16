import {
  GET_PEOPLE_BY_SEARCH_REQUEST,
  GET_PEOPLE_BY_SEARCH_SUCCESS,
  GET_PEOPLE_BY_SEARCH_FAILURE,
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_SUCCESS,
  GET_PERSON_DETAILS_FAILURE,
} from "./actionTypes";

const initialState = {
  people: [],
  person: {},
  error: "",
  isLoading: false,
};

const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PEOPLE_BY_SEARCH_REQUEST:
      // console.log(type, payload);
      return { ...state, isLoading: true };

    case GET_PEOPLE_BY_SEARCH_SUCCESS:
      // console.log(type, payload);
      return {
        ...state,
        people: payload.results,
        isLoading: false,
      };

    case GET_PEOPLE_BY_SEARCH_FAILURE:
      // console.log(type, payload);
      return {
        ...state,
      };

    case GET_PERSON_DETAILS_REQUEST:
      // console.log(type, payload);
      return { ...state };

    case GET_PERSON_DETAILS_SUCCESS:
      // console.log(type, payload);
      return {
        ...state,
        person: payload,
      };

    case GET_PERSON_DETAILS_FAILURE:
      // console.log(type, payload);
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default peopleReducer;
