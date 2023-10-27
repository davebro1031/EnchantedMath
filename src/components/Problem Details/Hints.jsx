import React from 'react'
import { Box, HStack, Text, useBoolean } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import TabHeader from './TabHeader'

export default function Hints({ hints }) {
    return (
        <Box>
            <TabHeader text="Hints" width='60px' />
            <Box p='2'>
                {hints.map((hint, index) => (<Hint key={index} text={hint} /> ))}

            </Box>
        </Box>
    )
}

const Hint = ({ text }) => {
    const [show, setShow] = useBoolean()
    return (
        show ? <Text>{text}</Text> : <ShowHint setShow={setShow} />
    )
}

const ShowHint = ({ setShow }) => {
    return (
        <HStack onClick={setShow.on} _hover={{ cursor: 'pointer', bg: 'gray.100' }} color='gray.600'>
            <FontAwesomeIcon icon={faEye} />
            <Text> Show hint </Text>
        </HStack>
    )
}