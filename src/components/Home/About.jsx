import { Box, Image, Avatar, Heading, Text } from "@chakra-ui/react"
import developer from '../../assets/developer.png'
import TabHeader from "../Problem Details/TabHeader"

export default function About() {
    return (
        <Box bg={'white'} p={3} m={4} minHeight='80vh'>
            <Heading>About Nerd Snipes</Heading>
            <Box>

                <TabHeader text='Background' width='7em' />
                <Avatar size='2xl' name='Dave Broaddus' src={developer} float='left' m={4} />
                <Text>Hi, I'm Dave.  I've spent my years since undergrad teaching math from high school calculus all the way down to 6th grade. Over the years I have accumulated a collection of problems that, while accessible to a 6th grader, still pose a challenge to the average high school student or adult.  I believe these sorts of problems posses a unique value for mathematics outreach. On countless occasions, I have watched these problems ensnare the minds of students and adults who would otherwise never want to spend time doing math.  The simplicity of these questions disguises the cleverness required for their solution, so many people find process of solving one to be a startlingly compelling mathematical experience. The name of this website comes from the xkcd webcomic "Nerd Sniping," shown below.  I hope that more than just people who self-identify as "nerds" will find themselves enjoying problems from this collection.</Text>
                <Image src="https://imgs.xkcd.com/comics/nerd_sniping.png" margin='auto'/>
            </Box>
            <Box>
                <TabHeader text='Design' width='7em' />
                <Text>If you have ever been to New Mexico, you'll find the symbols and color scheme on this website familiar.  I am a recent transplant to this beautiful State and have loved experiencing its rich visual culture.  I hope my attempt to create a sniper's crosshairs out of the Zia symbol is reasonably recognizable. The chili pepper difficulty rating, incidentally, is not a reference to the State question ("red or green?"), but rather borrowed from my abstract algebra professor Dr. Lovett.  His passion for mathematics inspired me as an early undergraduate and I owe a great deal of my mathematical identity to his mentorship. </Text>
            </Box>
        </Box>
    )
}