import { Flex, HStack, Text, Link, useBreakpointValue } from '@chakra-ui/react'

export default function Footer({ ml, width }) {
    const showContact = useBreakpointValue({ base: false, sm: true })
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
                
                {showContact? <Text color='white'>Contact us</Text> : null}
                <Link color='gray.300' href="mailto:enchantedmathfeedback@gmail.com" _hover={{textDecoration:'none'}}>enchantedmathfeedback@gmail.com</Link>
            </HStack>
        </Flex>
    )
}