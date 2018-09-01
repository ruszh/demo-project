import axios from "axios";
import config from "../config";

export const GET_CUSTOMERS_REQUEST = "GET_CUSTOMERS_REQUEST";
export const GET_CUSTOMERS_SUCCESS = "GET_CUSTOMERS_SUCCESS";
export const GET_CUSTOMERS_ERROR = "GET_CUSTOMERS_ERROR";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";

export function getCustomers() {
  return dispatch => {
    dispatch({
      type: GET_CUSTOMERS_REQUEST,
      payload: true
    });

    axios
      .get(config.URL)
      .then(res => {
        dispatch({
          type: GET_CUSTOMERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_CUSTOMERS_ERROR,
          payload: new Error(err)
        });
      });
  };
}

export function searchCustomers(query) {
  return dispatch => {    
    dispatch({
      type: SEARCH_REQUEST,
      payload: true
    });
    axios
      .get(config.URL + query)
      .then(res => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SEARCH_ERROR,
          payload: new Error(err)
        });
      });
  };
}
