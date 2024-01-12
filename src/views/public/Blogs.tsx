import {Avatar, Card, Grid} from "@mantine/core";


const Blogs = () => {
  return (
    <Grid align="flex-start">
      <Grid.Col span={3} pos={"sticky"} top={0}>
        <Card>
          <Avatar>
            T
          </Avatar>
        </Card>
      </Grid.Col>
      <Grid.Col span={6} style={{minHeight: "3000px"}} bg={"red"}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
};

export default Blogs;
