import * as types from "./actionTypes";
import axios from "axios";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  }).then((r) => (
    alert("login success"),
    console.log(r.data),
    dispatch({ type: types.USER_LOGIN_SUCCESS, payload: r.data })
  ))


    .catch((e)=>(
      alert("login failure"),
      dispatch({type:types.USER_LOGIN_FAILURE})
    ))
  
};
