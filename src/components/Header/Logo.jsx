import { HStack, Heading, Image } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import NerdSnipe2 from '../../assets/NerdSnipe2.png'
import { useNavigate } from "react-router-dom"

export default function Logo() {
    const showName = useBreakpointValue({ base: false, sm: true })
    const navigate = useNavigate()
    return (
        <HStack onClick={()=>navigate("/")} _hover={{cursor:'pointer'}}>
            <Image src={NerdSnipe2} boxSize='45px' minWidth='45px' />
            {showName ? <Heading size={['md', 'md', 'lg']} width={['','6em','']}color='white'>Nerd Snipes</Heading> : null}
        </HStack>
    )
}