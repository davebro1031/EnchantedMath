import React from 'react'
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import Search from './Search'

function Header() {
    return (
        <Flex gap="2" align='center' p='2' bg='purple'>
            <Heading size='lg' color='white'>Nerd Snipes</Heading>
            <Spacer />
            <Search />
            <ButtonGroup>
                <Button colorScheme='purple'>Dave</Button>
                <Button colorScheme='purple'>Edith</Button>

            </ButtonGroup>
        </Flex>
    )
}

export default Header
