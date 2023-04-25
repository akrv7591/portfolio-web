import {ActionIcon, Button, Card, Flex, Image, Stack, Text, Tooltip} from "@mantine/core";
import {useProfileStyles} from "./styles";
import ProfileImage from '../../assets/images/profile-img.jpg'
import {IconMessage} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {USER_DETAIL} from "../../constants/home";

export default function Profile() {
  const user = USER_DETAIL
  const {classes} = useProfileStyles()
  return (
    <Card className={classes.root} withBorder mt={"60px"} shadow={"md"}>
      <Stack>
        <Flex justify="space-between" align="center">
          <Text fw="bold" size={"1.5rem"} lh={"2rem"}>Abubakr <br/> Khabebulloev</Text>
          <Text>Full stack <br/> web developer</Text>
        </Flex>
        <Flex justify="center">
          <Image radius={"md"} variant={"circle"} src={ProfileImage} alt="profile-image" withPlaceholder/>
        </Flex>
        <Flex>
          <Text>Busan based web developer</Text>
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

  )
}