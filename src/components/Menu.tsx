import {ActionIcon, Box, Drawer, Stack} from "@mantine/core";
import {IconMenu} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import Navigation from "@components/Navigation";

export default function Menu() {
  const [opened, {open, close}] = useDisclosure()
  return(
    <Stack>
      <Box>
        <ActionIcon variant={"default"} onClick={open} size={50} style={{borderRadius: "50%"}}>
          <IconMenu />
        </ActionIcon>
      </Box>
      <Drawer opened={opened} onClose={close} position="right" size="xs">
        <Stack>
          <Navigation />
        </Stack>
      </Drawer>
    </Stack>

  )
}

