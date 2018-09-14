import axios from "axios";
import config from "../config";

export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_ERROR = "GET_SERVICES_ERROR";

export function getServicesList() {
    return dispatch => {
        dispatch({
          type: GET_SERVICES_REQUEST,
          payload: true
        });
    
        axios
          .get(config.URLServices)
          .then(res => {
            dispatch({
              type: GET_SERVICES_SUCCESS,
              payload: res.data
            });
          })
          .catch(err => {
            dispatch({
              type: GET_SERVICES_ERROR,
              payload: new Error(err)
            });
          });
      };
}