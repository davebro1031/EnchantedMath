import { Flex, Wrap, Text, Spacer, Box } from "@chakra-ui/react"

import Hints from "./Hints"
import RelatedProblems from "./RelatedProblems"
import ProblemImage from "./ProblemImage"
import Tags from './Tags';

export default function Problem({problem, problemImage}) {
    return (
        <Flex direction='column' grow='1'>
            <Box gap='4'>
                {problemImage ? <ProblemImage image={problemImage} /> : null}
                <Text mb={3}>{problem.text}</Text>

            </Box>
            <Spacer />
            <Box>
                {problem.hints ? <Hints hints={problem.hints} /> : null}
                <RelatedProblems id={problem.id} />
                {/* <Tags categories={problem.categories} /> */}
            </Box>
        </Flex>
    )
}