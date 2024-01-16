import {jobs} from "@constants/home.ts";
import {Box, Card, Divider, Flex, Group, Image, Stack, Text, Title} from "@mantine/core";
import dayjs from "dayjs";
import {IconBuilding, IconClockBolt, IconClockStop, IconUser} from "@tabler/icons-react";

interface Props {
  job: typeof jobs[0]
}

export default function JobCard({job}: Props) {

  const isJobFinished = dayjs(job.endDate).isValid()

  return (
      <Card p={"xl"} style={{overflow: "visible"}}>
        <Box>
          <Image mt={-50} src={job.logo} height={50} fit={"contain"}/>
        </Box>
        <Flex gap={"md"}  justify={"space-around"} direction={{base: "column", md: "row"}}  mt={"lg"}>
          <Stack>
            <Group gap={"xs"}>
              <IconBuilding stroke={1} />
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
              {isJobFinished? <IconClockStop stroke={1} />: <IconClockBolt color={"var(--mantine-primary-color-filled)"} stroke={1}/>}
              <Text c={"dimmed"}>Duration</Text>
            </Group>
            <Title
              order={5}>{dayjs(job.startDate).format("YYYY-MM")} - {isJobFinished ? dayjs(job.endDate).format("YYYY-MM") : job.endDate}</Title>
          </Stack>
        </Flex>
      </Card>
  )
}
