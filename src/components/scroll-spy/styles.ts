import {createStyles} from "@mantine/core";

export const useScrollSpyBarStyles = createStyles(() => ({
  leftBar: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    position: "fixed",
    height: "100vh",
    left: 0,
    top: 0
  },
  rightBar: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    transform: "rotate(180deg)",
    position: "fixed",
    height: "100vh",
    right: 0,
    top: 0
  }
}))