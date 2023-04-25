import {createStyles} from "@mantine/core";

export const useProfileStyles = createStyles((theme) => ({
  root: {
    borderRadius: "20px",
    width: "350px",
    padding: "30px",
    position: "sticky",
    top: "60px"
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

export const useSidebarStyles = createStyles(theme => ({
  root: {
    position: "sticky",
    top: "60px"
  },
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

// export const useHomeStyles = createStyles(({}) => ({
//   body: {
//     height: "100%",
//     width: "100%",
//     overflowY: "scroll",
//   },
//
//   full__page: {
//     width: "100vw",
//     height: "100vh",
//   },
//   barContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-end",
//     zIndex: 2,
//     justifyContent: "space-between",
//     "& .inverted": {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//       alignItems: "flexStart",
//       zIndex: 2,
//     }
//   },
//   bar: {
//     height: "1vh",
//     backgroundColor: "rgba(255, 255, 255, 0.4)"
//   },
//   animatedLayers: {
//     width: "100%",
//     height: "100%",
//     position: "fixed",
//     inset: 0,
//     pointerEvents: "none",
//     zIndex: 0,
//
//     "& > *": {
//       pointerEvents: "none",
//       width: "100%",
//       height: "100%",
//       position: "fixed",
//       inset: 0,
//     }
//   }
// }))