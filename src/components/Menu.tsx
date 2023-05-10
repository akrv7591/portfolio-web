import {ActionIcon, Box, createStyles, Drawer, Stack} from "@mantine/core";
import {IconMenu} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import Navigation from "@/components/Navigation";
export default function Menu() {
  const {classes} = useStyles()
  const [opened, {open, close}] = useDisclosure()
  return(
    <>
      <Box>
        <ActionIcon onClick={open} size={50} className={classes.menuIcon}>
          <IconMenu />
        </ActionIcon>
      </Box>
      <Drawer opened={opened} onClose={close} position="right" size="xs">
        <Stack>
          <Navigation />
        </Stack>
      </Drawer>
    </>

  )
}

const useStyles = createStyles(() => ({
  menuIcon: {
    borderRadius: "50%",
    border: "0.1px solid grey"
  }
}))