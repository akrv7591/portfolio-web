import {Box, Center, Container} from "@mantine/core";
import {Outlet} from "react-router-dom";
import styles from "@styles/css/public-layout.module.css";
import ScrollSpyBar from "@components/scroll-spy/ScrollSpyBar";

export default function PublicLayout() {
  return (
    <Container fluid className={styles.root}>
      <Center className={styles.boxRoot}>
        <Box className={styles.box}/>
      </Center>
      <Container fluid>
        <Outlet/>
      </Container>
      <ScrollSpyBar/>
    </Container>
  )
}
