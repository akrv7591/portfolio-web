import {Button, Container, Grid, Group, Image, List, rem, Stack, Text, ThemeIcon, Title} from "@mantine/core";

import {USER_DETAIL} from "../../constants/home";
import {useHomeStyle} from "../../styles/home";
import {IconCheck, IconSocial} from "@tabler/icons-react";
import Profile from "../../components/home/Profile";
import Introduce from "../../components/home/Introduce";

const Home = () => {
  const user = USER_DETAIL;
  const {classes} = useHomeStyle()
  return (
    <Container fluid pt={60} px={{md: "auto", sm: 0}}>
      <Grid px={{sm: "0px", lg: "30px"}} gutter={2}>
        <Grid.Col sm={12} md={3}>
          <Profile/>
        </Grid.Col>
        <Grid.Col sm={12} md={8}>
          <Introduce/>
          <Stack>
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A <span className={classes.highlight}>modern</span> React <br/> components library
                </Title>
                <Text color="dimmed" mt="md">
                  Build fully functional accessible web applications faster than ever – Mantine includes
                  more than 120 customizable components and hooks to cover you in any situation
                </Text>

                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={rem(12)} stroke={1.5}/>
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <b>TypeScript based</b> – build type safe applications, all components and hooks
                    export types
                  </List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                    any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                    keyboard
                  </List.Item>
                </List>

                <Group mt={30}>
                  <Button radius="xl" size="md" className={classes.control}>
                    Get started
                  </Button>
                  <Button variant="default" radius="xl" size="md" className={classes.control}>
                    Source code
                  </Button>
                </Group>
              </div>
              <Image src={""} className={classes.image}/>
            </div>
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A <span className={classes.highlight}>modern</span> React <br/> components library
                </Title>
                <Text color="dimmed" mt="md">
                  Build fully functional accessible web applications faster than ever – Mantine includes
                  more than 120 customizable components and hooks to cover you in any situation
                </Text>

                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={rem(12)} stroke={1.5}/>
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <b>TypeScript based</b> – build type safe applications, all components and hooks
                    export types
                  </List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                    any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                    keyboard
                  </List.Item>
                </List>

                <Group mt={30}>
                  <Button radius="xl" size="md" className={classes.control}>
                    Get started
                  </Button>
                  <Button variant="default" radius="xl" size="md" className={classes.control}>
                    Source code
                  </Button>
                </Group>
              </div>
              <Image src={""} className={classes.image}/>
            </div>
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A <span className={classes.highlight}>modern</span> React <br/> components library
                </Title>
                <Text color="dimmed" mt="md">
                  Build fully functional accessible web applications faster than ever – Mantine includes
                  more than 120 customizable components and hooks to cover you in any situation
                </Text>

                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={rem(12)} stroke={1.5}/>
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <b>TypeScript based</b> – build type safe applications, all components and hooks
                    export types
                  </List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                    any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                    keyboard
                  </List.Item>
                </List>

                <Group mt={30}>
                  <Button radius="xl" size="md" className={classes.control}>
                    Get started
                  </Button>
                  <Button variant="default" radius="xl" size="md" className={classes.control}>
                    Source code
                  </Button>
                </Group>
              </div>
              <Image src={""} className={classes.image}/>
            </div>
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A <span className={classes.highlight}>modern</span> React <br/> components library
                </Title>
                <Text color="dimmed" mt="md">
                  Build fully functional accessible web applications faster than ever – Mantine includes
                  more than 120 customizable components and hooks to cover you in any situation
                </Text>

                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={rem(12)} stroke={1.5}/>
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <b>TypeScript based</b> – build type safe applications, all components and hooks
                    export types
                  </List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                    any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                    keyboard
                  </List.Item>
                </List>

                <Group mt={30}>
                  <Button radius="xl" size="md" className={classes.control}>
                    Get started
                  </Button>
                  <Button variant="default" radius="xl" size="md" className={classes.control}>
                    Source code
                  </Button>
                </Group>
              </div>
              <Image src={""} className={classes.image}/>
            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col sm={12} md={1}>
          <IconSocial/>
        </Grid.Col>

      </Grid>
    </Container>
  );
};

export default Home;
