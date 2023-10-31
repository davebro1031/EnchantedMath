import { Flex, Wrap, Text, Spacer, Box, Image, useBreakpointValue } from "@chakra-ui/react"

import Hints from "./Hints"
import RelatedProblems from "./RelatedProblems"
import Tags from './Tags';

export default function Problem({ problem, image }) {
    const floatMaxWidth = useBreakpointValue({
        base: '250px',
        md: '300px',
        lg: '350px'
    })
    return (
        <Flex direction='column' grow='1'>
            <Box gap='4'>
                {image ?
                    <Image
                        src={image.src}
                        alt={image.alt}
                        boxSize='100%'
                        maxWidth={image.float ? floatMaxWidth : '500px'}
                        float={['', image.float, image.float]}
                        p='4' />
                    :
                    null
                }
                <Text mb={3}>{problem.text}</Text>

            </Box>
            <Spacer />
            <Box>
                {problem.hints ? <Hints hints={problem.hints} /> : null}
                {/* <RelatedProblems id={problem.id} /> */}
                {/* <Tags categories={problem.categories} /> */}
            </Box>
        </Flex>
    )
}