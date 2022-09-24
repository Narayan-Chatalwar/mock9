import * as types from "./actionTypes";
import axios from "axios";

//getdata
export const getdata = (params) => (dispatch) => {
  console.log(params);
  dispatch({ type: types.GET_DATA_REQUEST });
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/?page=${1}&limit=${100}`,
      params
    )
    .then((r) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data.data })
    )
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE }));
};
