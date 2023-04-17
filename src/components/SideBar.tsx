import { USER_DETAIL } from "../constants/home";
import Button from "./Button";
import {SimpleGrid, Text} from "@mantine/core";

const SideBar = () => {
  const user = USER_DETAIL;

  return (
      <SimpleGrid>
        <Text>Side bar</Text>
      </SimpleGrid>
  );
};

export default SideBar;
