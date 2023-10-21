import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading } from '@chakra-ui/react'

function ProblemCard({ problem }) {
    return (
        <Card width='400px'>
            <CardHeader>
                <Heading>{problem.title}</Heading>
            </CardHeader>

            <CardBody>
                <Text>{problem.text}</Text>
            </CardBody>
        </Card>
    )
}

export default ProblemCard
