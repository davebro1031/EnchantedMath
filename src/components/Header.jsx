import React from 'react'
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import Search from './Search'

function Header({ setQuery }) {

    return (
        <Flex gap="2" align='center' p='2' bg='purple.300' position='fixed' width='100%'>
            <Heading size='lg' color='white'>Nerd Snipes</Heading>
            <Spacer />
            <Search setQuery={setQuery} />
            <ButtonGroup>
                <Button colorScheme='purple'>Random Problem</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Header
