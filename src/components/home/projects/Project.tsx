import {professionalProjects} from "@constants/home.ts";
import {Box, Card, Divider, Group, Image, Stack, Text} from "@mantine/core";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import classes from "./style.module.css"
import {Carousel} from "@mantine/carousel";
import {Link} from "react-router-dom";
import {IconExternalLink} from "@tabler/icons-react";

dayjs.extend(relativeTime)

interface Props {
  project: typeof professionalProjects[0]
}

export default function Project({project}: Props) {

  return (
    <Stack className={classes.container}>
      <Stack pos={"relative"} p={0}
             style={{border: "1px solid var(--mantine-color-dark-4)", borderRadius: "10px", overflow: "hidden"}}>
        <Carousel loop>
          {project.images.map(image => (
            <Carousel.Slide key={image}>
              <Image alt={"subway-navigation-screenshots"} src={image}/>
            </Carousel.Slide>
          ))}
        </Carousel>
        <div className={classes.content}>
          {project.skills.map(skill => (
            <Box className={classes.skill} key={skill.label} py={"5px"}>
              <Group gap={"xs"} style={{flexWrap: "nowrap"}}>
                {skill.icon && <skill.icon height={20}/>}
                <Text className={classes.skillLabel}>{skill.label}</Text>
              </Group>
            </Box>
          ))}
        </div>
        <div className={classes.links}>
          <Group>
            {project.links.map(link => (
              <Link target={"_blank"} to={link.link}>
                <Card bg={"var(--mantine-color-white)"} radius={"xl"} py={{base: 1, md: 10}}>
                  <Group gap={"xs"}>
                    <IconExternalLink stroke={1} color={"#000"}/>
                    <Text c={"dark"} style={{textWrap: "nowrap"}}>{link.label}</Text>
                  </Group>
                </Card>
              </Link>
            ))}
          </Group>
        </div>
      </Stack>

      <Group>
        <Text className={classes.title} mt={"lg"}>
          {project.label}
        </Text>
      </Group>
      <Divider/>
    </Stack>
  )
}
