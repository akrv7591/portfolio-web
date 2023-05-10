import {Container, Grid} from "@mantine/core";
import Sidebar from "@/components/home/Sidebar";
import Content from "@/components/home/Content";
import Profile from "@/components/home/Profile.tsx";

const Home = () => {

  return (
    <Container miw={{lg: "1500px", sm: "auto"}}>
      <Grid px={{sm: "0px", lg: "30px"}} gutter={2} align={"flex-start"}>
        <Profile/>
        <Content/>
        <Sidebar/>
      </Grid>
    </Container>
  );
};

export default Home;
