import {Box, Card, Group, Stack, Text, Timeline, Title} from "@mantine/core";
import {skills} from "@constants/home.ts";
import {IconBolt} from "@tabler/icons-react";
import Reveal from "@components/Reveal.tsx";

interface Props {
  skill: typeof skills[0]
}

export default function Skill(props: Props) {
  return (
    <Box>
      <Title c={"var(--mantine-primary-color-4)"} order={2}>{props.skill.label}</Title>
      <Stack mt={"md"} style={{overflow: "hidden"}}>
        <Timeline bulletSize={"25px"}>
          {props.skill.items.map((item, i) => (
            <Reveal type={"fadeUp"} key={item.label} delay={i / 5}>
              <Timeline.Item
                title={(
                  <Text c="dimmed">{item.label}</Text>
                )}
                bullet={(
                  <IconBolt stroke={1} color={"var(--mantine-primary-color-filled)"}/>
                )}>
                <Group>
                  {item.items.map((i, index) => (
                    <Reveal type={"zoomInDown"} delay={index / 5} key={i.label}>
                      <Card p={"xs"} bg={"var(--mantine-color-dark-5)"}>
                        <Group>
                          {i.icon && <i.icon width={20} height={20}/>}
                          <Text size={"sm"}>{i.label}</Text>
                        </Group>
                      </Card>
                    </Reveal>
                  ))}
                </Group>
              </Timeline.Item>
            </Reveal>
          ))}
        </Timeline>
      </Stack>
    </Box>
  )
}
