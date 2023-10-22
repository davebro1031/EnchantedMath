import { useEffect, useState } from 'react'
import { problems } from '../problems/data'
import ProblemCard from './ProblemCard'
import { Wrap, WrapItem } from '@chakra-ui/react'


function ProblemsList({ query, chiliRange }) {
    const [filteredProblems, setFilteredProblems] = useState(problems)
    const [queriedProblems, setQueriedProblems] = useState(problems)

    const problemTextContainsQuery = (problem, str) => {
        const queryWords = str.toLowerCase().split(" ")
        if (str === "") return true

        const problemText = [
            problem.title,
            problem.text,
            problem.categories].join(" ").toLowerCase()

        let foundAllQueryWords = true
        for (let word of queryWords) foundAllQueryWords = foundAllQueryWords && problemText.includes(word)
        return foundAllQueryWords
    }

    useEffect(() => {
        let filteredProblemList = problems
        filteredProblemList = filteredProblemList.filter(problem =>
            (problem.chilis >= chiliRange[0] && problem.chilis <= chiliRange[1])
        )
        setFilteredProblems(filteredProblemList)
    }, [chiliRange])
    
    useEffect(() => {
        const queriedList = filteredProblems.filter(
            problem => problemTextContainsQuery(problem, query)
        )
        setQueriedProblems(queriedList)
    }, [query, filteredProblems])

    return (
        <Wrap justify="space-around" margin='1.5em'>
            {queriedProblems.map(problem =>
                <WrapItem key={problem.id}>
                    <ProblemCard problem={problem} />
                </WrapItem>)
            }
        </Wrap>
    )
}

export default ProblemsList
