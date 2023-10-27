import { Box, Image, Avatar } from "@chakra-ui/react"
import developer from '../../assets/developer.png'

export default function About(){
    return (
        <Box bg={'white'} p={3} m={4} minHeight='80vh'>
            <Avatar size='2xl' name='Dave Broaddus' src={developer}/>
            <Image src="https://imgs.xkcd.com/comics/nerd_sniping.png" />
        </Box>
    )
}