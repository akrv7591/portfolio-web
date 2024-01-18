import {Button, Group, List, rem, Stack, Text, ThemeIcon, Title} from "@mantine/core";
import {IconCheck, IconDownload} from "@tabler/icons-react";
import styles from "@styles/css/introduce.module.css"

export default function Introduce() {
  return (
    <Stack h={{md: "calc(100vh - 100px)", xs: "100vh"}}>
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
      <Group justify={"flex-end"} mt={{base: "20px", md: "40px"}}>
        <Button component={"a"} href={"/resume.pdf"} download rel="noopener noreferrer" fw={"normal"} leftSection={<IconDownload stroke={1}/>} radius={"xl"} size={"lg"} w={{base: "100%", md: "auto"}}>
          Download resume
        </Button>
      </Group>

    </Stack>
  )
}
