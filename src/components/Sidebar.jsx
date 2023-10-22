import React from 'react'
import { VStack, Box, Button } from '@chakra-ui/react'
import Search from './Search'

function Sidebar({ setQuery }) {
    return (
        <VStack height='100%' width='250px' bg='teal' position='fixed' left='0' gap='24px'>
            <Box />
            <VStack width='100%'>
                <Search setQuery={setQuery} />
                <Button> Advanced Search Options</Button>
            </VStack>
        </VStack>
    )
}

export default Sidebar
