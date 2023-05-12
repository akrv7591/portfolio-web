import {Code, Flex, Image, List, rem, Stack, Text, ThemeIcon, Title} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";
import {useIntroduceStyles} from "@/components/home/styles";
import {useHomeStyle} from "@/styles/home";
import {IconType} from "react-icons";

interface Props {
  title: string
  icon: IconType
}

export default function Introduce({icon: Icon, title}: Props) {
  const {classes: temp} = useIntroduceStyles()
  const {classes} = useHomeStyle()

  return (
    <Stack px={{}} mt={60}>
      <Flex>
        <Flex className={temp.badge} columnGap={"5px"}>
          <Icon size={"20px"}/> <Text>{title}</Text>
        </Flex>
      </Flex>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi. I am <span className={classes.highlight}>Full stack web</span> <br/> developer
          </Title>
            <Text color="dimmed" mt="md">Busan based versatile Full Stack Web Developer, 3+ years experience, skilled
              in <br /> <Code>React</Code>, <Code>Node.js</Code>, <Code>Python</Code>, and <Code>Typescript</Code>.</Text>

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
              <b>Frontend</b> – Experienced and proficient React and TypeScript developer adept at building robust and scalable web applications.
            </List.Item>
            <List.Item>
              <b>Backend</b> – Highly proficient developer skilled in both Node.js and Django, with a strong track record of delivering scalable and secure web applications.
            </List.Item>
            <List.Item>
              <b>Database</b> – Experienced and proficient developer with 3 years of MySQL development expertise, delivering robust and efficient database solutions.
            </List.Item>
          </List>
        </div>
        <Image src={""} className={classes.image}/>
      </div>

    </Stack>
  )
}