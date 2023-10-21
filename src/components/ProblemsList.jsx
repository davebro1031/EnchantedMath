import { problems } from '../problems/data'
import ProblemCard from './ProblemCard'
import { VStack } from '@chakra-ui/react'


function ProblemsList({query}) {
    return (
        <VStack gap="24px" position='relative' top='80px' bg='purple.100'>

        {problems.map(problem => <ProblemCard key={problem.id} problem={problem} />)}
        </VStack>
    )
}

export default ProblemsList
