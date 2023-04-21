import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "../views/common/NotFound";
import "animate.css";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/*"} element={<PublicRouter/>}/>
        <Route path="admin/*" element={<ProtectedRouter/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
