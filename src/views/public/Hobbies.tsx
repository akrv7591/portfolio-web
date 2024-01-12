import { Helmet } from "react-helmet";
import { Text } from "@mantine/core";

type Props = {};

const Hobbies = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Hobbies</title>
      </Helmet>
      <Text>Hobbies</Text>
    </div>
  );
};

export default Hobbies;
