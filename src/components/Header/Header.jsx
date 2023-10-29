import React from 'react'
import { Flex, Spacer, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, InfoIcon } from '@chakra-ui/icons'
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import Search from '../Sidebar/Search'
import InfoMenu from './InfoMenu'
import Logo from './Logo'
import ProblemSubmissions from './ProblemSubmissions'

function Header({ setQuery, onOpen, btnRef }) {
    const showNav = useBreakpointValue({ base: true, md: false })
    const problemSubmissionsDisclosure = useDisclosure()

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
                        color='white'
                        bg='inherit'
                        isRound
                        _hover={{ backgroundColor: 'red.800' }}
                        icon={<HamburgerIcon boxSize={7} />} />
                </> : null
            }
            <InfoMenu onOpen={problemSubmissionsDisclosure.onOpen}/>
            <ProblemSubmissions isOpen={problemSubmissionsDisclosure.isOpen} onClose={problemSubmissionsDisclosure.onClose} />
        </Flex>
    )
}

export default Header
