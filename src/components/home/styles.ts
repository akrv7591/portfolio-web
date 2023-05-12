import {createStyles} from "@mantine/core";

export const useProfileStyles = createStyles((theme) => ({
  root: {
    overflow: "visible",
    borderRadius: "20px",
    padding: "30px",
    backgroundColor: theme.colorScheme === "dark"? theme.colors.dark[8]: theme.white
  },
  image: {
    borderRadius: "20px",
    marginTop: "-80px",
    overflow: "hidden",
    width: "100%"
  },
  socialIcon: {
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: theme.colors.brand,
      color: "white",
    },
    "& button": {
      backgroundColor: "transparent !important"
    },
  },
  messageBtn: {
    borderRadius: "20px",
    height: "3rem"
  }
}))

export const useIntroduceStyles = createStyles(theme => ({
  badge: {
    borderColor: theme.colors.gray,
    border: "1px solid",
    padding: "10px 20px",
    borderRadius: "40px",
    fontSize: "14px"
  }
}))

export const useSidebarStyles = createStyles(() => ({
  links: {
    border: ".1px solid grey",
    width: "fit-content",
    borderRadius: "40px",
    padding: "20px 10px",
    minWidth: "50px",
    alignItems: "center"
  },
  link: {}
}))
