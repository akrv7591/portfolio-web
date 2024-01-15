import {Grid, Stack, Title, Code, Group, Text, Timeline} from "@mantine/core";
import {skills} from "@constants/home.ts";
import {IconBolt} from "@tabler/icons-react";

export default function BackEnd() {
  return (
    <Grid.Col span={{xs: 12, lg: 12}}>
      <Title c={"var(--mantine-primary-color-4)"} order={2}>Back-end</Title>
      <Stack mt={"md"}>
        <Timeline lineWidth={"1px"} bulletSize={"25px"}>
          {skills.backend.map(item => (
            <Timeline.Item
              title={(
                <Text c="dimmed">{item.label}</Text>
              )}
              key={item.label}
              bullet={(
                <IconBolt stroke={1} color={"var(--mantine-primary-color-filled)"}/>
              )}>
              <Group>
                {item.items.map(i => (
                  <Code key={i.label} p={"xs"}>
                    <Group gap={"xs"}>
                      {i.icon && <i.icon width={20} height={20}/>}
                      <Text size={"sm"}>{i.label}</Text>
                    </Group>
                  </Code>
                ))}
              </Group>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Grid.Col>
  )
}
