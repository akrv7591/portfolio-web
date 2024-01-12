import { Helmet } from "react-helmet";
import { Text } from "@mantine/core";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Text>Contact</Text>
    </div>
  );
};

export default Contact;
