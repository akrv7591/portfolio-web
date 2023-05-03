import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import PublicRouter from "./PublicRouter";
import ProtectedRouter from "./ProtectedRouter";
import NotFound from "../views/common/NotFound";
import Public from "@components/layout/PublicLayout";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/*"} element={<Public />}>
          <Route index element={<PublicRouter/>} />
          <Route path={"admin"} element={<ProtectedRouter/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
