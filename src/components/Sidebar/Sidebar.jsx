import React from 'react'
import { VStack, Button } from '@chakra-ui/react'
import Search from './Search'
import ChiliSlider from './ChiliSlider'
import CategorySelector from './CategorySelector'

export default function Sidebar({ setQuery, width, chiliRange, setChiliRange, categories, setCategories }) {
    return (
        <VStack as="section" height='100%' width={width} bg='teal' position='fixed' left='0' gap='6' p='6'>
            <VStack width='100%'>
                <Search setQuery={setQuery} />
                {/* <Button> Advanced Search Options</Button> */}
                <ChiliSlider chiliRange={chiliRange} setChiliRange={setChiliRange} />
                <CategorySelector categories={categories} setCategories={setCategories} />
            </VStack>
        </VStack>
    )
}