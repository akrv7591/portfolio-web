import {List, rem, Stack, Text, ThemeIcon, Title} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";
import styles from "@styles/css/introduce.module.css"

export default function Introduce() {
  return (
    <Stack h={"calc(100vh - 100px)"}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Title className={styles.title}>
            Hi. I am <span className={styles.highlight}>Full stack</span> web
            developer
          </Title>
          <Text c="dimmed" mt="md">
            Welcome to my web universe! I'm passionate about turning ideas into seamless online experiences. Dive into
            my projects and let's create something extraordinary together!
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
              <b>Frontend</b> - Experienced and proficient React and TypeScript developer adept at building robust and
              scalable web applications
            </List.Item>
            <List.Item>
              <b>Backend</b> – Highly proficient developer skilled in both Node.js and Django, with a strong track
              record of delivering scalable and secure web applications.
            </List.Item>
            <List.Item>
              <b>Database</b> – Experienced and proficient developer with 3 years of MySQL development expertise,
              delivering robust and efficient database solutions.
            </List.Item>
          </List>
        </div>
      </div>

    </Stack>
  )
}