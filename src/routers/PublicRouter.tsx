import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const PublicRouter = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicRouter;
