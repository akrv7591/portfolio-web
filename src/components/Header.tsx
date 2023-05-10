import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import {
  Burger,
  Container,
  createStyles,
  Flex,
  Header as MantineHeader,
  Paper,
  rem,
  Transition,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import React from "react";
import {useLocation} from "react-router-dom";

const HEADER_HEIGHT = rem(60);
export default function Header() {
  const {classes} = useStyles();
  const [opened, {toggle, close}] = useDisclosure(false);
  const location = useLocation()

  React.useEffect(() => {
    close()
  }, [location, close])

  return (
    <MantineHeader height={HEADER_HEIGHT} mb={60} fixed className={classes.root}>
      <Container className={classes.header} fluid mx={60}>
        <Logo/>
        <Flex columnGap={"30px"} className={classes.links}>
          <Navigation/>
        </Flex>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Flex direction={"column"} rowGap={"20px"}>
                <Navigation/>
              </Flex>
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
};

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    padding: "20px",
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

}));


