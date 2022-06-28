import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "../views/common/NotFound";
import "animate.css";
import Home from "../views/public/Home";
import Blogs from "../views/public/Blogs";
import Portfolio from "../views/public/Portfolio";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route path="admin/*" element={<ProtectedRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
