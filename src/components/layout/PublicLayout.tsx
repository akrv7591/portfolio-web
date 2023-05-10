import {Box, Center, Container} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {usePublicLayoutStyles} from "@/components/layout/styles";
import ScrollSpyBar from "@/components/scroll-spy/ScrollSpyBar";

export default function PublicLayout() {
  const {classes} = usePublicLayoutStyles()
  return (
    <Container fluid className={classes.root}>
      <Center className={classes.boxRoot}>
        <Box className={classes.box}/>
      </Center>
      <Container fluid>
        <Outlet/>
      </Container>
      <ScrollSpyBar/>
    </Container>
  )
}