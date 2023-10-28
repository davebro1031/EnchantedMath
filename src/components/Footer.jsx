import { Flex, Box } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex 
        width='100%'
        align='center'
        p='2'
 
        bg='red.700'
        shadow='0 0 2px 2px var(--chakra-colors-red-700)'
        zIndex={1}
        shrink={0}
        >
            <Box>Hi</Box>
            <Box>this</Box>
            <Box>is</Box>
        </Flex>
    )
}