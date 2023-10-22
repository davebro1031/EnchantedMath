import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading, Spacer, Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

export default function ProblemCard({ problem }) {
    return (
        <Card width='300px' marginBottom="1.5em" variant='elevated' _hover={{boxShadow:'0 0 5px 3px #0BC5EA'}}>
            <CardHeader>
                <Flex align='center'>
                    <Heading size='md'>{problem.title}</Heading>
                    <Spacer />
                    <Chilis rating={problem.chilis} />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text noOfLines={5}>{problem.text}</Text>
            </CardBody>
        </Card>
    )
}

const Chilis = ({ rating }) => {
    return (

        Array.from({ length: rating }, (_, i) => i).map(el => (
            <FontAwesomeIcon key={el} icon={faPepperHot} />
        ))

    )
}