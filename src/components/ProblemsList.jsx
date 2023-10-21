import { problems } from '../problems/data'
import ProblemCard from './ProblemCard'
import { VStack } from '@chakra-ui/react'


function ProblemsList({query}) {
    return (
        <VStack gap="24px">

        {problems.map(problem => <ProblemCard key={problem.id} problem={problem} />)}
        </VStack>
    )
}

export default ProblemsList
