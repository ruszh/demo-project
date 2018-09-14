import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_ERROR
} from "../actions/ServicesListActions";

const initialState = {
  servicesList: [],
  isLoading: false,
  error: ""
};

export function servicesListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES_REQUEST:
      return { ...state, isLoading: action.payload, error: "" };

    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        servicesList: action.payload,
        isLoading: false,
        error: ""
      };

    case GET_SERVICES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
