import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import * as NotFound404 from "@/assets/lottie/404.json";
import {Button, Container, Stack, Text} from "@mantine/core";

const NotFound = () => {
  return (
    <Container>
      <Stack justify={"center"} w={"100%"} h={"100vh"} align={"center"}>
        <Lottie animationData={NotFound404} style={{height: 500}} />
        <Text>Page not found</Text>
        <Link to="/" className="btn mt-6">
          <Button>Continue to Home page</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFound;
