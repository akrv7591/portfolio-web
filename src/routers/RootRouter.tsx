import {BrowserRouter, Route, Routes} from "react-router-dom";
import Public from "@components/layout/PublicLayout";
import PublicRouter from "@routers/PublicRouter";
import ProtectedRouter from "@routers/ProtectedRouter";
import NotFound from "@views/common/NotFound";

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
