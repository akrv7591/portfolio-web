import {jobs} from "@constants/home.ts";
import {Box, Card, Divider, Flex, Group, Image, Stack, Text, ThemeIcon, Title, Tooltip} from "@mantine/core";
import dayjs from "dayjs";
import relativeTime from  'dayjs/plugin/relativeTime'
import {IconBuilding, IconClockBolt, IconClockStop, IconExternalLink, IconUser} from "@tabler/icons-react";
import {Link} from "react-router-dom";

dayjs.extend(relativeTime)

interface Props {
  job: typeof jobs[0]
}

export default function JobCard({job}: Props) {

  const isJobFinished = dayjs(job.endDate).isValid()
  const duration = isJobFinished? dayjs(job.startDate).to(dayjs(job.endDate), true): dayjs(job.startDate).toNow(true)

  return (
    <Card p={"xl"} style={{overflow: "visible"}}>
      <Box>
        <Image mt={-50} src={job.logo} height={50} fit={"contain"}/>
      </Box>
      <Group justify={"flex-end"}>
        <Tooltip label={`Visit ${job.label}`}>
          <Link target={"_blank"} to={job.link}>
            <ThemeIcon variant={"light"}>
              <IconExternalLink stroke={1}/>
            </ThemeIcon>
          </Link>
        </Tooltip>
      </Group>
      <Flex gap={"md"} justify={"space-around"} direction={{base: "column", md: "row"}} mt={"lg"}>
        <Stack>
          <Group gap={"xs"}>
            <IconBuilding stroke={1}/>
            <Text c={"dimmed"}>Company</Text>
          </Group>
          <Title order={5}>{job.label}</Title>
        </Stack>
        <Divider orientation={"vertical"}/>
        <Stack>
          <Group gap={"xs"}>
            <IconUser stroke={1}/>
            <Text c={"dimmed"}>Role</Text>
          </Group>
          <Title order={5}>{job.role}</Title>
        </Stack>
        <Divider orientation={"vertical"}/>
        <Stack>
          <Group gap={"xs"}>
            {isJobFinished ? <IconClockStop stroke={1}/> :
              <IconClockBolt color={"var(--mantine-primary-color-filled)"} stroke={1}/>}
            <Text c={"dimmed"}>Duration</Text>
          </Group>
          <Title
            order={5}>{dayjs(job.startDate).format("YYYY-MM")} - {isJobFinished ? dayjs(job.endDate).format("YYYY-MM") : job.endDate} ({duration})</Title>
        </Stack>
      </Flex>
    </Card>
  )
}
