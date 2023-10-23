import {Box, Flex, Text} from '@chakra-ui/react'

export default function TabHeader({ text, width }) {
    return (
        <Box>
            <Text color='red.600' m='0.5em'>{text}</Text>
            <Flex>
                <Box width={width} height='2px' bg='red.600'></Box>
                <Box width='100%' height='2px' bg='gray.200'></Box>
            </Flex>
        </Box>
    )
}