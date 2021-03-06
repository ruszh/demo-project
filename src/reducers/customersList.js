import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from "../actions/CustomersListActions";

const initialState = {
  customersList: [],
  isLoading: false,
  error: ""
};

export function customersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS_REQUEST:
      return { ...state, isLoading: action.payload, error: "" };

    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customersList: action.payload,
        isLoading: false,
        error: ""
      };

    case GET_CUSTOMERS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    
      case SEARCH_REQUEST:
      return { ...state, isLoading: action.payload, error: "" };

    case SEARCH_SUCCESS:
      return {
        ...state,
        customersList: action.payload,
        isLoading: false,
        error: ""
      };

    case SEARCH_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
