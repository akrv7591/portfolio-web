import {Route, Routes} from "react-router-dom";
import Home from "../views/public/Home";
import Blogs from "../views/public/Blogs";
import Portfolio from "../views/public/Portfolio";
import React from "react";

const PublicRouter = () => {
  return (
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
  );
};

export default PublicRouter;
