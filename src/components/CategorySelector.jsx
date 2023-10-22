import { useEffect } from 'react'
import { Box, Text, useBoolean, Wrap, Button } from '@chakra-ui/react'

export default function CategorySelector() {
    const [ratios, setRatios] = useBoolean(true)
    const [graphs, setGraphs] = useBoolean(true)
    const [combinatorics, setCombinatorics] = useBoolean(true)
    const [primes, setPrimes] = useBoolean(true)
    const [multivariable, setMultivariable] = useBoolean(true)

    useEffect(() => {

        const selectedCategories = [
            ratios && "proportional reasoning",
            graphs && "graph theory",
            combinatorics && "combinatorics",
            primes && "prime factors",
            multivariable && "many variables"
        ].filter(item => item)

}, [ratios, graphs, combinatorics, primes, multivariable])


return (
    <Box>
        <Text color='white'>Category</Text>
        <Wrap>
            <Category name="proportional reasoning" selected={ratios} setSelected={setRatios} />
            <Category name="graph theory" selected={graphs} setSelected={setGraphs} />
            <Category name="counting" selected={combinatorics} setSelected={setCombinatorics} />
            <Category name="number theory" selected={primes} setSelected={setPrimes} />
            <Category name="multivariable" selected={multivariable} setSelected={setMultivariable} />

        </Wrap>

    </Box>
)
}

const Category = ({ name, selected, setSelected }) => {
    return (
        <Button
            p='2'
            // m='0.5'
            bg={selected ? 'red.700' : 'red.900'}
            _hover={{ bg: 'red.600' }}
            color='white'
            boxShadow={selected ? "0 0 5px 1px yellow" : null}
            onClick={setSelected.toggle}
        >
            {name}
        </Button>
    )
}
