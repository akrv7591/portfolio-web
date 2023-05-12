import { Box, Card, CardSection, Center, Text } from "@mantine/core";
import {IoConstructOutline} from "react-icons/io5";

export default function UnderConstruction() {
    return (
        <Box sx={{
            position: "fixed",
            top: 30,
            right: 30,
            zIndex: 9999
        }}>
            <Card bg="gray" p="30px">
                <CardSection>
                    <Center>
                        <IoConstructOutline style={{fontSize: "40px", color: "red"}}/>
                    </Center>
                    <Text><b>Under Construction</b></Text>
                </CardSection>
            </Card>
        </Box>
    )
}