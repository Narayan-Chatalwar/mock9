import { loadData, saveData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const initstate = {
  isAuth: loadData("localdata") || false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;
  // console.log(payload)
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.USER_LOGIN_SUCCESS:
      
       saveData("localdata",true);

      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    default:
      return state;
  }
};
