import { useEffect, useState } from 'react'
import { problems } from '../problems/data'
import ProblemCard from './ProblemCard'
import { Wrap, WrapItem } from '@chakra-ui/react'


function ProblemsList({ query }) {
    const [filteredProblems, setFilteredProblems] = useState(problems)

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
        setFilteredProblems(
            problems.filter(
                problem => problemTextContainsQuery(problem, query)
            )
        )
    }, [query])

    return (
        <Wrap justify="space-around" margin='1.5em'>
            {filteredProblems.map(problem =>
                <WrapItem key={problem.id}>
                    <ProblemCard problem={problem} />
                </WrapItem>)
            }
        </Wrap>
    )
}

export default ProblemsList
