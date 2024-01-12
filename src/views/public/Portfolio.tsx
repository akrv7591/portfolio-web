import { Helmet } from "react-helmet";
import { Text } from "@mantine/core";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Text>Portfolio</Text>
    </div>
  );
};

export default Portfolio;
