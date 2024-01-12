import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@views/common/NotFound.tsx";

const Home = React.lazy( () => import("@views/public/Home"))
const Blogs = React.lazy( () => import("@views/public/Blogs"))
const Portfolio = React.lazy( () => import("@views/public/Portfolio"))

const PublicRouter = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </React.Suspense>
  );
};

export default PublicRouter;
