import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";

import "animate.css";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "../views/NotFound";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRouter />} />
        <Route path="admin/*" element={<ProtectedRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
