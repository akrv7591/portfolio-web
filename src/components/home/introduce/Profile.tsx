import {ActionIcon, Box, Button, Card, Code, Group, Image, Stack, Text, Tooltip} from "@mantine/core";
import ProfileImage from '@assets/images/profile-img.jpg'
import {IconMessage} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {USER_DETAIL as user} from "@constants/home.ts";
import styles from "@styles/css/profile.module.css"

export default function Profile() {
  return (
    <Box className={`${styles.root} animate__animated animate__backInLeft`}>
      <Card withBorder shadow={"xl"} style={{overflow: "visible"}} bg={"var(--mantine-color-dark-6)"}>
        <Card.Section className={""}>
          <Image className={`${styles.image} animate__animated animate__zoomInUp animate__delay-1s`} src={ProfileImage} alt="profile-image"/>
        </Card.Section>
        <Stack>
          <Text mt={"md"} ta={"center"} fw="bold" size={"2rem"} lh={"2rem"} variant="gradient"
                gradient={{from: 'brand', to: 'white'}}>{user.lastname} {user.firstname}</Text>
          <Text ta={"center"}>
            Full Stack Web Developer with {new Date().getFullYear() - 2021}+ years experience, skilled
            in <Code>React</Code>, <Code>Node.js</Code>, <Code>Python</Code>, and <Code>Typescript</Code>.
          </Text>
          <Group wrap={"nowrap"} justify={"center"} gap={"10px"}>
            {user.socials.map(social =>
              <Link key={social.id} to={social.url}>
                <Tooltip label={social.label}>
                  <ActionIcon variant={"default"} size={"xl"} style={{borderRadius: "50%"}}>
                    <social.icon width={20} height={20} stroke={1}/>
                  </ActionIcon>
                </Tooltip>
              </Link>)}
          </Group>
          <Button leftSection={<IconMessage stroke={1}/>} className={styles.messageBtn} fullWidth>
            Message me
          </Button>
        </Stack>
      </Card>
    </Box>
  )
}
