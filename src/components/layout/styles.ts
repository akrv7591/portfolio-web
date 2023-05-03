import {createStyles} from "@mantine/core";

export const usePublicLayoutStyles = createStyles((theme => ({
  root: {
    padding: 0
  },
  boxRoot: {
    position: "absolute",
    height: "500vh",
    width: "100%",
    top: 0
  },
  box: {
    height: "90%",
    width: "20vw",
    backgroundImage: theme.fn.gradient(),
  },
  blur: {
    backdropFilter: "blur(200px)"
  }
})))