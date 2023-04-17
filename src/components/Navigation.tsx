import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationList } from "../constants/navigation";
import { Text, createStyles } from "@mantine/core";
import { useTheme } from "../providers/ThemeProvider";

const styles = createStyles((theme) => ({
  navActive: {
    position: "relative",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderColor: theme.colors.brand[0],
    },
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      height: "1px",
      width: "0px",
      transition: ".5s",
    },
  },
}));

const Navigation = () => {
  const { classes } = styles();
  return (
      <>
      {navigationList.map((navigation) => (
          <NavLink
              key={navigation.id}
              to={navigation.to}
              style={({ isActive }) => ({
                color: isActive ? "#39cdb7" : "inherit",
                fontWeight: "bold",
              })}
              className={classes.navActive}
          >
            <Text>{navigation.label}</Text>
          </NavLink>
      )) }</>

  )
};

export default Navigation;
