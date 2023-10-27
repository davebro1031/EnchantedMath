import { Box, Text, Heading, Flex, Spacer, Link, HStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
                        <TabHeader text={["Solution", solutions.length > 1 ? index + 1 : null].join(" ")} width={solutions.length > 1 ? '100px' : '80px'} />
                        <Text mt='2'><Latex>{solution}</Latex></Text>
                    </Box>
                )
            })}
            <Spacer />
            {solution.links ?
                <Box>
                    <TabHeader text="Links" width="55px" />
                    {solution.links.map((link, index) => {
                        return (
                            <HStack key={index}>
                                <Link href={link.href} isExternal>{link.text} </Link>
                                <ExternalLinkIcon />
                            </HStack>
                        )
                    })}
                </Box>
                : null}
        </Flex>
    )
}