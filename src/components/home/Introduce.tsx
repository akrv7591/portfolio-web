import {Badge, Box, Chip, Container, Flex, Stack, Text} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";
import {useIntroduceStyles} from "./styles";

export default function Introduce() {
  const {classes} = useIntroduceStyles()
  return (
    <Stack px={{}}>
      <Flex>
        <Flex className={classes.badge} columnGap={"5px"}>
          <IconHome size={"20px"}/> <Text>INTRODUCE</Text>
        </Flex>
      </Flex>
    </Stack>
  )
}