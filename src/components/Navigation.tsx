import React from "react";
import {NavLink} from "react-router-dom";
import {navigationList} from "../constants/navigation";
import {createStyles, Switch, Text} from "@mantine/core";
import {useTheme} from "../providers/ThemeProvider";
import {IconMoonStars, IconSun} from "@tabler/icons-react";

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
  const {classes} = styles();
  const theme = useTheme()

  return (
    <>
      {navigationList.map((navigation) => (
        <NavLink
          key={navigation.id}
          to={navigation.to}
          style={({isActive}) => ({
            color: isActive ? "#39cdb7" : "inherit",
            fontWeight: "bold",
          })}
          className={classes.navActive}
        >
          <Text>{navigation.label}</Text>
        </NavLink>
      ))}
      <Switch
        checked={theme.theme === "dark"}
        onChange={theme.toggle}
        color="brand"
        size="lg"
        onLabel={<IconSun size="1.25rem" stroke={1.5} cursor={"pointer"}/>}
        offLabel={<IconMoonStars size="1.25rem" stroke={1.5} cursor={"pointer"}/>}
      />
    </>

  )
};

export default Navigation;
