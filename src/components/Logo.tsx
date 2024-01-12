import {Link} from "react-router-dom";
import {Flex, Text} from "@mantine/core";
import {IconCode} from "@tabler/icons-react";


const Logo = () => {
  return (
    <Link className="text-4xl flex items-center overflow-y-hidden" to={"/"}>
      <Flex align={"center"}>
        <IconCode color={"red"} size={"30px"} />
        <Flex align={"baseline"}>
          <Text fz="2.25rem" color="brand">AKRV</Text>
          <Text fz="4rem" lh={"1rem"} color="red" className="animate__animated animate__infinite animate__flash ">
            .
          </Text>
          <Text fz="1.5rem" color="text">dev</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Logo;
