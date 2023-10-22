import React from 'react'
import { VStack, Box, Button, Text, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import ChiliSlider from './ChiliSlider'
import CategorySelector from './CategorySelector'

function Sidebar({ setQuery, width, setChiliRange }) {
    return (
        <VStack as="section" height='100%' width={width} bg='teal' position='fixed' left='0' gap='6' p='6'>
            {/* <Box /> */}
            <VStack width='100%'>
                <Search setQuery={setQuery} />
                <Button> Advanced Search Options</Button>
                <ChiliSlider setChiliRange={setChiliRange} />
                <CategorySelector/>
            </VStack>
        </VStack>
    )
}

export default Sidebar
