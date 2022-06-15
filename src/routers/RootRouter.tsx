import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";

import "animate.css";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
