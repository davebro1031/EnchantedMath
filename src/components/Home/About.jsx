import { Box, Image, Avatar, Heading, Text } from "@chakra-ui/react"
import developer from '../../assets/developer.png'
import TabHeader from "../Problem Details/TabHeader"

export default function About() {
    return (
        <Box bg={'white'} p={3} m={4} minHeight='80vh'>
            <Heading>About Nerd Snipes</Heading>
            <Box>

                <TabHeader text='Background' width='115px' />
                <Avatar size='2xl' name='Dave Broaddus' src={developer} float='left' m={4} />
                <Text>Hi, I'm Dave.  I've spent my years since undergrad teaching math from high school calculus all the way down to 6th grade. Over the years I have accumulated a collection of problems that, while accessible to a 6th grader, still pose a challenge to the average high school student or adult.  I believe these sorts of problems possess a unique value for mathematics outreach. On countless occasions, I have watched these problems ensnare the minds of students and adults who would otherwise never want to spend time doing math.  The simplicity of these questions disguises the cleverness required for their solution, so many people find process of solving one to be a startlingly compelling mathematical experience. I hope that people from all walks of life will find themselves enjoying problems from this collection.</Text>
            </Box>
            <Box>
                <TabHeader text='Design' width='75px' />
                <Text>If you have ever been to New Mexico, you'll find the symbols and color scheme on this website familiar.  I am a recent transplant to this beautiful state and have loved experiencing its rich visual culture.  Even our name, "Enchanted Math," comes from the state nickname: <em>the land of enchantment.</em>  The chili pepper difficulty rating, incidentally, is not a reference to the state question ("red or green?"), but rather borrowed from my abstract algebra professor Dr. Lovett.  His passion for mathematics inspired me as an early undergraduate and I owe a great deal of my mathematical identity to his mentorship. </Text>
            </Box>
        </Box>
    )
}