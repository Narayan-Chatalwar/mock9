import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../HOC/ReqAuth";
// import Navbar from "../Components/Navbar";
// import ReqAuth from "../HOC/ReqAuth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Restaurant from "../Pages/Restaurant";



const MainRoutes = () => {
  return (
    <>
   
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<ReqAuth><Restaurant/></ReqAuth>} />
   
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
