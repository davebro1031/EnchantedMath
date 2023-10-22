import React from 'react'
import { Flex, Heading, Spacer, ButtonGroup, Button, Image, Box, HStack } from '@chakra-ui/react'
import NerdSnipe2 from '../assets/NerdSnipe2.png'
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
            <HStack>
                <Image src={NerdSnipe2} boxSize='50px' />
                <Heading size='lg' color='white'>Nerd Snipes</Heading>
            </HStack>
            <Spacer />
            {false ?
                <>
                    <Search setQuery={setQuery} />
                    <ButtonGroup>
                        <Button
                            colorScheme='teal'>
                            Random Problem
                        </Button>
                    </ButtonGroup>
                </> : null
            }
        </Flex>
    )
}

export default Header
