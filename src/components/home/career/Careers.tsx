import {Stack, Title} from "@mantine/core";
import {careers} from "@constants/home.ts";
import JobCard from "@components/home/career/JobCard.tsx";

export default function Careers() {
  return (
    <Stack>
      {careers.map(career => (
        <Stack key={career.label} gap={"50px"}>
          <Title c={"var(--mantine-primary-color-5)"}>{career.label}</Title>
          {career.items.map(job => <JobCard job={job}/>)}

        </Stack>
      ))}
    </Stack>
  )
}
