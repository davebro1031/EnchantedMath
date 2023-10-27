import { Box, Text } from '@chakra-ui/react'
import TabHeader from './TabHeader'


export default function RelatedProblems({ id }) {
    return (
        <Box>
            <TabHeader text='See Also' width='85px' />
            <Text>Related Problems</Text>
        </Box>
    )
}