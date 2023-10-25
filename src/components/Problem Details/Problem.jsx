import { Flex, Wrap, Text, Spacer, Box } from "@chakra-ui/react"

import Hints from "./Hints"
import RelatedProblems from "./RelatedProblems"
import ProblemImages from "./ProblemImages"

export default function Problem({problem, problemImages}) {
    return (
        <Flex direction='column' grow='1'>
            <Wrap gap='4'>
                {problemImages ? <ProblemImages images={problemImages.data} /> : null}
                <Text mb={3}>{problem.text}</Text>

            </Wrap>
            <Spacer />
            <Box>
                {problem.hints ? <Hints hints={problem.hints} /> : null}
                <RelatedProblems id={problem.id} />
                {/* <Tags categories={problem.categories} /> */}
            </Box>
        </Flex>
    )
}