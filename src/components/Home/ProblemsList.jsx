import { useEffect, useState } from 'react'
import { problems } from '../../problems/data'
import ProblemCard from './ProblemCard'
import { Wrap, WrapItem } from '@chakra-ui/react'


function ProblemsList({ query, chiliRange, categories, queriedProblems }) {
    
    return (
        <Wrap justify="space-around" margin='1em'>
            {queriedProblems.map(problem =>
                <WrapItem key={problem.id}>
                    <ProblemCard problem={problem} />
                </WrapItem>)
            }
        </Wrap>
    )
}

export default ProblemsList
