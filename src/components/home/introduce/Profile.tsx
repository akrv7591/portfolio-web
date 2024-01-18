import {ActionIcon, Button, Card, Code, Group, Image, Stack, Text, Tooltip} from "@mantine/core";
import ProfileImage from '@assets/images/profile-img.jpg'
import {IconMessage} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {USER_DETAIL as user} from "@constants/home.ts";
import styles from "@styles/css/profile.module.css"
import Reveal from "@components/Reveal.tsx";

export default function Profile() {
  return (
    <Reveal type={"fadeUp"} className={styles.root}>
      <Card miw={"300px"} mih={{md: "500px", base: "calc(100vh - 150px)"}} withBorder shadow={"xl"} style={{overflow: "visible"}} bg={"var(--mantine-color-dark-6)"}>
        <Card.Section className={""}>
          <Reveal delay={1} type={"zoomInDown"}>
            <Image className={`${styles.image}`} src={ProfileImage} alt="profile-image"/>
          </Reveal>
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
              <Link key={social.id} to={social.url} target={"_blank"}>
                <Tooltip label={social.label}>
                  <ActionIcon variant={"default"} size={"xl"} style={{borderRadius: "50%"}}>
                    <social.icon width={20} height={20} stroke={1}/>
                  </ActionIcon>
                </Tooltip>
              </Link>)}
          </Group>
          <Button component={"a"}  href={"mailto:akrv7591@gmail.com"} leftSection={<IconMessage stroke={1}/>} className={styles.messageBtn} fullWidth>
            Message me
          </Button>
        </Stack>
      </Card>
    </Reveal>
  )
}
