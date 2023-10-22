import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading, } from '@chakra-ui/react'

function ProblemCard({ problem }) {
    return (
        <Card width='300px' marginBottom="1.5em" borderColor='red' variant='elevated'>
            <CardHeader>
                <Heading size='md'>{problem.title}</Heading>
            </CardHeader>
            <CardBody>
                <Text noOfLines={5}>{problem.text}</Text>
            </CardBody>
        </Card>
    )
}

export default ProblemCard
