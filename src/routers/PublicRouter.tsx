import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default PublicRouter;
