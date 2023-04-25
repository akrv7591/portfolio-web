import {ActionIcon, Button, Card, Code, Flex, Grid, Image, Stack, Text, Tooltip} from "@mantine/core";
import {useProfileStyles} from "./styles";
import ProfileImage from '../../assets/images/profile-img.jpg'
import {IconMessage} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {USER_DETAIL} from "../../constants/home";

export default function Profile() {
  const user = USER_DETAIL
  const {classes} = useProfileStyles()
  return (
      <Grid.Col sm={12} md={4} pos={{lg: "sticky", sm: "relative"}} top={0}>
        <Card className={classes.root} withBorder mt={"120px"} shadow={"md"} mx={{lg: "50px", sm: "0"}}>
          <Stack>
            <Flex justify="center">
                <Image className={classes.image} height={250} width={350} src={ProfileImage} alt="profile-image" withPlaceholder/>
            </Flex>
            <Flex direction={"column"} ta={"center"} align="center">
              <Text fw="bold" size={"2.5rem"} lh={"3rem"}>{user.firstname}</Text>
              <Text size={"1.5rem"}>Full stack web developer</Text>
            </Flex>
            <Flex>
              <Text>Busan based versatile Full Stack Web Developer, 2+ years experience, skilled in  <Code>React</Code>, <Code>Node.js</Code>, <Code>Python</Code>, and <Code>Typescript</Code>.</Text>
            </Flex>
            <Flex justify={"center"} columnGap={"10px"}>
              {user.socials.map(social =>
                <Link className={classes.socialIcon} key={social.id} to={"#"}>
                  <Tooltip label={social.label}>
                    <ActionIcon>
                      <social.icon width={30} height={30}/>
                    </ActionIcon>
                  </Tooltip>
                </Link>)}
            </Flex>
            <Flex>
              <Button className={classes.messageBtn} fullWidth><IconMessage/> Message me</Button>
            </Flex>
          </Stack>
        </Card>
      </Grid.Col>
  )
}