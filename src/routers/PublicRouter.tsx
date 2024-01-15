import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@views/common/NotFound.tsx";

const Home = React.lazy( () => import("@views/public/Home"))

const PublicRouter = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </React.Suspense>
  );
};

export default PublicRouter;
