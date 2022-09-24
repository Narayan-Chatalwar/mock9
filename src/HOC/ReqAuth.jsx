import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace="true" />;
  }

  return children;
};

export default ReqAuth;
