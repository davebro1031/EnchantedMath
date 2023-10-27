import React from 'react'
import { Flex, Spacer, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, InfoIcon } from '@chakra-ui/icons'
import { useBreakpointValue } from '@chakra-ui/react'
import Search from '../Sidebar/Search'
import Logo from './Logo'

function Header({ setQuery, onOpen, btnRef }) {
    const showNav = useBreakpointValue({ base: true, md: false })

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
            <Logo />
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
            <IconButton
                isRound
                icon={<InfoIcon color='white' boxSize={6} />}
                bg='red.700'
                _hover={{bg:'red.600'}}
            />
        </Flex>
    )
}

export default Header
