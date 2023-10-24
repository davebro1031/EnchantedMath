import { Box, Text } from '@chakra-ui/react'
import TabHeader from './TabHeader'


export default function RelatedProblems({ id }) {
    return (
        <Box>
            <TabHeader text='See Also' width='6em' />
            <Text>Related Problems</Text>
        </Box>
    )
}