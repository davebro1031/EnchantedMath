import { Box, Text, Heading } from '@chakra-ui/react'

import TabHeader from './TabHeader'

export default function Solutions({ solution }) {
    const solutions = solution.solutions
    return (
        <Box>
            <Heading size='sm'>{["Answer:",solution.answer].join(" ")}</Heading>
            {solutions.map((solution, index) => {
                return (
                    <Box key={index}>
                        <TabHeader text={["Solution", solutions.length > 1 ? index : null].join(" ")} width={solutions.length>1?'7em':'5.5em'} />
                        <Text mt='2'>{solution}</Text>
                    </Box>

                )
            }

            )}
        </Box>
    )
}