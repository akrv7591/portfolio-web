import {NavLink} from "react-router-dom";
import {navigationList} from "@constants/navigation";
import {Switch, Text, useMantineColorScheme} from "@mantine/core";
import {IconMoonStars, IconSun} from "@tabler/icons-react";
import styles from "@styles/css/navigation.module.css"

const Navigation = () => {
  const theme = useMantineColorScheme()

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
          className={styles.navActive}
        >
          <Text>{navigation.label}</Text>
        </NavLink>
      ))}
      <Switch
        checked={theme.colorScheme === "dark"}
        onChange={() => theme.setColorScheme(theme.colorScheme === "dark"? "light": "dark")}
        color="brand"
        size="lg"
        onLabel={<IconSun size="1.25rem" stroke={1.5} cursor={"pointer"}/>}
        offLabel={<IconMoonStars size="1.25rem" stroke={1.5} cursor={"pointer"}/>}
      />
    </>

  )
};

export default Navigation;
