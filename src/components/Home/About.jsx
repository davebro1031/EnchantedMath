import { Box, Image, Avatar, Heading, Text } from "@chakra-ui/react"
import developer from '../../assets/developer.png'
import TabHeader from "../Problem Details/TabHeader"

export default function About() {
    return (
        <Box bg={'white'} p={3} m={4} minHeight='80vh'>
            <Heading>About Nerd Snipes</Heading>
            <Box>

                <TabHeader text='The Developer' width='8.7em' />
                <Avatar size='2xl' name='Dave Broaddus' src={developer} float='left' m={4} />
                <Text>Hi, I'm Dave.  I've spent my years since undergrad teaching math from high school calculus all the way down to 6th grade. Over the years I have accumulated a collection of problems that, while accessible to a 6th grader, still pose a challenge to the average high school student or adult.  I believe that these sorts of problems offer a unique opportunity for mathematics outreach. </Text>
            </Box>
            <Box>
                <TabHeader text='The Design' width='7em' />
                <Text>Our name comes from the xkcd webcomic "Nerd Sniping," shown below.</Text>
                <Image src="https://imgs.xkcd.com/comics/nerd_sniping.png" />
            </Box>
        </Box>
    )
}