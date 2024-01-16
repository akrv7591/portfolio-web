import {Stack} from "@mantine/core";
import {skills} from "@constants/home.ts";
import Skill from "@components/home/skills/Skill.tsx";

export default function Skills() {
  return (
    <Stack gap={"xl"}>
      {skills.map(skill => <Skill key={skill.label} skill={skill}/>)}
    </Stack>
  )
}
