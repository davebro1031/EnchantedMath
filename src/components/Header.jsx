import React from 'react'
import { Flex, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import Search from './Search'

function Header({ setQuery }) {

    return (
        <Flex
            gap="2"
            align='center'
            p='2'
            bg='red.700'
            shadow='0 0 2px 2px var(--chakra-colors-red-700)'
            position='fixed'
            width='100%'
            zIndex={1}>
            <Heading size='lg' color='white'>Nerd Snipes</Heading>
            <Spacer />
            {/* <Search setQuery={setQuery} />
            <ButtonGroup>
                <Button
                    colorScheme='teal'>
                    Random Problem
                </Button>
            </ButtonGroup> */}
        </Flex>
    )
}

export default Header
