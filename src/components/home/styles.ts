import {createStyles} from "@mantine/core";

export const useProfileStyles = createStyles((theme) => ({
  root: {
    borderRadius: "20px",
    width: "350px",
    padding: "30px",
    position: "sticky",
    top: "120px"
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