import {Container, Grid} from "@mantine/core";
import {content} from "../../constants/home";
import Profile from "../../components/home/Profile";
import ScrollSpy from "react-ui-scrollspy";
import Sidebar from "@components/home/Sidebar";

const Home = () => {

  return (
    <Container size={"1500px"}>
      <Grid px={{sm: "0px", lg: "30px"}} gutter={2}>
        <Grid.Col sm={12} md={4}>
          <Profile/>
        </Grid.Col>
        <Grid.Col sm={12} md={7}>
          <ScrollSpy scrollThrottle={10} offsetBottom={300}>
            {content.map(c => (
              <section id={c.id.toString()} key={c.id}>
                <c.component/>
              </section>
            ))}
          </ScrollSpy>
        </Grid.Col>
        <Grid.Col sm={12} md={1}>
          <Sidebar/>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
