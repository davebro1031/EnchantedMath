import React from 'react'
import { Flex, Heading, Spacer, IconButton, Image, HStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useBreakpointValue } from '@chakra-ui/react'
import NerdSnipe2 from '../assets/NerdSnipe2.png'
import Search from './Search'

function Header({ setQuery, onOpen, btnRef }) {
    const showNav = useBreakpointValue({ base: true, md: false })
    const showName = useBreakpointValue({ base: false, sm: true })

    return (
        <Flex
            as="header"
            gap="1"
            align='center'
            p='2'
            bg='red.700'
            shadow='0 0 2px 2px var(--chakra-colors-red-700)'
            position='fixed'
            width='100%'
            zIndex={1}>
            <HStack>
                <Image src={NerdSnipe2} boxSize='45px' />
                {showName ? <Heading size={['md','md','lg']} color='white'>Nerd Snipes</Heading> : null}
            </HStack>
            <Spacer />
            {showNav ?
                <>
                    <Search setQuery={setQuery} />
                    <IconButton
                        ref={btnRef} 
                        onClick={onOpen}
                        color='yellow'
                        bg='inherit'
                        borderRadius='50%'
                        _hover={{ backgroundColor: 'red.800' }}
                        icon={<HamburgerIcon boxSize={7} />} />
                </> : null
            }
        </Flex>
    )
}

export default Header
