import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@views/common/NotFound.tsx";
import Home from "@views/public/Home.tsx";

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
