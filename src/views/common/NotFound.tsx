import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import * as NotFound404 from "../../assets/lottie/404.json";
import { Text } from "@mantine/core";

const NotFound = () => {
  return (
    <div className="h-full w-full fixed flex items-center justify-center flex-col">
      <Lottie animationData={NotFound404} height="500" />
      <Text>Page not found</Text>
      <Link to="/" className="btn mt-6">
        Continue to Home page
      </Link>
    </div>
  );
};

export default NotFound;
