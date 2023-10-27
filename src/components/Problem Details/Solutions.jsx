import { Box, Text, Heading, Flex, Spacer } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

import TabHeader from './TabHeader'

export default function Solutions({ solution }) {
    const solutions = solution.solutions
    return (
        <Flex direction='column' grow='1'>
            <Heading size='sm' mb='8'>{["Answer:", solution.answer].join(" ")}</Heading>
            {solutions.map((solution, index) => {
                return (
                    <Box key={index}>
                        <TabHeader text={["Solution", solutions.length > 1 ? index + 1 : null].join(" ")} width={solutions.length > 1 ? '7em' : '5.5em'} />
                        <Text mt='2'><Latex>{solution}</Latex></Text>
                    </Box>
                )
            })}
            <Spacer />
            {solution.links ?
                <Box>
                    <TabHeader text="External Links" width="8em" />
                    {solution.links.map((link, index) => {
                        return (
                            <p key={index}>{link.text}</p>
                        )
                    })}
                </Box>
                : null}
        </Flex>
    )
}