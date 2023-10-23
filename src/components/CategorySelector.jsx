import { useEffect } from 'react'
import { Box, Text, useBoolean, Wrap, Button, Flex, Spacer } from '@chakra-ui/react'

export default function CategorySelector({ setCategories }) {
    const [ratios, setRatios] = useBoolean(true)
    const [graphs, setGraphs] = useBoolean(true)
    const [combinatorics, setCombinatorics] = useBoolean(true)
    const [primes, setPrimes] = useBoolean(true)
    const [multivariable, setMultivariable] = useBoolean(true)
    const [series, setSeries] = useBoolean(true)
    const [inequality, setInequality] = useBoolean(true)
    const [potpourri, setPotpourri] = useBoolean(true)

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
                <Button p='1.5' fontSize={13} height='5' onClick={handleClearAll}>clear all</Button>
                <Spacer />
                <Button p='1.5' fontSize={13} height='5'onClick={handleSelectAll}>select all</Button>
            </Flex>
            <Wrap>
                <Category name="proportional reasoning" selected={ratios} setSelected={setRatios} />
                <Category name="graph theory" selected={graphs} setSelected={setGraphs} />
                <Category name="counting" selected={combinatorics} setSelected={setCombinatorics} />
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
            boxShadow={selected ? "0 0 5px 1px yellow" : null}
            onClick={setSelected.toggle}
        >
            {name}
        </Button>
    )
}
