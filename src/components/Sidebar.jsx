import React from 'react'
import { VStack, Button } from '@chakra-ui/react'
import Search from './Search'
import ChiliSlider from './ChiliSlider'
import CategorySelector from './CategorySelector'

function Sidebar({ setQuery, width, setChiliRange, setCategories }) {
    return (
        <VStack as="section" height='100%' width={width} bg='teal' position='fixed' left='0' gap='6' p='6'>
            <VStack width='100%'>
                <Search setQuery={setQuery} />
                {/* <Button> Advanced Search Options</Button> */}
                <ChiliSlider setChiliRange={setChiliRange} />
                <CategorySelector setCategories={setCategories} />
            </VStack>
        </VStack>
    )
}

export default Sidebar
