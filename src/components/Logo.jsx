import { HStack, Heading, Image } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import NerdSnipe2 from '../assets/NerdSnipe2.png'

export default function Logo() {
    const showName = useBreakpointValue({ base: false, sm: true })

    return (
        <HStack>
            <Image src={NerdSnipe2} boxSize='45px' />
            {showName ? <Heading size={['md', 'md', 'lg']} color='white'>Nerd Snipes</Heading> : null}
        </HStack>
    )
}