import {createStyles} from "@mantine/core";

export const usePublicLayoutStyles = createStyles((theme => ({
  root: {
    padding: 0
  },
  boxRoot: {
    position: "absolute",
    width: "100%",
    top: 0
  },
  box: {
    height: "100%",
    width: "100%",
    backgroundImage: theme.fn.gradient(),
    backdropFilter: "blur(200px)"

  },
})))