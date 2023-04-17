import { Helmet } from "react-helmet";
import { Text } from "@mantine/core";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Text>Blogs</Text>
    </div>
  );
};

export default Blogs;
