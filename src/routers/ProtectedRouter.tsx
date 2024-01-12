import { Route, Routes } from "react-router-dom";
import Home from "@views/public/Home";
import NotFound from "@views/common/NotFound";

const ProtectedRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProtectedRouter;
