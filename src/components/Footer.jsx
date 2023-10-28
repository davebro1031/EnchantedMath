import { Flex, HStack, Text, Link } from '@chakra-ui/react'

export default function Footer({ ml, width }) {
    return (
        <Flex
            ml={ml}
            width={width}
            align='center'
            p='4'
            bg='red.700'
            shadow='0 0 2px 2px var(--chakra-colors-red-700)'
            shrink={0}
            minHeight='50px'
            justify='space-around'
        >
            <HStack>
                <Text color='white'>Contact us</Text>
                <Link color='gray.300' href="mailto:nerdsnipesfeedback@gmail.com" _hover={{textDecoration:'none'}}>nerdsnipesfeedback@gmail.com</Link>
            </HStack>
        </Flex>
    )
}