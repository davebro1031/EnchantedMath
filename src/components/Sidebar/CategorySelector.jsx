import { useEffect } from 'react'
import { Box, Text, useBoolean, Wrap, Button, Flex, Spacer } from '@chakra-ui/react'

export default function CategorySelector({ categories, setCategories }) {
    const [ratios, setRatios] = useBoolean(categories.includes("proportional reasoning"))
    const [graphs, setGraphs] = useBoolean(categories.includes("graph theory"))
    const [combinatorics, setCombinatorics] = useBoolean(categories.includes("combinatorics"))
    const [primes, setPrimes] = useBoolean(categories.includes("prime factors"))
    const [multivariable, setMultivariable] = useBoolean(categories.includes("many variables"))
    const [series, setSeries] = useBoolean(categories.includes("series"))
    const [inequality, setInequality] = useBoolean(categories.includes("inequality"))
    const [potpourri, setPotpourri] = useBoolean(categories.includes("potpourri"))

    const handleClearAll = () => {
        setRatios.off()
        setGraphs.off()
        setCombinatorics.off()
        setPrimes.off()
        setMultivariable.off()
        setSeries.off()
        setInequality.off()
        setPotpourri.off()
    }
    const handleSelectAll = () => {
        setRatios.on()
        setGraphs.on()
        setCombinatorics.on()
        setPrimes.on()
        setMultivariable.on()
        setSeries.on()
        setInequality.on()
        setPotpourri.on()
    }
    useEffect(() => {

        const selectedCategories = [
            ratios && "proportional reasoning",
            graphs && "graph theory",
            combinatorics && "combinatorics",
            primes && "prime factors",
            multivariable && "many variables",
            series && "series",
            inequality && "inequality",
            potpourri && "potpourri"
        ].filter(item => item)
        setCategories(selectedCategories)
    }, [ratios, graphs, combinatorics, primes, multivariable, series, inequality, potpourri])


    return (
        <Box>
            <Text color='white' fontSize={20} mb={1}>Category</Text>
            <Flex mb={3} align='center'>
                <Button p='1.5' fontSize={13} height='5'onClick={handleSelectAll}>select all</Button>
                <Spacer />
                <Button p='1.5' fontSize={13} height='5' onClick={handleClearAll}>clear all</Button>
            </Flex>
            <Wrap>
                <Category name="proportional reasoning" selected={ratios} setSelected={setRatios} />
                <Category name="counting" selected={combinatorics} setSelected={setCombinatorics} />
                <Category name="graph theory" selected={graphs} setSelected={setGraphs} />
                <Category name="number theory" selected={primes} setSelected={setPrimes} />
                <Category name="multivariable" selected={multivariable} setSelected={setMultivariable} />
                <Category name="series" selected={series} setSelected={setSeries} />
                <Category name="inequality" selected={inequality} setSelected={setInequality} />
                <Category name="potpourri" selected={potpourri} setSelected={setPotpourri} />
            </Wrap>

        </Box>
    )
}

const Category = ({ name, selected, setSelected }) => {
    return (
        <Button
            p='2'
            bg={selected ? 'red.700' : 'red.900'}
            _hover={{ bg: 'red.600' }}
            color='white'
            boxShadow={selected ? "0 0 3px 1px orange" : null}
            onClick={setSelected.toggle}
        >
            {name}
        </Button>
    )
}
