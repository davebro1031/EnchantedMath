import React from 'react'
import { Box, HStack, Text, useBoolean } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import TabHeader from './TabHeader'

export default function Hints({ hints }) {
    return (
        <Box>
            <TabHeader text="Hints" width='4em' />
            <Box p='2'>
                {hints.map((hint, index) => { return <Hint key={index} text={hint} index={hints.length > 1 ?index + 1 : ""} /> })}

            </Box>
        </Box>
    )
}

const Hint = ({ text, index }) => {
    const [show, setShow] = useBoolean()
    return (
        show ? <Text>{text}</Text> : <ShowHint index={index} setShow={setShow} />
    )
}

const ShowHint = ({ index, setShow }) => {
    return (
        <HStack onClick={setShow.on} _hover={{ cursor: 'pointer', bg: 'gray.100' }} color='gray.600'>
            <FontAwesomeIcon icon={faEye} />
            <Text>Hint {index}</Text>
        </HStack>
    )
}