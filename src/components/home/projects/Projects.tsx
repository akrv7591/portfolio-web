import {Stack, Title} from "@mantine/core";
import {projects} from "@constants/home.ts";
import Project from "@components/home/projects/Project.tsx";

export default function Projects() {
  return projects.map(type => (
      <Stack key={type.label} gap={"50px"}>
        <Title order={2} c={"var(--mantine-primary-color-5)"}>{type.label}</Title>
        {type.items.map(project => <Project project={project} key={project.label}/>)}
      </Stack>
    )
  )
}
