import {Grid, Stack} from "@mantine/core";
import FrontEnd from "@components/home/skills/FrontEnd.tsx";
import BackEnd from "@components/home/skills/BackEnd.tsx";

export default function Skills() {
  return (
    <Stack>
      <Grid>
        <FrontEnd/>
        <BackEnd/>
      </Grid>
    </Stack>
  )
}
