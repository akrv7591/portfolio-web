import {Stack, Title} from "@mantine/core";
import {careers} from "@constants/home.ts";
import JobCard from "@components/home/career/JobCard.tsx";

export default function Careers() {
  return careers.map(career => (
      <Stack key={career.label} gap={"50px"}>
        <Title order={2} c={"var(--mantine-primary-color-5)"}>{career.label}</Title>
        {career.items.map(job => <JobCard job={job}/>)}
      </Stack>
    )
  )
}
